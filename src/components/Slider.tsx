import { Text, View, StyleSheet, type ViewStyle } from 'react-native';
import { Slider as RNSlider } from '@miblanchard/react-native-slider';
import ProgressBar from './ProgressBar';
import { sliderStyles } from './styles';

interface SliderProps {
  style?: ViewStyle;
  duration: number;
  thumbs: [number, number];
  playbackTime: number;
  tintColor?: string;
  onSlidingComplete: (segment: number[], value: number) => void;
}

function Slider({
  style,
  duration,
  thumbs,
  playbackTime,
  onSlidingComplete,
  tintColor,
}: SliderProps) {
  return (
    <View style={[sliderStyles.container, style]}>
      <Text style={sliderStyles.text}>
        {parseFloat((thumbs[1] - thumbs[0]).toFixed(1))}s
      </Text>
      <RNSlider
        animateTransitions
        animationType="spring"
        maximumValue={duration}
        minimumValue={0}
        step={0.1}
        value={thumbs}
        trackStyle={StyleSheet.flatten([
          sliderStyles.trackStyle,
          { backgroundColor: tintColor + 'A0' },
        ])}
        minimumTrackTintColor={tintColor}
        renderMinimumTrackComponent={() => (
          <ProgressBar
            value={(playbackTime - thumbs[0]) / (thumbs[1] - thumbs[0])}
            tintColor={tintColor}
          />
        )}
        onSlidingComplete={onSlidingComplete}
        renderThumbComponent={() => (
          <View style={sliderStyles.thumbStyle}>
            <Text style={sliderStyles.thumbTextStyle}>|</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Slider;
