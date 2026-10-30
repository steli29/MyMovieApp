import { useMemo, useState, type FC } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { ChevronDown } from 'lucide-react-native';

import type { EpisodesPropsType } from './types';
import { styles } from './styles';
import { useSeasonEpisodes } from '../../../../hooks/useSeasonEpisodes';
import EpisodeCard from '../../../../components/EpisodeCard';
import type { Episode } from '../../../../types/series';
import SeasonPickerModal from './components/SeasonPickerModal';

export const Episodes: FC<EpisodesPropsType> = ({ imdbID, totalSeasons }) => {
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [isSeasonPickerVisible, setIsSeasonPickerVisible] = useState(false);
  const [selectedEpisodeID, setSelectedEpisodeID] = useState<string | null>(
    null,
  );

  const { episodes, isLoading, error } = useSeasonEpisodes(
    imdbID,
    selectedSeason,
  );

  const seasons = useMemo(
    () => Array.from({ length: totalSeasons }, (_, index) => index + 1),
    [totalSeasons],
  );

  const handleEpisodePress = (episode: Episode) => {
    setSelectedEpisodeID(current =>
      current === episode.imdbID ? null : episode.imdbID,
    );
  };

  const handleSeasonPress = (season: number) => {
    setSelectedSeason(season);
    setSelectedEpisodeID(null);
    setIsSeasonPickerVisible(false);
  };

  return (
    <View style={styles.container}>
      <SeasonPickerModal
        visible={isSeasonPickerVisible}
        seasons={seasons}
        selectedSeason={selectedSeason}
        onSelectSeason={handleSeasonPress}
        onClose={() => setIsSeasonPickerVisible(false)}
      />
      <View style={styles.header}>
        <Text style={styles.title}>Episodes</Text>
        <Pressable
          style={styles.seasonButton}
          onPress={() => setIsSeasonPickerVisible(true)}
        >
          <Text style={styles.seasonButtonText}>Season {selectedSeason}</Text>
          <ChevronDown size={18} color="#FFFFFF" />
        </Pressable>
      </View>
      {isLoading ? (
        <ActivityIndicator color="#E50914" style={styles.loader} />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <View style={styles.episodeList}>
          {episodes.map(episode => (
            <EpisodeCard
              key={episode.imdbID}
              episode={episode}
              isExpanded={selectedEpisodeID === episode.imdbID}
              onPress={() => handleEpisodePress(episode)}
            />
          ))}
        </View>
      )}
    </View>
  );
};
