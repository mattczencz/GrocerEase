import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        source={require('@/assets/animations/loading.json')}
        style={{
          width: '100%',
          aspectRatio: 1 / 1,
        }}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'white',
  },
});
