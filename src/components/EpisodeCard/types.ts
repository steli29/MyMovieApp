import type { Episode } from "../../types/series";

export type EpisodeCardPropsType = {
  episode: Episode;
  isExpanded: boolean;
  onPress: () => void;
};