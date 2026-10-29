import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  selectedContainer: {
    backgroundColor: '#242424',
    borderLeftWidth: 3,
    borderLeftColor: '#E50914',
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  information: {
    gap: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  releaseDate: {
    color: '#AAAAAA',
    fontSize: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rating: {
    color: '#F5C518',
    fontSize: 12,
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  expandedContent: {
    marginTop: 14,
    gap: 8,
  },
  runtime: {
    color: '#AAAAAA',
    fontSize: 12,
  },
  description: {
    color: '#DDDDDD',
    fontSize: 13,
    lineHeight: 20,
  },
  error: {
    color: '#FF6B6B',
    fontSize: 12,
  },
});
