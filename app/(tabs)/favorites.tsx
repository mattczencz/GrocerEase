import Containers from '@/constants/Containers';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FavoritesScreen</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: { ...(Containers.container as ViewStyle) },
});
