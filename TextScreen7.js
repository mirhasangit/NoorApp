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
    navigation.navigate('Text8');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>
          {"7. Cultivating Patience and Trust: 'Reclaim Your Heart' emphasizes the virtues of patience and trust in Allah's wisdom. It reminds us that every hardship we face is an opportunity for growth, self-improvement, and a test of faith. 'Reclaim Your Heart' teaches us to develop patience in times of difficulty, knowing that Allah's timing is perfect and His wisdom is infinite. By cultivating trust in Allah's plans, we can navigate through life's uncertainties with a calm heart, steadfastness, and unwavering faith in His divine guidance. Cultivating patience is a fundamental aspect of our spiritual journey. It involves accepting that life is filled with ups and downs, and that challenges and trials are an inevitable part of our growth and development. 'Reclaim Your Heart' encourages us to have patience in the face of adversity, knowing that every difficulty we encounter carries valuable lessons and opportunities for spiritual elevation. Trusting in Allah's wisdom means surrendering our fears, worries, and anxieties to Him. It means acknowledging that He knows what is best for us, even when we cannot see the bigger picture. Trusting Allah's plans allows us to release the need for control and surrender to His divine guidance, knowing that He is always guiding us towards what is beneficial for our souls. Developing patience and trust is not a one-time achievement but an ongoing practice. It requires nurturing our relationship with Allah through prayer, remembrance, and seeking knowledge about His attributes. By immersing ourselves in His teachings and reflecting upon His signs, we deepen our trust in His wisdom and develop an unshakable belief in His divine plan for our lives. 'Reclaim Your Heart' reminds us that cultivating patience and trust is not always easy, especially during challenging times. However, by consistently turning to Allah in prayer, seeking solace in His words, and surrounding ourselves with a supportive community, we can strengthen our faith and develop the resilience needed to navigate through life's trials. By cultivating patience and trust, we can find inner peace and contentment, knowing that Allah's plans are perfect and that He is always guiding us towards what is best for our spiritual growth. Patience and trust enable us to face life's uncertainties with unwavering faith and to experience the serenity that comes from relying on Allah's infinite wisdom and guidance."}
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
    <Text style={styles.nextButtonText}>7 of 8</Text>
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
