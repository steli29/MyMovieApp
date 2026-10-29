import type { Movie } from "../../types/movie";
import type { MovieCardVariants } from "../../utils/constants";
import type { OnMoviePressType } from "../MovieRow/types";

export type MovieCardPropsType = {
  movie: Movie;
  onPress: OnMoviePressType
  variant?: MovieCardVariants
  onPosterError?: (imdbID: string) => void;
};