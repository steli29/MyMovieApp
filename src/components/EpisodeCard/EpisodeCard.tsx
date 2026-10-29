import type { FC } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { Star, ChevronDown, ChevronUp } from 'lucide-react-native';

import { useEpisodeDetails } from '../../hooks/useEpisodeDetails';
import { EMPTY_VALUE } from '../../utils/constants';
import type { EpisodeCardPropsType } from './types';
import { styles } from './styles';

export const EpisodeCard: FC<EpisodeCardPropsType> = ({
  episode,
  isExpanded,
  onPress,
}) => {
  const { details, isLoading, error } = useEpisodeDetails(
    episode.imdbID,
    isExpanded,
  );

  const hasReleaseDate = episode.Released && episode.Released !== EMPTY_VALUE;

  const hasRating = episode.imdbRating && episode.imdbRating !== EMPTY_VALUE;

  return (
    <View style={[styles.container, isExpanded && styles.selectedContainer]}>
      <Pressable onPress={onPress} style={styles.header}>
        <View style={styles.information}>
          <Text style={styles.title}>
            {episode.Episode}. {episode.Title}
          </Text>

          <View style={styles.metadata}>
            {hasReleaseDate && (
              <Text style={styles.releaseDate}>{episode.Released}</Text>
            )}

            {hasRating && (
              <View style={styles.ratingContainer}>
                <Star size={14} color="#F5C518" fill="#F5C518" />
                <Text style={styles.rating}>{episode.imdbRating}</Text>
              </View>
            )}
          </View>
        </View>

        {isExpanded ? (
          <ChevronUp size={20} color="#AAAAAA" />
        ) : (
          <ChevronDown size={20} color="#AAAAAA" />
        )}
      </Pressable>

      {isExpanded && (
        <View style={styles.expandedContent}>
          {isLoading ? (
            <ActivityIndicator color="#E50914" />
          ) : error ? (
            <Text style={styles.error}>{error}</Text>
          ) : details ? (
            <>
              {details.Runtime !== EMPTY_VALUE && (
                <Text style={styles.runtime}>{details.Runtime}</Text>
              )}

              {details.Plot !== EMPTY_VALUE && (
                <Text style={styles.description}>{details.Plot}</Text>
              )}
            </>
          ) : null}
        </View>
      )}
    </View>
  );
};
