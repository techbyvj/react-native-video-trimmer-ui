# react-native-video-trimmer-ui

React Native Video Trimmer UI is a powerful and easy-to-use UI component that adds video trimming functionality to your React Native applications. It's perfect for video editing apps, social media platforms, or any application requiring video manipulation.


## Demo

![Video Trimmer UI Demo](https://github.com/techbyvj/public-assets/blob/main/react-native-video-trimmer-ui-demo.gif)

## Key Features

- Intuitive user interface for selecting trim range
- Real-time preview of the trimmed video section
- Customizable trim duration limits
- Support for various video formats
- Efficient trimming process with optimized performance
- Cross-platform compatibility (iOS and Android)
- Easy integration with existing React Native projects (Expo and bare React Native)

## Installation

```sh
npm install react-native-video react-native-video-trimmer-ui
```

## Usage

Import the VideoTrimmerUI component in your React Native application:

```javascript
import VideoTrimmerUI from 'react-native-video-trimmer-ui';
```

Then, use the VideoTrimmerUI component in your JSX:

```javascript
<VideoTrimmerUI
  source={{ uri: 'https://example.com/video.mp4' }}
  onSelected={(start, end) => console.log(`Selected trim range: ${start} to ${end}`)}
  loop={true}
  containerStyle={{ height: 300 }}
  sliderContainerStyle={{ marginHorizontal: 20 }}
  tintColor="#007AFF"
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| source | ReactVideoSource | required | The source of the video (e.g., `{ uri: 'https://example.com/video.mp4' }`) |
| onSelected | function | - | Callback function that receives the selected start and end times (in seconds) when the user finishes trimming |
| loop | boolean | true | Whether the video should loop after reaching the end |
| containerStyle | ViewStyle | - | Custom styles for the container of the VideoTrimmerUI component |
| sliderContainerStyle | ViewStyle | - | Custom styles for the slider container |
| tintColor | string | '#24A0ED' | Color of the slider and its components |

### Methods

You can access the VideoTrimmerUI methods using a ref:

```javascript
const trimmerRef = useRef(null);

// Later in your component
const [start, end] = trimmerRef.current.getSelection();
console.log(`Current trim range: ${start} to ${end}`);

// In your JSX
<VideoTrimmerUI
  ref={trimmerRef}
  // ... other props
/>
```

Available methods:
- `getSelection()`: Returns an array with the current start and end times of the trim range.


## Trimming the Video

After selecting the trim range using the VideoTrimmerUI component, you can use the `react-native-video-trimmer-core` library to perform the actual video trimming. For more information on how to use this library, please refer to the [react-native-video-trimmer-core npm package](https://www.npmjs.com/package/react-native-video-trimmer-core).

## Features

- Video trimming functionality for React Native applications
- Customizable slider for selecting trim range
- Supports looping video playback

## Upcoming Features

- Additional customization options for the trimmer UI
    - Fully customizable Video
    - Fully customizable slider

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.