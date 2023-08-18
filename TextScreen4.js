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
    navigation.navigate('Text5');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>
          {"4. Healing from Past Wounds: 'Reclaim Your Heart' addresses the process of healing from past hurts and emotional wounds. It emphasizes the importance of forgiveness, both for ourselves and others, as a means of releasing the pain and finding inner peace. 'Reclaim Your Heart' encourages self-reflection, introspection, and seeking lessons from our painful experiences. It reminds us that healing is a journey that requires patience, self-compassion, and embracing the transformative power of forgiveness. Healing from past wounds involves acknowledging and processing our pain, rather than burying or suppressing it. 'Reclaim Your Heart' guides us to confront our past hurts with courage and vulnerability, allowing ourselves to feel and express our emotions in a healthy and constructive manner. By facing our pain head-on, we create space for healing and growth. Forgiveness is a central theme in 'Reclaim Your Heart,' as it enables us to release the burdens of resentment, anger, and hurt that weigh us down. Forgiving others does not mean condoning their actions or forgetting the pain they caused. Instead, it is a conscious decision to let go of the negative emotions tied to the past, freeing ourselves from the grip of bitterness and allowing space for emotional healing. Moreover, self-forgiveness is an essential aspect of the healing process. 'Reclaim Your Heart' reminds us to extend compassion and understanding to ourselves, acknowledging that we are imperfect beings who make mistakes. By forgiving ourselves, we embrace our humanity and create an environment of self-love and self-acceptance. Healing is not a linear process, and it requires time, patience, and self-care. 'Reclaim Your Heart' encourages us to be gentle with ourselves as we navigate through our healing journey. It reminds us to seek support from trusted individuals, whether it be through therapy, counseling, or seeking guidance from wise and empathetic mentors. By embracing the transformative power of forgiveness and embracing self-compassion, we can heal our hearts and reclaim our inner peace and joy."}
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
    <Text style={styles.nextButtonText}>4 of 8</Text>
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
