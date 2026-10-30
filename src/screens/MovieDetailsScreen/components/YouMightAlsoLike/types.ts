import type { Movie } from '../../../../types/movie';

export type YouMightAlsoLikePropsType = {
  currentImdbID: string;
  onMoviePress: (movie: Movie) => void;
};
