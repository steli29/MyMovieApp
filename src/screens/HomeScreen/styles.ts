import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141414',
    paddingHorizontal: 20,
  },
  content: {
    paddingBottom: 24,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 24,
  },
  errorText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  emptyText: {
    color: '#999999',
    paddingHorizontal: 16,
  },
});
