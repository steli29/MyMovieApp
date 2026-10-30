import type { FC } from 'react';
import { EMPTY_VALUE } from '../../../../utils/constants';
import { Text } from 'react-native';
import { styles } from './styles';
import type { DetailsLabelPropsType } from './types';

export const DetailsLabel: FC<DetailsLabelPropsType> = ({ label, value }) => {
  if (!value || value === EMPTY_VALUE) {
    return null;
  }

  return (
    <Text style={styles.details}>
      <Text style={styles.label}>{label}: </Text>
      {value}
    </Text>
  );
};
