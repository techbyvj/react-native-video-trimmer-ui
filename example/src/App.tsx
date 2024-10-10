import { StyleSheet, View } from 'react-native';
import VideoTrimmerUI from 'react-native-video-trimmer-ui';

export default function App() {
  return (
    <View style={styles.container}>
      <VideoTrimmerUI
        source={require('../assets/sample.mp4')}
        onSelected={console.info}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: 'black',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
