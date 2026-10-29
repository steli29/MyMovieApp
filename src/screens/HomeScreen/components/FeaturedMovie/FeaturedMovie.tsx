import type { FC } from 'react';
import { View } from 'react-native';
import type { FeaturedMoviePropsType } from './types';
import { styles } from './styles';
import MovieCard from '../../../../components/MovieCard';
import { MovieCardVariants } from '../../../../utils/constants';

export const FeaturedMovie: FC<FeaturedMoviePropsType> = ({
  movie,
  onMoviePress,
}) => {
  return (
    <View style={styles.container}>
      <MovieCard
        movie={movie}
        variant={MovieCardVariants.featured}
        onPress={onMoviePress}
      />
    </View>
  );
};
