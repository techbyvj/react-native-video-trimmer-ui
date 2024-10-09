import { StyleSheet } from 'react-native';

export const videoTrimmerStyles = StyleSheet.create({
  container: { flex: 1 },
  slider: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  video: { flex: 1 },
});

export const sliderStyles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
  },
  trackStyle: {
    borderRadius: 2,
    height: 40,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  thumbStyle: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  thumbTextStyle: {
    fontSize: 30,
    color: 'gray',
  },
});

export const progressBarStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent' },
  progress: {
    flex: 1,
    opacity: 0.5,
    backgroundColor: 'black',
  },
});
