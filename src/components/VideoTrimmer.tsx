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
}

export interface VideoTrimmerRef {
  getThumbs: () => [number, number];
}

function VideoTrimmer(props: VideoTrimmerProps, ref: Ref<unknown>) {
  const {
    containerStyle,
    source,
    loop = true,
    sliderContainerStyle,
    tintColor = '#24a0ed',
    onSelected,
  } = props;
  const [playbackTime, setPlaybackTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [thumbs, setThumbs] = useState<[number, number]>([0, 0]);
  const videoRef = React.useRef<VideoRef | null>(null);

  const getThumbs = () => thumbs;
  React.useImperativeHandle(ref, () => ({
    getThumbs,
  }));

  const seek = (time: number | undefined) => {
    if (videoRef && videoRef.current && time !== undefined) {
      videoRef.current.seek(time);
    }
  };

  const onSlidingComplete = (value: number[], thumb: number) => {
    let [start = 0, stop = 0.5] = value || [];
    if (stop - start < 0.5) {
      if (thumb) {
        stop = start + 0.5;
      } else {
        start = stop - 0.5;
      }
    }
    start = parseFloat(start.toFixed(2));
    stop = parseFloat(stop.toFixed(2));
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

export default forwardRef(VideoTrimmer);
