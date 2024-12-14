import Colors from '@/constants/Colors';
import FontSizes from '@/constants/FontSizes';
import { setIsOnboarded } from '@/lib/storageHelpers';
import { router } from 'expo-router';
import LottieView from 'lottie-react-native';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type OnboardingMessage = {
  title: string;
  text: string;
};

const messages: OnboardingMessage[] = [
  {
    title: 'Welcome to GrocerEase!',
    text: 'GrocerEase makes grocery shopping simple and stress-free. Let’s show you how!',
  },
  {
    title: 'Build Your List',
    text: 'Add items with a tap, organize them by category, and keep everything in one place—offline!',
  },
  {
    title: 'Shop Smarter',
    text: 'Check off items as you shop, and let GrocerEase guide you through the store efficiently.',
  },
  {
    title: 'Ready to Start?',
    text: 'That’s it! Jump in and create your first list now. Shopping just got easier!',
  },
];

const WelcomeScreen = () => {
  const [index, setIndex] = useState(0);
  const nextMessage = () => setIndex((state) => state + 1);
  const message = messages[index];

  const finishOnboarding = () => {
    setIsOnboarded();
    router.navigate('/(tabs)/home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{message.title}</Text>
        <Text style={styles.text}>{message.text}</Text>
        <LottieView
          autoPlay
          style={{ width: '100%', aspectRatio: 1 / 1 }}
          source={require('@/assets/animations/list-active.json')}
        />
      </View>

      {index !== messages.length - 1 ? (
        <TouchableOpacity style={styles.button} onPress={nextMessage}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={finishOnboarding}>
          <Text style={styles.buttonText}>Get Started!</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    padding: 24,
    paddingVertical: 0,
  },
  wrapper: {
    gap: 16,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: FontSizes.title,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    fontSize: FontSizes.body,
  },
  button: {
    backgroundColor: Colors.light.tint,
    width: '100%',
    borderRadius: 100,
    padding: 16,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: FontSizes.body,
    fontWeight: 'semibold',
  },
});
