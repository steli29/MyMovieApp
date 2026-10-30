import type { Movie } from '../../../../types/movie';

export type FeaturedMoviePropsType = {
  movie: Movie;
  onMoviePress: (movie: Movie) => void;
};
