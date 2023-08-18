import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const BlinkestHomePage = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('IslamicBooks');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/islamlogo.png')}
        style={styles.symbolImage}
      />
      <Text style={styles.title}>Noor</Text>
      <Text style={styles.subtitle}>Unveiling the Essence of Islamic Knowledge</Text>

      <TouchableOpacity style={styles.startButton} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#800080', // Purple color
  },
  symbolImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff', // White color
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: '#ffffff', // White color
  },
  startButton: {
    backgroundColor: '#D4AF37', // Gold color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BlinkestHomePage;
