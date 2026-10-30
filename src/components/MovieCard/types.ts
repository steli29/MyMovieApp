import type { Movie } from '../../types/movie';
import type { MovieCardVariants } from '../../utils/constants';

export type MovieCardPropsType = {
  movie: Movie;
  onPress: (movie: Movie) => void;
  variant?: MovieCardVariants;
  onPosterError?: (imdbID: string) => void;
};
