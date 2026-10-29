
import { useEffect, useState } from 'react';

import { getMovieDetails } from '../services/omdbApi';
import type { MovieDetails } from '../types/movie';

export const useMovieDetails = (imdbID: string) => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    const loadMovie = async () => {
      try {
        setIsLoading(true);
        setError(null);
        setMovie(null);

        const result = await getMovieDetails(imdbID);

        if (isActive) {
          setMovie(result);
        }
      } catch (err) {
        if (isActive) {
          setError(
            err instanceof Error
              ? err.message
              : 'Failed to load movie details',
          );
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    loadMovie();

    return () => {
      isActive = false;
    };
  }, [imdbID]);

  return {
    movie,
    isLoading,
    error,
  };
};
