import AsyncStorage from '@react-native-async-storage/async-storage';

enum StorageKeys {
  ONBOARDED = 'onboarded',
}

export const setIsOnboarded = async () => {
  try {
    await AsyncStorage.setItem('onboarded', 'true');
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getIsOnboarded = async () => {
  try {
    const value = await AsyncStorage.getItem(StorageKeys.ONBOARDED);
    return value === 'true';
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
