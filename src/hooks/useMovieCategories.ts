import { useCallback, useEffect, useRef, useState } from 'react';
import { searchMovies } from '../services/omdbApi';
import type { MovieCategory } from '../types/movie';
import { EMPTY_VALUE } from '../utils/constants';
import { CATEGORY_QUERIES } from '../mocks/movieCategories';

export const useMovieCategories = () => {
  const [categories, setCategories] = useState<MovieCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useRef(true);

  const refetchCategories = useCallback(async () => {
    setError(null);
    const results = await Promise.allSettled(
      CATEGORY_QUERIES.map(async (category): Promise<MovieCategory> => {
        const movies = (
          await searchMovies(category.query, category.type)
        ).filter(movie => movie.Poster && movie.Poster !== EMPTY_VALUE);

        return {
          id: category.id,
          title: category.title,
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
