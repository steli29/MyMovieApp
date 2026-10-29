
import { useEffect, useState } from 'react';
import { getSeasonEpisodes } from '../services/omdbApi';
import type { Episode } from '../types/series';

export const useSeasonEpisodes = (
  imdbID: string,
  season: number,
) => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    const loadEpisodes = async () => {
      setIsLoading(true);
      setError(null);
      setEpisodes([]);

      try {
        const data = await getSeasonEpisodes(imdbID, season);

        if (!isActive) return;

        setEpisodes(data.Episodes ?? []);
      } catch (err) {
        if (!isActive) return;

        setError(
          err instanceof Error
            ? err.message
            : 'Failed to load episodes',
        );
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    loadEpisodes();

    return () => {
      isActive = false;
    };
  }, [imdbID, season]);

  return {
    episodes,
    isLoading,
    error,
  };
};
