import Containers from '@/constants/Containers';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

const ArchivesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ArchivesScreen</Text>
    </View>
  );
};

export default ArchivesScreen;

const styles = StyleSheet.create({
  container: { ...(Containers.container as ViewStyle) },
});
