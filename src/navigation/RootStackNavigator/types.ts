import type { ScreenNames } from '../../utils/constants';

export type RootStackParamList = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.MovieDetails]: {
    imdbID: string;
  };
};
