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

  const handleFinishSummary = () => {
    navigation.navigate('IslamicBooks');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>
          {"8. Finding True Happiness: Ultimately, 'Reclaim Your Heart' teaches that true happiness lies in reconnecting with our Creator and aligning our intentions with His pleasure. It emphasizes that seeking the pleasure of Allah should be the ultimate goal in all aspects of our lives. By prioritizing our relationship with Allah and living a life dedicated to His pleasure, we experience a deep sense of fulfillment, purpose, and tranquility that surpasses any fleeting happiness derived from worldly pursuits. 'Reclaim Your Heart' guides us on a transformative journey towards finding lasting happiness and reclaiming our hearts for a deeper connection with the Divine. In a world that often equates happiness with material wealth, status, or fleeting pleasures, 'Reclaim Your Heart' reminds us of the inherent emptiness and impermanence of these pursuits. True and lasting happiness can only be found by seeking the pleasure of Allah and aligning our lives with His guidance and teachings. Finding true happiness requires a shift in perspective, recognizing that our ultimate purpose in life is to worship and seek the pleasure of Allah. 'Reclaim Your Heart' guides us to prioritize our relationship with Allah above all else, integrating His teachings into our daily lives, and constantly seeking His pleasure in our actions and intentions. Moreover, 'Reclaim Your Heart' teaches that true happiness is not dependent on external circumstances, but rather on the state of our hearts and our connection with Allah. By nurturing our spiritual well-being and aligning our intentions with His pleasure, we cultivate a sense of fulfillment that transcends the ups and downs of worldly life. Finding true happiness also involves letting go of attachments and expectations that hinder our spiritual growth. 'Reclaim Your Heart' encourages us to detach from worldly desires and outcomes, recognizing that true contentment lies in surrendering to the will of Allah and trusting His plans for us. By reclaiming our hearts for a deeper connection with the Divine, we experience a profound sense of purpose, contentment, and tranquility that no worldly pursuit can provide. Through seeking the pleasure of Allah in all aspects of our lives, we find true happiness that is everlasting and transcendent."}
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
  <TouchableOpacity onPress={handleFinishSummary} style={styles.finishButtonContainer}>
    <Text style={styles.finishButtonText}>Finish Summary</Text>
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
  finishButtonContainer: {
    backgroundColor: '#65B463', // Green background color
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  finishButtonText: {
    color: '#ffffff', // White text color
    fontWeight: 'bold',
  },
  arrowIcon: {
    color: '#ffffff', // White color for arrow icons
  },
  headsetIcon: {
    color: '#ffffff', // White color for headset icon
  },
});


export default TextScreen;
