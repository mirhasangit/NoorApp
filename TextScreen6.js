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
    navigation.navigate('Text7');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>
          {"6. Embracing Divine Decree: 'Reclaim Your Heart' discusses the concept of qadr (divine decree) and the importance of accepting and surrendering to Allah's plan for our lives. It teaches that everything happens according to Allah's wisdom, even if we cannot fully comprehend it at times. 'Reclaim Your Heart' encourages us to embrace the divine decree with trust and patience, knowing that Allah's plans are ultimately for our best interests. By surrendering to His will, we find inner peace, contentment, and the strength to navigate life's challenges with resilience and faith. Embracing divine decree involves recognizing that Allah is the ultimate planner and controller of all affairs. It requires letting go of our attachment to specific outcomes and surrendering to the greater wisdom and knowledge of our Creator. While we may have our own desires and plans, 'Reclaim Your Heart' teaches us to trust in Allah's infinite wisdom, knowing that He knows what is best for us. Through surrendering to divine decree, we find solace in the belief that every event in our lives, whether seemingly positive or negative, is a part of Allah's greater plan. Even in moments of hardship and uncertainty, we trust that there is divine wisdom and a hidden blessing that will unfold in due course. This trust enables us to navigate through life's challenges with patience, resilience, and unwavering faith in Allah's guidance. Furthermore, embracing divine decree fosters a sense of contentment and gratitude in our hearts. It allows us to accept the present moment as a manifestation of Allah's will and to appreciate the blessings that come our way. By aligning our hearts and minds with divine decree, we find peace and serenity, free from the anxiety and frustration that can arise from resisting or questioning Allah's plan. 'Reclaim Your Heart' reminds us that embracing divine decree is not an easy task but a continuous journey of growth and surrender. It requires developing a deep trust in Allah, seeking solace in His words and remembrance, and constantly reminding ourselves of His infinite wisdom. By embracing divine decree, we find comfort and strength in knowing that Allah is the ultimate source of guidance and that His plans are perfect."}
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
    <Text style={styles.nextButtonText}>6 of 8</Text>
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
