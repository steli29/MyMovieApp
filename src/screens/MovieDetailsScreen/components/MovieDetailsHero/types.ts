import type { MovieDetails } from '../../../../types/movie';

export type MovieDetailsHeroPropsType = {
  movie: MovieDetails;
  onBackPress: () => void;
};
