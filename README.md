# react-native-video-trimmer-ui

React Native Video Trimmer is a powerful and easy-to-use component that adds video trimming functionality to your React Native applications. Perfect for video editing apps, social media platforms, or any application requiring video manipulation.

## Key Features

- Intuitive user interface for selecting trim range
- Real-time preview of the trimmed video section
- Customizable trim duration limits
- Support for various video formats
- Efficient trimming process with optimized performance
- Cross-platform compatibility (iOS and Android)
- Easy integration with existing React Native projects

This library leverages native video processing capabilities to ensure smooth performance and high-quality output.

## Installation

```sh
npm install react-native-video react-native-video-trimmer-ui
```

## Usage

```javascript
import VideoTrimmer from 'react-native-video-trimmer';

// ...

<VideoTrimmer source={videoSource}  />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| source | ReactVideoSource | required | The source of the video (e.g., `{ uri: 'https://example.com/video.mp4' }`) |
| loop | boolean | true | Whether the video should loop after reaching the end |
| containerStyle | ViewStyle | - | Custom styles for the container of the VideoWithSlider component |
| sliderContainerStyle | ViewStyle | - | Custom styles for the slider container |
| tintColor | string | '#24a0ed' | Color of the slider and its components |

## Features

- Video trimming functionality for React Native applications
- Customizable slider for selecting trim range
- Supports looping video playback

## License

MIT