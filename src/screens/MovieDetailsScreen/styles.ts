import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  scrollView: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141414',
    paddingHorizontal: 24,
  },
  errorText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  information: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '800',
    marginBottom: 12,
  },
  metadataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
  },
  metadata: {
    color: '#AAAAAA',
    fontSize: 13,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rating: {
    color: '#F5C518',
    fontSize: 13,
    fontWeight: '700',
  },
  plotContainer: {
    marginBottom: 18,
  },
  plot: {
    color: '#E5E5E5',
    fontSize: 14,
    lineHeight: 22,
  },
  readMore: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 8,
  },
});
