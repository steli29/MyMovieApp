import type { Movie, MovieCategory } from '../../types/movie';

export type MovieRowPropsType = {
  category: MovieCategory;
  onMoviePress: (movie: Movie) => void;
};
