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
});
