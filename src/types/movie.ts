export type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
};

export type MovieSearchResponse = {
  Search?: Movie[];
  totalResults?: string;
  Response: 'True' | 'False';
  Error?: string;
};

export type MovieRating = {
  Source: string;
  Value: string;
};

export type MovieDetails = {
  imdbID: string;
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: MovieRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  Type: MovieType;
  DVD?: string;
  BoxOffice: string;
  Production?: string;
  Website?: string;
  Response: 'True' | 'False';
  Error?: string;
  totalSeasons?: string;
  seriesID?: string;
  Season?: string;
  Episode?: string;
};

export type MovieCategory = {
  id: string;
  title: string;
  movies: Movie[];
};

export type MovieType = 'movie' | 'series' | 'episode';
