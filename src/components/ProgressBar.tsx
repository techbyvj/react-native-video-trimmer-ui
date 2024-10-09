import { View, type ViewStyle, type StyleProp } from 'react-native';
import { progressBarStyles } from './styles';

interface ProgressBarProps {
  value: number;
  style?: StyleProp<ViewStyle>;
}

function ProgressBar({ value, style }: ProgressBarProps) {
  return (
    <View style={[progressBarStyles.container, style]}>
      <View
        style={[
          progressBarStyles.progress,
          { width: `${Math.ceil(100 * value)}%` },
        ]}
      />
    </View>
  );
}

export default ProgressBar;
