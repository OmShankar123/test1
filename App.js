// import { StyleSheet, Text, View } from 'react-native'
// import * as React from 'react';
// import 'react-native-gesture-handler';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// // import React from 'react'
// import Main from './src/Main'
// import SplashScreen from './src/screens/splashScreen';


// const App = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SplashScreen/>
//    {/* <Main/> */}
//    </GestureHandlerRootView>
//   )
// }

// export default App

// const styles = StyleSheet.create({})





// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/splashScreen';
import Main from './src/Main';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} 
        options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} 
         options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

