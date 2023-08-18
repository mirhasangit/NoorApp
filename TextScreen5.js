import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TextScreen = ({ text }) => {
  const navigation = useNavigation();

  const GoToPlayer = () => {
    navigation.navigate('Player');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNextScreen = () => {
    navigation.navigate('Text6');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>
          {"5. Building a Relationship with Allah: 'Reclaim Your Heart' highlights the significance of building a strong and sincere relationship with Allah. It emphasizes the importance of regular prayer, seeking His guidance, and expressing gratitude for His blessings. By deepening our connection with Allah, we cultivate a sense of purpose, find solace in His presence, and align our intentions with His pleasure. This relationship becomes the foundation for finding peace, strength, and guidance in all aspects of our lives. Building a relationship with Allah requires consistent effort and intention. It starts with establishing a regular prayer routine, connecting with Allah through the five daily prayers and seeking His guidance in all our affairs. Prayer becomes a means of communication and connection, allowing us to express our hopes, fears, and gratitude to our Creator. In addition to prayer, 'Reclaim Your Heart' encourages us to engage in acts of remembrance, such as reciting the Quran, seeking knowledge about Islam, and reflecting upon the signs of Allah's creation. By immersing ourselves in His words and His creation, we deepen our understanding of His attributes and develop a greater sense of awe and reverence. Expressing gratitude is another vital aspect of building a relationship with Allah. 'Reclaim Your Heart' teaches us to appreciate the blessings bestowed upon us, both big and small, and to acknowledge that every good thing comes from Allah. By expressing gratitude, we cultivate a positive mindset, recognizing that even in challenging times, there are still blessings to be grateful for. Ultimately, building a relationship with Allah requires sincerity and a genuine desire to draw closer to Him. It involves aligning our intentions with His pleasure, seeking His forgiveness when we make mistakes, and relying on Him in times of difficulty. This relationship becomes a source of strength, comfort, and guidance as we navigate the ups and downs of life. 'Reclaim Your Heart' reminds us that by building a strong and sincere relationship with Allah, we establish a foundation of faith and spirituality that permeates every aspect of our lives. It brings us closer to our Creator, provides us with a sense of purpose, and fills our hearts with peace and contentment."}
        </Text>
      </ScrollView>
      <TouchableOpacity onPress={GoToPlayer} style={styles.buttonContainer}>
  <Text style={styles.buttonText}>Listen with audio</Text>
  <Ionicons name="headset" size={30} style={styles.headsetIcon} />
</TouchableOpacity>
<View style={styles.navigationContainer}>
  <TouchableOpacity onPress={handleGoBack} style={styles.backButtonContainer}>
    <Ionicons name="arrow-back" size={24} style={styles.arrowIcon} />
    <Text style={styles.backButtonText}>Go Back</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={handleNextScreen} style={styles.nextButtonContainer}>
    <Text style={styles.nextButtonText}>5 of 8</Text>
    <Ionicons name="arrow-forward" size={24} style={styles.arrowIcon} />
  </TouchableOpacity>
</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: '#202020', // Greyish black background color
  },
  scrollContainer: {
    flexGrow: 1,
  },
  text: {
    fontSize: 22,
    textAlign: 'left',
    marginBottom: 20,
    color: '#ffffff', // White text color
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  buttonText: {
    marginRight: 10,
    color: '#ffffff', // White text color
  },
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    marginLeft: 5,
    color: '#ffffff', // White text color
  },
  nextButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextButtonText: {
    marginRight: 5,
    color: '#ffffff', // White text color
  },
  arrowIcon: {
    color: '#ffffff', // White color for arrow icons
  },
  headsetIcon: {
    color: '#ffffff', // White color for headset icon
  },
});


export default TextScreen;
