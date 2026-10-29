import type { FC } from 'react';
import { ActivityIndicator } from 'react-native';

import MovieRow from '../../../../components/MovieRow';
import type { YouMightAlsoLikePropsType } from './types';
import type { MovieCategory } from '../../../../types/movie';
import { useRecommendedMovies } from '../../../../hooks/useRecommendedMovies';

export const YouMightAlsoLike: FC<YouMightAlsoLikePropsType> = ({
  currentImdbID,
  onMoviePress,
}) => {
  const { movies, isLoading } = useRecommendedMovies(currentImdbID);

  if (isLoading) {
    return <ActivityIndicator color="#E50914" />;
  }

  if (!movies.length) return null;

  const category: MovieCategory = {
    id: 'recommended',
    title: 'You Might Also Like',
    movies,
  };

  return (
    <MovieRow
      category={category}
      onMoviePress={onMoviePress}
    />
  );
};