import { Image, View } from 'react-native';

import type { FC } from 'react';
import type { MovieDetailsHeroPropsType } from './types';
import { styles } from './styles';
import AppHeaderBack from '../../../../components/AppHeaderBack';
import { Play } from 'lucide-react-native';

export const MovieDetailsHero: FC<MovieDetailsHeroPropsType> = ({
  movie,
  onBackPress,
}) => {
  return (
    <View style={styles.container}>
      {movie.Poster !== 'N/A' && (
        <Image
          source={{ uri: movie.Poster }}
          style={styles.poster}
          resizeMode="cover"
        />
      )}
      <View style={styles.playButton}>
        <Play size={32} color="#FFFFFF" fill="#FFFFFF" />
      </View>
      <View style={styles.backButton}>
        <AppHeaderBack onPress={onBackPress} />
      </View>
    </View>
  );
};
