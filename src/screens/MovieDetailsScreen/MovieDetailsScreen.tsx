import { useCallback, useState, type FC } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Star } from 'lucide-react-native';

import type { MovieDetailsScreenPropsType } from './types';
import { useMovieDetails } from '../../hooks/useMovieDetails';
import { EMPTY_VALUE, ScreenNames } from '../../utils/constants';
import { styles } from './styles';
import MovieDetailsHero from './components/MovieDetailsHero';
import { formatMovieRuntime } from '../../utils/formatMovieRuntime';
import type { Movie } from '../../types/movie';
import { YouMightAlsoLike } from './components/YouMightAlsoLike/YouMightAlsoLike';
import Episodes from './components/Episodes';

export const MovieDetailsScreen: FC<MovieDetailsScreenPropsType> = ({
  navigation,
  route,
}) => {
  const { imdbID } = route.params;
  const { movie, isLoading, error } = useMovieDetails(imdbID);
  const [isPlotExpanded, setIsPlotExpanded] = useState(false);
  const insets = useSafeAreaInsets();

  const onBackPressHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onMoviePressHandler = useCallback(
    (selectedMovie: Movie) => {
      navigation.push(ScreenNames.MovieDetails, {
        imdbID: selectedMovie.imdbID,
      });
    },
    [navigation],
  );

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#E50914" />
      </View>
    );
  }

  if (error || !movie) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error ?? 'Movie not found'}</Text>
      </View>
    );
  }

  const metadata = [
    movie.Year,
    movie.Rated,
    movie.Runtime !== EMPTY_VALUE ? formatMovieRuntime(movie.Runtime) : null,
  ].filter(value => value && value !== EMPTY_VALUE);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <MovieDetailsHero movie={movie} onBackPress={onBackPressHandler} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.information}>
          <Text style={styles.title}>{movie.Title}</Text>

          <View style={styles.metadataRow}>
            {metadata.map((value, index) => (
              <Text key={index} style={styles.metadata}>
                {value}
              </Text>
            ))}

            {movie.imdbRating !== EMPTY_VALUE && (
              <View style={styles.ratingContainer}>
                <Star size={15} color="#F5C518" fill="#F5C518" />
                <Text style={styles.rating}>{movie.imdbRating}</Text>
              </View>
            )}
          </View>

          {movie.Plot !== EMPTY_VALUE && (
            <View style={styles.plotContainer}>
              <Text
                style={styles.plot}
                numberOfLines={isPlotExpanded ? undefined : 4}
              >
                {movie.Plot}
              </Text>

              <Pressable
                onPress={() => setIsPlotExpanded(previous => !previous)}
              >
                <Text style={styles.readMore}>
                  {isPlotExpanded ? 'Show less' : 'Read more'}
                </Text>
              </Pressable>
            </View>
          )}

          {movie.Actors !== EMPTY_VALUE && (
            <Text style={styles.details}>
              <Text style={styles.label}>Cast: </Text>
              {movie.Actors}
            </Text>
          )}

          {movie.Director !== EMPTY_VALUE && (
            <Text style={styles.details}>
              <Text style={styles.label}>Director: </Text>
              {movie.Director}
            </Text>
          )}

          {movie.Genre !== EMPTY_VALUE && (
            <Text style={styles.details}>
              <Text style={styles.label}>Genres: </Text>
              {movie.Genre}
            </Text>
          )}
          {movie.Country && movie.Country !== EMPTY_VALUE && (
            <Text style={styles.details}>
              <Text style={styles.label}>Country: </Text>
              {movie.Country}
            </Text>
          )}

          {movie.Language && movie.Language !== EMPTY_VALUE && (
            <Text style={styles.details}>
              <Text style={styles.label}>Language: </Text>
              {movie.Language}
            </Text>
          )}
        </View>
        {movie.Type === 'series' && Number(movie.totalSeasons) > 0 && (
          <Episodes
            key={movie.imdbID}
            imdbID={movie.imdbID}
            totalSeasons={Number(movie.totalSeasons)}
          />
        )}
        <YouMightAlsoLike
          currentImdbID={imdbID}
          onMoviePress={onMoviePressHandler}
        />
      </ScrollView>
    </View>
  );
};
