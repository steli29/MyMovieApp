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
  rankBadge: {
    position: 'absolute',
    backgroundColor: '#E50914',
    minWidth: 30,
    height: 30,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  rankText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },
});
