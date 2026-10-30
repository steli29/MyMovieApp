import { useEffect, useState } from 'react';

import { getMovieDetails } from '../services/omdbApi';
import type { Movie } from '../types/movie';
import { RECOMMENDED_MOVIE_IDS } from '../mocks/recommendedMovies';
import { EMPTY_VALUE } from '../utils/constants';

export const useRecommendedMovies = (currentImdbID: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    const loadMovies = async () => {
      setIsLoading(true);

      const results = await Promise.allSettled(
        RECOMMENDED_MOVIE_IDS.filter(imdbID => imdbID !== currentImdbID).map(
          imdbID => getMovieDetails(imdbID),
        ),
      );

      if (!isActive) return;

      const recommendedMovies = results
        .filter(
          (
            result,
          ): result is PromiseFulfilledResult<
            Awaited<ReturnType<typeof getMovieDetails>>
          > => result.status === 'fulfilled',
        )
        .map(result => result.value)
        .filter(movie => movie.Poster && movie.Poster !== EMPTY_VALUE);

      setMovies(recommendedMovies);
      setIsLoading(false);
    };

    loadMovies();

    return () => {
      isActive = false;
    };
  }, [currentImdbID]);

  return { movies, isLoading };
};
