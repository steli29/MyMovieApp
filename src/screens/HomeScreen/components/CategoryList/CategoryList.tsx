import { useState, type FC } from 'react';
import { FlatList, Pressable, Text } from 'react-native';
import { styles } from './styles';
import { CATEGORIES } from '../../../../mocks/movieCategories';

export const CategoryList: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <FlatList
      data={CATEGORIES}
      horizontal
      keyExtractor={item => item}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      bounces={false}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => {
        const isSelected = item === selectedCategory;

        return (
          <Pressable
            style={[styles.category, isSelected && styles.selectedCategory]}
            onPress={() => setSelectedCategory(item)}
          >
            <Text
              style={[
                styles.categoryText,
                isSelected && styles.selectedCategoryText,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        );
      }}
    />
  );
};
