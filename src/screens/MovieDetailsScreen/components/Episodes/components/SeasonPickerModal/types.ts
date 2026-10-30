export type SeasonPickerModalPropsType = {
  visible: boolean;
  seasons: number[];
  selectedSeason: number;
  onSelectSeason: (season: number) => void;
  onClose: () => void;
};
