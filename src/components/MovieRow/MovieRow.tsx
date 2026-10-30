import { useMemo, useState, type FC } from 'react';
import { FlatList, Text, View } from 'react-native';
import type { MovieRowPropsType } from './types';
import { MovieCategoryType } from '../../types/movie';
import MovieCard from '../MovieCard';
import { styles } from './styles';

export const MovieRow: FC<MovieRowPropsType> = ({ category, onMoviePress }) => {
  const [failedPosters, setFailedPosters] = useState<string[]>([]);

  const isTop10 = category.type === MovieCategoryType.Top10;

  const visibleMovies = useMemo(
    () =>
      category.movies.filter(movie => !failedPosters.includes(movie.imdbID)),
    [category.movies, failedPosters],
  );

  const handlePosterError = (imdbID: string) => {
    setFailedPosters(prev =>
      prev.includes(imdbID) ? prev : [...prev, imdbID],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.title}</Text>

      <FlatList
        data={visibleMovies}
        horizontal
        keyExtractor={item => item.imdbID}
        renderItem={({ item, index }) => (
          <MovieCard
            movie={item}
            onPress={onMoviePress}
            onPosterError={handlePosterError}
            rank={isTop10 ? index + 1 : undefined}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
