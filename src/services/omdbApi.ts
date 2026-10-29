
import type {
  Movie,
  MovieDetails,
  MovieSearchResponse,
} from '../types/movie';
import type { SeasonDetails } from '../types/series';

const API_URL = 'https://www.omdbapi.com/';
const API_KEY = 'd7afa2d9';

const fetchFromOmdb = async <T>(
  params: Record<string, string>,
): Promise<T> => {
  const query = new URLSearchParams({
    apikey: API_KEY,
    ...params,
  });

  const response = await fetch(`${API_URL}?${query.toString()}`);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();

  if (data.Response === 'False') {
    throw new Error(data.Error ?? 'OMDb request failed');
  }

  return data as T;
};

export const searchMovies = async (
  query: string,
  type: 'movie' | 'series' = 'movie',
): Promise<Movie[]> => {
  const data = await fetchFromOmdb<MovieSearchResponse>({
    s: query,
    type,
  });

  return data.Search ?? [];
};

export const getMovieDetails = async (
  imdbId: string,
): Promise<MovieDetails> => {
  return fetchFromOmdb<MovieDetails>({
    i: imdbId,
    plot: 'full',
  });
};

export const getSeasonEpisodes = async (
  imdbId: string,
  season: number,
): Promise<SeasonDetails> => {
  return fetchFromOmdb<SeasonDetails>({
    i: imdbId,
    Season: String(season),
  });
};
