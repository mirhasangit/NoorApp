import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IslamicBooksPage = () => {
  const navigation = useNavigation();

  const handleBookPress = () => {
    navigation.navigate('Player');
  };

  const handleBubblePress = () => {
    navigation.navigate('IntroPage');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.header}>Today for you</Text>
      </View>

      {/* Free Daily Summary Bubble */}
      <TouchableOpacity style={styles.bubbleContainer} onPress={handleBubblePress}>
        <View style={styles.bubbleContent}>
          <Text style={styles.bubbleHeader}>Free daily summary</Text>
          <Text style={styles.bubbleText}>Get it now -&gt;</Text>
        </View>
        <Image source={require('./assets/reclaimcover.gif')} style={styles.bubbleImage} />
      </TouchableOpacity>

      {/* Books */}
      <View style={styles.booksContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.bookContainer} onPress={handleBookPress}>
            <Image source={require('./assets/lionhousecover.jpg')} style={styles.bookImage} />
            <Text style={styles.bookTitle}>Christopher de Bellaigue</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookContainer} onPress={handleBookPress}>
            <Image source={require('./assets/meetingcover.jpg')} style={styles.bookImage} />
            <Text style={styles.bookTitle}>Omar Suleiman</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookContainer} onPress={handleBookPress}>
            <Image source={require('./assets/secretcover.jpg')} style={styles.bookImage} />
            <Text style={styles.bookTitle}>A. Helwa</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookContainer} onPress={handleBookPress}>
            <Image source={require('./assets/DestinyDisruptedcover.jpg')} style={styles.bookImage} />
            <Text style={styles.bookTitle}>Mir Tamim Ansary</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#202020', // Change the background color to greyish black
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff', // Change the text color to white
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff', // Change the text color to white
  },
  booksContainer: {
    marginBottom: 10,
    alignItems: 'flex-start', // Align items at the top
  },
  bookContainer: {
    marginRight: 35,
    marginTop: 20, // Add marginTop for spacing
    borderRadius: 10,
    alignItems: 'center',
    width: 100, // Adjust the width as needed
  },
  bookImage: {
    width: 120,
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 16, // Adjust the font size as desired
    flexWrap: 'wrap', // Wrap the text to the next line if it exceeds the width
    alignSelf: 'flex-start', // Align the text to the left
    color: '#ffffff', // Change the text color to white
  },
  bubbleContainer: {
    backgroundColor: '#800080',
    padding: 20,
    borderRadius: 10,
    marginTop: 10, // Adjust the marginTop to move the bubble higher
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bubbleContent: {
    flex: 1,
    marginRight: 10,
  },
  bubbleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  bubbleText: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 10,
  },
  bubbleImage: {
    width: 60,
    height: 90,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default IslamicBooksPage;
