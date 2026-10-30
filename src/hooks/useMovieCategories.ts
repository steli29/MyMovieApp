import { useCallback, useEffect, useRef, useState } from 'react';
import { getMovieDetails } from '../services/omdbApi';
import { MOVIE_CATEGORIES } from '../mocks/movieCategories';
import type { MovieCategory, MovieDetails } from '../types/movie';
import { EMPTY_VALUE } from '../utils/constants';

export const useMovieCategories = () => {
  const [categories, setCategories] = useState<MovieCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useRef(true);

  const refetchCategories = useCallback(async () => {
    setError(null);

    const results = await Promise.allSettled(
      MOVIE_CATEGORIES.map(async (category): Promise<MovieCategory> => {
        const movieResults = await Promise.allSettled(
          category.imdbIDs.map(imdbID => getMovieDetails(imdbID)),
        );

        const movies = movieResults
          .filter(
            (result): result is PromiseFulfilledResult<MovieDetails> =>
              result.status === 'fulfilled',
          )
          .map(result => result.value)
          .filter(movie => movie.Poster && movie.Poster !== EMPTY_VALUE);

        return {
          id: category.id,
          title: category.title,
          type: category.type,
          movies,
        };
      }),
    );

    if (!isMounted.current) {
      return;
    }

    const loadedCategories = results
      .filter(
        (result): result is PromiseFulfilledResult<MovieCategory> =>
          result.status === 'fulfilled',
      )
      .map(result => result.value)
      .filter(category => category.movies.length > 0);

    setCategories(loadedCategories);

    if (loadedCategories.length === 0) {
      setError('Failed to load movie categories');
    }
  }, []);

  useEffect(() => {
    isMounted.current = true;

    const loadCategories = async () => {
      setIsLoading(true);

      try {
        await refetchCategories();
      } finally {
        if (isMounted.current) {
          setIsLoading(false);
        }
      }
    };

    loadCategories();

    return () => {
      isMounted.current = false;
    };
  }, [refetchCategories]);

  return {
    categories,
    isLoading,
    error,
    refetchCategories,
  };
};
