import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';

const PlayerScreen = () => {
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      // Clean up TTS engine on unmount
      Speech.stop();
    };
  }, []);

  const playTextToSpeech = (text) => {
    if (!isPlaying) {
      Speech.stop();
      Speech.speak(text);
      setIsPlaying(true);
    } else {
      Speech.pause();
      setIsPlaying(false);
    }
  };

  const handleResume = () => {
    Speech.resume();
    setIsPlaying(true);
  };

  const handleStop = () => {
    Speech.stop();
    setIsPlaying(false);
  };

  const handleGoBack = () => {
    navigation.navigate('IslamicBooks'); // Replace 'IslamicBooks' with the correct screen name
  };

  return (
    <View style={styles.container}>
<TouchableOpacity onPress={handleGoBack} style={styles.closeButton}>
  <Text>
    <FontAwesome5 name="times" size={30} color="#ffffff" /> 
  </Text>
</TouchableOpacity>
<View style={styles.playerContainer}>
  <Image
    source={require('./assets/reclaimcover.gif')}
    style={styles.coverImage}
  />
  <Text style={styles.trackTitle}>Reclaim Your Heart</Text>
  <Text style={styles.trackArtist}>Yasmin Mogahed</Text>
  <View style={styles.controls}>
    <TouchableOpacity
      onPress={() => playTextToSpeech("1. Understanding the Purpose of Trials: 'Reclaim Your Heart' emphasizes that trials and hardships are not random occurrences but rather serve a purpose in shaping our character and drawing us closer to our Creator. It reminds us that challenges are an integral part of life, providing opportunities for growth, self-reflection, and spiritual development. By understanding the purpose behind trials, we can approach them with resilience, patience, and a sense of purpose. Trials serve as transformative experiences that mold and refine our character. They push us beyond our comfort zones and present us with obstacles that test our resolve. In facing these challenges, we discover our inner strength and resilience. Adversity provides an opportunity for personal growth, as we learn to overcome obstacles, develop new skills, and cultivate qualities such as perseverance, determination, and courage. Moreover, trials prompt self-reflection and introspection. When faced with difficulties, we are compelled to examine our thoughts, beliefs, and actions. We gain insights into our strengths and weaknesses, acknowledging areas where we need improvement. By delving deep into ourselves, we can reassess our priorities, values, and aspirations, ensuring they align with our authentic selves and our relationship with our Creator. Spiritual development is intricately linked to trials and hardships. In times of difficulty, we often turn to our faith for solace and guidance. The challenges we encounter can deepen our connection with our Creator, fostering a greater sense of reliance on Him. Trials teach us humility, reminding us of our dependency on Allah and strengthening our trust in His wisdom. They serve as reminders that we are not alone and that our Creator is with us every step of the way, offering support and comfort. By understanding the purpose of trials, we can approach them with a renewed perspective. Instead of viewing them as mere obstacles to overcome, we can recognize them as opportunities for personal growth and spiritual elevation. This understanding enables us to face challenges with resilience, patience, and a sense of purpose, knowing that each trial brings us closer to our Creator and holds the potential for transformative change within ourselves.")}
      style={styles.playButton}
    >
      {isPlaying ? (
        <Text>
          <FontAwesome5 name="pause" size={30} style={styles.playIcon} />
        </Text>
      ) : (
        <Text>
          <FontAwesome5 name="play" size={30} style={styles.playIcon} />
        </Text>
      )}
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('Text', { text: 'Your text goes here' })}
    >
      <Text>
        <Ionicons name="ios-text" size={30} style={styles.textIcon} />
      </Text>
    </TouchableOpacity>
  </View>
  <View style={styles.buttonSpacing} />
</View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#202020', // Greyish black background color
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  coverImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  playerContainer: {
    alignItems: 'center',
  },
  trackTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff', // White text color
  },
  trackArtist: {
    fontSize: 16,
    marginBottom: 20,
    color: '#ffffff', // White text color
  },
  controls: {
    flexDirection: 'row',
    marginRight: 10,
  },
  playButton: {
    marginRight: 20, // Add horizontal margin between the play button and the text button
  },
  buttonSpacing: {
    height: 10, // Add vertical spacing between the buttons
  },
  playIcon: {
    color: '#ffffff', // White color for play/pause icons
  },
  textIcon: {
    color: '#ffffff', // White color for text button icon
  },
});



export default PlayerScreen;
