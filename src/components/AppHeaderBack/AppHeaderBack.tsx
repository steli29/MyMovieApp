import { Pressable } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import type { FC } from 'react';

import { styles } from './styles';
import type { AppHeaderBackPropsType } from './types';

export const AppHeaderBack: FC<AppHeaderBackPropsType> = ({ onPress }) => {
  return (
    <Pressable style={styles.backButton} onPress={onPress}>
      <ArrowLeft size={22} color="#FFFFFF" strokeWidth={2} />
    </Pressable>
  );
};
