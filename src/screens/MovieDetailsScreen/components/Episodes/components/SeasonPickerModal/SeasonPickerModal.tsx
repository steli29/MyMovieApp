import { type FC } from 'react';
import { Modal, Pressable, ScrollView, Text, View } from 'react-native';

import type { SeasonPickerModalPropsType } from './types';
import { styles } from './styles';

export const SeasonPickerModal: FC<SeasonPickerModalPropsType> = ({
  visible,
  seasons,
  selectedSeason,
  onSelectSeason,
  onClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Season</Text>

          <ScrollView>
            {seasons.map(season => (
              <Pressable
                key={season}
                style={styles.modalSeason}
                onPress={() => onSelectSeason(season)}
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

          <Pressable style={styles.modalCancel} onPress={onClose}>
            <Text style={styles.modalCancelText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
