import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TextScreen = ({ text }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate('Player');
  };

  const handleNextScreen = () => {
    navigation.navigate('Text2'); 
  };

  const handleIslamicBooks = () => {
    navigation.navigate('IslamicBooks');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleIslamicBooks} style={styles.leftButtonContainer}>
          <Ionicons name="book" size={24} color="white" />
          <Text style={styles.headerText}>For You</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>
          {"1. Understanding the Purpose of Trials: 'Reclaim Your Heart' emphasizes that trials and hardships are not random occurrences but rather serve a purpose in shaping our character and drawing us closer to our Creator. It reminds us that challenges are an integral part of life, providing opportunities for growth, self-reflection, and spiritual development. By understanding the purpose behind trials, we can approach them with resilience, patience, and a sense of purpose. Trials serve as transformative experiences that mold and refine our character. They push us beyond our comfort zones and present us with obstacles that test our resolve. In facing these challenges, we discover our inner strength and resilience. Adversity provides an opportunity for personal growth, as we learn to overcome obstacles, develop new skills, and cultivate qualities such as perseverance, determination, and courage. Moreover, trials prompt self-reflection and introspection. When faced with difficulties, we are compelled to examine our thoughts, beliefs, and actions. We gain insights into our strengths and weaknesses, acknowledging areas where we need improvement. By delving deep into ourselves, we can reassess our priorities, values, and aspirations, ensuring they align with our authentic selves and our relationship with our Creator. Spiritual development is intricately linked to trials and hardships. In times of difficulty, we often turn to our faith for solace and guidance. The challenges we encounter can deepen our connection with our Creator, fostering a greater sense of reliance on Him. Trials teach us humility, reminding us of our dependency on Allah and strengthening our trust in His wisdom. They serve as reminders that we are not alone and that our Creator is with us every step of the way, offering support and comfort. By understanding the purpose of trials, we can approach them with a renewed perspective. Instead of viewing them as mere obstacles to overcome, we can recognize them as opportunities for personal growth and spiritual elevation. This understanding enables us to face challenges with resilience, patience, and a sense of purpose, knowing that each trial brings us closer to our Creator and holds the potential for transformative change within ourselves."}
        </Text>
      </ScrollView>
      <TouchableOpacity onPress={handleGoBack} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Listen with audio</Text>
        <Ionicons name="headset" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNextScreen} style={styles.nextButtonContainer}>
        <Text style={styles.nextButtonText}>1 of 8</Text>
        <Ionicons name="arrow-forward" size={24} color="white" />
      </TouchableOpacity>
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
    backgroundColor: '#202020', // Change the background color to greyish black
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  text: {
    fontSize: 22,
    textAlign: 'left',
    marginBottom: 20,
    color: '#ffffff', // Change the text color to white
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  buttonText: {
    marginRight: 10,
    color: '#ffffff', // Change the text color to white
  },
  leftButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 20,

  },
  headerText: {
    marginLeft: 5,
    color: '#ffffff', // Change the text color to white
  },
  nextButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  nextButtonText: {
    marginRight: 5,
    color: '#ffffff', // Change the text color to white
  },
});

export default TextScreen;
