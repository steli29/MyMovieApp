import type { OnMoviePressType } from '../../../../components/MovieRow/types';
import type { Movie } from '../../../../types/movie';

export type FeaturedMoviePropsType = {
  movie: Movie;
  onMoviePress: OnMoviePressType;
};
