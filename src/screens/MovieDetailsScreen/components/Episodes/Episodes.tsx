import { useState, type FC } from 'react';
import {
  ActivityIndicator,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { ChevronDown } from 'lucide-react-native';

import type { EpisodesPropsType } from './types';
import { styles } from './styles';
import { useSeasonEpisodes } from '../../../../hooks/useSeasonEpisodes';
import EpisodeCard from '../../../../components/EpisodeCard';
import type { Episode } from '../../../../types/series';

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

  const seasons = Array.from({ length: totalSeasons }, (_, index) => index + 1);

  const handleEpisodePress = (episode: Episode) => {
    setSelectedEpisodeID(current =>
      current === episode.imdbID ? null : episode.imdbID,
    );
  };

  return (
    <View style={styles.container}>
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

      <Modal
        visible={isSeasonPickerVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsSeasonPickerVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Season</Text>

            <ScrollView>
              {seasons.map(season => (
                <Pressable
                  key={season}
                  style={styles.modalSeason}
                  onPress={() => {
                    setSelectedSeason(season);
                    setSelectedEpisodeID(null);
                    setIsSeasonPickerVisible(false);
                  }}
                >
                  <Text
                    style={[
                      styles.modalSeasonText,
                      season === selectedSeason && styles.selectedSeasonText,
                    ]}
                  >
                    Season {season}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>

            <Pressable
              style={styles.modalCancel}
              onPress={() => setIsSeasonPickerVisible(false)}
            >
              <Text style={styles.modalCancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
