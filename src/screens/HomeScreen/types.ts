import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../navigation/RootStackNavigator/types";
import type { ScreenNames } from "../../utils/constants";

export type HomeScreenPropsType =
  NativeStackScreenProps<RootStackParamList, ScreenNames.Home>;