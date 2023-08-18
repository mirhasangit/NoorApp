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
    navigation.navigate('Text4');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>
          {"3. Letting Go of Attachments: 'Reclaim Your Heart' encourages us to let go of attachments to worldly desires, people, and outcomes. It explains that clinging excessively to material possessions or becoming overly dependent on others for happiness can lead to disappointment and heartbreak. By practicing detachment, we free ourselves from the chains of attachment and open our hearts to a deeper connection with Allah. This detachment allows us to appreciate the blessings in our lives without allowing them to define our sense of self-worth. Attachments can take various forms, from a strong desire for material wealth to an overreliance on others for validation and happiness. 'Reclaim Your Heart' teaches us that these attachments can be detrimental to our well-being, as they often lead to discontentment and a constant chase for external validation. By recognizing the temporary and transient nature of worldly desires, we can consciously let go of these attachments and find a greater sense of inner peace and contentment. Practicing detachment does not mean forsaking the blessings and joys of life. Rather, it involves cultivating a mindset of gratitude and understanding that true fulfillment comes from our relationship with Allah. By redirecting our focus and attachment towards our Creator, we find a lasting source of love, peace, and contentment that transcends the ever-changing circumstances of the world. Letting go of attachments requires self-reflection and a conscious effort to align our hearts and intentions with the Divine. It involves recognizing the impermanence of worldly possessions and relationships and seeking contentment in the knowledge that our ultimate purpose lies in our connection with Allah. Through detachment, we liberate ourselves from the constant pursuit of external validation and instead nurture a deep, unshakeable relationship with our Creator. 'Reclaim Your Heart' reminds us that true freedom lies in letting go of attachments and finding solace in our relationship with Allah. By doing so, we can appreciate the blessings in our lives without allowing them to define our self-worth, and we can experience a profound sense of inner peace and contentment that comes from relying on the Eternal, rather than the transient."}
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
    <Text style={styles.nextButtonText}>3 of 8</Text>
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
