import { useMemo, useState, type FC } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import type { HomeScreenPropsType } from './types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovieCategories } from '../../hooks/useMovieCategories';
import type { Movie } from '../../types/movie';
import { styles } from './styles';
import MovieRow from '../../components/MovieRow';
import CategoryList from './components/CategoryList';
import FeaturedMovie from './components/FeaturedMovie';
import { ScreenNames } from '../../utils/constants';

export const HomeScreen: FC<HomeScreenPropsType> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { categories, isLoading, error } = useMovieCategories();
  const [refreshing, setRefreshing] = useState(false);

  const featuredMovie = useMemo(
    () => categories.flatMap(category => category.movies)[0],
    [categories],
  );

  const handleMoviePress = (movie: Movie) => {
    navigation.navigate(ScreenNames.MovieDetails, {
      imdbID: movie.imdbID,
    });
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  if (isLoading) {
    return (
      <View style={[styles.centered, { paddingTop: insets.top }]}>
        <ActivityIndicator size="large" color="#E50914" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.centered, { paddingTop: insets.top }]}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MovieRow category={item} onMoviePress={handleMoviePress} />
        )}
        ListHeaderComponent={
          <>
            <CategoryList />
            {featuredMovie && (
              <FeaturedMovie
                movie={featuredMovie}
                onMoviePress={handleMoviePress}
              />
            )}
          </>
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>No movies found.</Text>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
};
