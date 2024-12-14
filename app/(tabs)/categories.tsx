import Containers from '@/constants/Containers';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: { ...(Containers.container as ViewStyle) },
});
