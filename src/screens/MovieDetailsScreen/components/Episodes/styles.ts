
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 28,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  seasonButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#333333',
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 6,
  },
  seasonButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  loader: {
    marginVertical: 24,
  },
  error: {
    color: '#FF6B6B',
    fontSize: 13,
  },
  episodeList: {
    gap: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  modalContent: {
    backgroundColor: '#242424',
    borderRadius: 12,
    padding: 20,
    maxHeight: '70%',
  },
  modalTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  modalSeason: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#383838',
  },
  modalSeasonText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  selectedSeasonText: {
    color: '#E50914',
    fontWeight: '700',
  },
  modalCancel: {
    alignItems: 'center',
    marginTop: 16,
    paddingVertical: 10,
  },
  modalCancelText: {
    color: '#AAAAAA',
    fontSize: 14,
  },
});
