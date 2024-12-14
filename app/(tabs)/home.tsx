import Containers from '@/constants/Containers';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { ...(Containers.container as ViewStyle) },
});
