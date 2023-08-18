import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const IntroPage = () => {
  const navigation = useNavigation();

  const handleReadButtonPress = () => {
    navigation.navigate('Text');
  };

  const handleListenButtonPress = () => {
    navigation.navigate('Player');
  };

  const handlePointPress = (pointNumber) => {
    navigation.navigate('Text');
  };

  const handlePointPress2 = (pointNumber) => {
    navigation.navigate('Text2');
  };

  const handlePointPress3 = (pointNumber) => {
    navigation.navigate('Text3');
  };

  const handlePointPress4 = (pointNumber) => {
    navigation.navigate('Text4');
  };

  const handlePointPress5 = (pointNumber) => {
    navigation.navigate('Text5');
  };

  const handlePointPress6 = (pointNumber) => {
    navigation.navigate('Text6');
  };

  const handlePointPress7 = (pointNumber) => {
    navigation.navigate('Text7');
  };

  const handlePointPress8 = (pointNumber) => {
    navigation.navigate('Text8');
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('./assets/reclaimcover.gif')} style={styles.bookCover} />

      <Text style={styles.sectionTitle}>Summary</Text>
      <Text style={styles.bookTitle}>Reclaim Your Heart</Text>
      <Text style={styles.author}>Written by Yasmin Mogahed</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoValue}>8 Key Points</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoValue}>16 min</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoValue}>6 Insights</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>What's Inside?</Text>
      <ScrollView style={styles.pointsContainer}>
      <TouchableOpacity style={styles.pointItem} onPress={handlePointPress}>
        <View style={styles.pointItem}>
          <View style={styles.pointNumberContainer}>
            <Text style={styles.pointNumber}>1</Text>
          </View>
          <View style={styles.pointContent}>
            <Text style={styles.pointDescription}>
            The Purpose of Trials
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pointItem} onPress={handlePointPress2}>
        <View style={styles.pointItem}>
          <View style={styles.pointNumberContainer}>
            <Text style={styles.pointNumber}>2</Text>
          </View>
          <View style={styles.pointContent}>
            <Text style={styles.pointDescription}>
            Self-Reflection and Growth
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pointItem} onPress={handlePointPress3}>
        <View style={styles.pointItem}>
          <View style={styles.pointNumberContainer}>
            <Text style={styles.pointNumber}>3</Text>
          </View>
          <View style={styles.pointContent}>
            <Text style={styles.pointDescription}>
            Letting Go of Attachments
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pointItem} onPress={handlePointPress4}>
        <View style={styles.pointItem}>
          <View style={styles.pointNumberContainer}>
            <Text style={styles.pointNumber}>4</Text>
          </View>
          <View style={styles.pointContent}>
            <Text style={styles.pointDescription}>
            Healing from Past Wounds
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pointItem} onPress={handlePointPress5}>
        <View style={styles.pointItem}>
          <View style={styles.pointNumberContainer}>
            <Text style={styles.pointNumber}>5</Text>
          </View>
          <View style={styles.pointContent}>
            <Text style={styles.pointDescription}>
            Seeking the Pleasure of Allah
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pointItem} onPress={handlePointPress6}>
        <View style={styles.pointItem}>
          <View style={styles.pointNumberContainer}>
            <Text style={styles.pointNumber}>6</Text>
          </View>
          <View style={styles.pointContent}>
            <Text style={styles.pointDescription}>
            Embracing Divine Decree
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pointItem} onPress={handlePointPress7}>
        <View style={styles.pointItem}>
          <View style={styles.pointNumberContainer}>
            <Text style={styles.pointNumber}>7</Text>
          </View>
          <View style={styles.pointContent}>
            <Text style={styles.pointDescription}>
            Cultivating Gratitude
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pointItem} onPress={handlePointPress8}>
        <View style={styles.pointItem}>
          <View style={styles.pointNumberContainer}>
            <Text style={styles.pointNumber}>8</Text>
          </View>
          <View style={styles.pointContent}>
            <Text style={styles.pointDescription}>
            Finding True Happiness
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        {/* Repeat the above pattern for the remaining points */}
      </ScrollView>

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.descriptionText}>
        "Reclaim Your Heart" is a book written by Yasmin Mogahed. It is a spiritual and self-help book that explores themes of love, loss, and healing. The book offers insights and guidance on how to find inner peace and reclaim one's heart in the face of life's challenges. Yasmin Mogahed is a prominent Islamic speaker and writer known for her inspirational and thought-provoking work.
      </Text>

      <TouchableOpacity style={styles.readButton} onPress={handleReadButtonPress}>
        <Text style={styles.buttonText}>Read</Text>
        <Ionicons name="ios-book" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.listenButton} onPress={handleListenButtonPress}>
        <Text style={styles.buttonText}>Listen</Text>
        <Ionicons name="ios-volume-high" size={24} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020', // Change the background color to greyish black
    paddingHorizontal: 20,
  },
  bookCover: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#ffffff', // Change the text color to white
  },
  bookTitle: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#ffffff', // Change the text color to white
  },
  author: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff', // Change the text color to white
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  infoItem: {
    flex: 1,
    alignItems: 'center',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff', // Change the text color to white
  },
  pointsContainer: {
    marginBottom: 20,
  },
  pointItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  pointNumberContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  pointNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  pointContent: {
    flex: 1,
    marginLeft: 10,
  },
  pointDescription: {
    fontSize: 16,
    textAlign: 'left',
    color: '#ffffff', // Change the text color to white
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
    color: '#ffffff', // Change the text color to white
  },
  readButton: {
    backgroundColor: '#2196f3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginBottom: 10,
  },
  listenButton: {
    backgroundColor: '#8bc34a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default IntroPage;
