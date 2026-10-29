import { Image, Pressable } from 'react-native';

import type { FC } from 'react';
import type { MovieCardPropsType } from './types';
import { styles } from './styles';
import { MovieCardVariants } from '../../utils/constants';

export const MovieCard: FC<MovieCardPropsType> = ({
  movie,
  onPress,
  variant = MovieCardVariants.default,
  onPosterError,
}) => {
  const isFeatured = variant === MovieCardVariants.featured;

  return (
    <Pressable
      style={[styles.container, isFeatured && styles.featuredContainer]}
      onPress={() => onPress(movie)}
    >
      <Image
        source={{ uri: movie.Poster }}
        style={[styles.poster, isFeatured && styles.featuredPoster]}
        resizeMode="cover"
        onError={() => onPosterError?.(movie.imdbID)}
      />
    </Pressable>
  );
};
