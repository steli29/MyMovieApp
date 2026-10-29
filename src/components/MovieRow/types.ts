import type { Movie, MovieCategory } from "../../types/movie";

export type OnMoviePressType = (movie: Movie) => void;

export type MovieRowPropsType = {
  category: MovieCategory;
  onMoviePress: OnMoviePressType
};