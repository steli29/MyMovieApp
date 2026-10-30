export type Episode = {
  Title: string;
  Released: string;
  Episode: string;
  imdbRating: string;
  imdbID: string;
};

export type SeasonDetails = {
  Title: string;
  Season: string;
  totalSeasons: string;
  Episodes: Episode[];
};
