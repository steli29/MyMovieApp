import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  category: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    minHeight: 40,
    justifyContent: 'center',
    borderRadius: 24,
    backgroundColor: '#292929',
    borderWidth: 1,
    borderColor: '#454545',
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
  selectedCategory: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
  },
  selectedCategoryText: {
    color: '#141414',
    fontWeight: '700',
  },
});
