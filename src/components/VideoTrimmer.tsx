import React, { forwardRef, useState, type Ref } from 'react';
import { View, type ViewStyle } from 'react-native';
import Video, {
  type ReactVideoSource,
  type VideoRef,
  type OnLoadData,
  type OnProgressData,
} from 'react-native-video';
import Slider from './Slider';
import { videoTrimmerStyles } from './styles';

export interface VideoTrimmerProps {
  containerStyle?: ViewStyle;
  source: ReactVideoSource;
  loop?: boolean;
  sliderContainerStyle?: ViewStyle;
  tintColor?: string;
  onSelected?: (start: number, end: number) => void;
  minDuration?: number;
}

export interface VideoTrimmerRef {
  getSelection: () => [number, number];
}

const MIN_DURATION = 1;

function VideoTrimmerUI(props: VideoTrimmerProps, ref: Ref<unknown>) {
  const {
    containerStyle,
    source,
    loop = true,
    sliderContainerStyle,
    tintColor = '#24a0ed',
    onSelected,
    minDuration = MIN_DURATION,
  } = props;
  const [playbackTime, setPlaybackTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [thumbs, setThumbs] = useState<[number, number]>([0, 0]);
  const videoRef = React.useRef<VideoRef | null>(null);

  const getSelection = () => thumbs;
  React.useImperativeHandle(ref, () => ({
    getSelection,
  }));

  const seek = (time: number | undefined) => {
    if (videoRef && videoRef.current && time !== undefined) {
      videoRef.current.seek(time);
    }
  };

  const onSlidingComplete = (value: number[], thumb: number) => {
    let [start = 0, stop = minDuration] = value || [];
    if (stop - start < minDuration) {
      if (thumb) {
        stop = start + minDuration;
      } else {
        start = stop - minDuration;
      }
    }
    start = parseFloat(start.toFixed(1));
    stop = stop === duration ? duration : parseFloat(stop.toFixed(1));
    setThumbs([start, stop]);
    if (onSelected) onSelected(start, stop);
    seek(start);
  };

  const onEnd = () => {
    if (loop) {
      seek(thumbs[0]);
    }
  };

  const onLoad = (data: OnLoadData) => {
    // console.info('duration', data.duration);
    if (duration) {
      return;
    }
    setDuration(data.duration);
    setThumbs([0, data.duration]);
    seek(thumbs[0]);
  };

  const onProgress = ({ currentTime }: OnProgressData) => {
    if (currentTime > thumbs[1]) {
      seek(thumbs[0]);
    }
    setPlaybackTime(currentTime);
  };

  return (
    <View style={[videoTrimmerStyles.container, containerStyle]}>
      <Video
        style={videoTrimmerStyles.video}
        key={`video-${loop}`}
        ref={videoRef}
        source={source}
        onProgress={onProgress}
        onEnd={onEnd}
        onLoad={onLoad}
      />
      {duration ? (
        <View style={videoTrimmerStyles.slider}>
          <Slider
            style={sliderContainerStyle}
            thumbs={thumbs}
            duration={duration}
            playbackTime={playbackTime}
            onSlidingComplete={onSlidingComplete}
            tintColor={tintColor}
          />
        </View>
      ) : null}
    </View>
  );
}

export default forwardRef<VideoTrimmerRef, VideoTrimmerProps>(VideoTrimmerUI);
