import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 125,
    marginRight: 12,
  },
  featuredContainer: {
    width: '100%',
    marginRight: 0,
  },
  featuredPoster: {
    height: undefined,
    aspectRatio: 2 / 3,
    borderRadius: 12,
  },
  poster: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    backgroundColor: '#252525',
  },
});
