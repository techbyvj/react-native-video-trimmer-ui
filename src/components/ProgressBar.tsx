import { View, type ViewStyle, type StyleProp } from 'react-native';
import { progressBarStyles } from './styles';

interface ProgressBarProps {
  value: number;
  style?: StyleProp<ViewStyle>;
  tintColor: string | undefined;
}

function ProgressBar({ value, style, tintColor }: ProgressBarProps) {
  return (
    <View style={[progressBarStyles.container, style]}>
      <View
        style={[
          progressBarStyles.progress,
          { width: `${Math.ceil(100 * value)}%`, backgroundColor: tintColor },
        ]}
      />
    </View>
  );
}

export default ProgressBar;
