import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BlinkestHomePage from './BlinkestHomePage';
import PlayerScreen from './PlayerScreen';
import TextScreen from './TextScreen';
import TextScreen2 from './TextScreen2';
import TextScreen3 from './TextScreen3';
import TextScreen4 from './TextScreen4';
import TextScreen5 from './TextScreen5';
import TextScreen6 from './TextScreen6';
import TextScreen7 from './TextScreen7';
import TextScreen8 from './TextScreen8';
import IslamicBooksPage from './IslamicBooksPage';
import IntroPage from './IntroPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={BlinkestHomePage} />
          <Stack.Screen name="IslamicBooks" component={IslamicBooksPage} />
          <Stack.Screen name="Player" component={PlayerScreen} />
          <Stack.Screen name="Text" component={TextScreen} />
          <Stack.Screen name="Text2" component={TextScreen2} />
          <Stack.Screen name="Text3" component={TextScreen3} />
          <Stack.Screen name="Text4" component={TextScreen4} />
          <Stack.Screen name="Text5" component={TextScreen5} />
          <Stack.Screen name="Text6" component={TextScreen6} />
          <Stack.Screen name="Text7" component={TextScreen7} />
          <Stack.Screen name="Text8" component={TextScreen8} />
          <Stack.Screen name="IntroPage" component={IntroPage} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
