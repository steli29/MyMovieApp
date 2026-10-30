import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from './types';
import HomeScreen from '../../screens/HomeScreen';
import MovieDetailsScreen from '../../screens/MovieDetailsScreen';
import { ScreenNames } from '../../utils/constants';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenNames.Home}>
      <Stack.Screen
        name={ScreenNames.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={ScreenNames.MovieDetails}
        component={MovieDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
