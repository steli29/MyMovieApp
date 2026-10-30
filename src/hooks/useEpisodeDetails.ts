import { useEffect, useState } from 'react';

import { getMovieDetails } from '../services/omdbApi';
import type { MovieDetails } from '../types/movie';

export const useEpisodeDetails = (imdbID: string, isExpanded: boolean) => {
  const [details, setDetails] = useState<MovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isExpanded) {
      setDetails(null);
      setError(null);
      setIsLoading(false);
      return;
    }

    let isActive = true;

    const loadDetails = async () => {
      setIsLoading(true);
      setError(null);
      setDetails(null);

      try {
        const data = await getMovieDetails(imdbID);

        if (isActive) {
          setDetails(data);
        }
      } catch (err) {
        if (isActive) {
          setError(
            err instanceof Error
              ? err.message
              : 'Failed to load episode details',
          );
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    loadDetails();

    return () => {
      isActive = false;
    };
  }, [imdbID, isExpanded]);

  return { details, isLoading, error };
};
