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
    navigation.navigate('Text3');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>
          {"2. Seeking Divine Love: 'Reclaim Your Heart' explores the importance of seeking love and fulfillment from Allah (God) rather than placing excessive attachment to worldly possessions or relationships. It highlights that true contentment and lasting love can only be found in the Divine, as everything else in this world is temporary and subject to change. By redirecting our love and devotion towards Allah, we can experience a profound sense of peace and fulfillment that surpasses any worldly attachment. In our pursuit of happiness and love, we often seek fulfillment in material possessions, status, or human relationships. However, 'Reclaim Your Heart' reminds us that these sources of happiness are transient and can leave us feeling empty and dissatisfied. True and lasting love can only be found in our connection with Allah. By cultivating a deep and sincere love for our Creator, we free ourselves from the limitations and disappointments of worldly attachments. Seeking divine love involves shifting our focus from external sources to the internal and spiritual realm. It requires developing a personal and intimate relationship with Allah through acts of worship, prayer, and reflection. As we direct our hearts towards Allah, we tap into an infinite source of love and mercy. This connection brings us solace, comfort, and a profound sense of belonging, filling the void that materialistic pursuits fail to satisfy. Moreover, seeking divine love enables us to detach from the ephemeral nature of worldly attachments. It liberates us from the constant pursuit of validation, recognition, and approval from others. By recognizing that Allah's love is unconditional and everlasting, we find security and contentment that transcends the fluctuations of human relationships and societal standards. 'Reclaim Your Heart' guides us to redirect our love and devotion to Allah, allowing us to experience a deeper, more meaningful connection. By seeking divine love, we align ourselves with our ultimate purpose and find true fulfillment. This pursuit not only brings us closer to Allah but also enhances our relationships with others, as we approach them with a selfless and compassionate heart, free from the burden of unrealistic expectations and attachments."}
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
    <Text style={styles.nextButtonText}>2 of 8</Text>
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
