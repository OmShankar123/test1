
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image,TouchableOpacity, StatusBar } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const handlePress = () => {
     navigation.navigate('Main');
  };

  return (
    <ImageBackground source={require('../assets/bg3.jpeg')} style={styles.background}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.container}>
        {/* <Image style={{height:250,width:250}}
        source={require('../assets/sp.jpeg')}></Image> */}
        <Text style={styles.title}>Weather App</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
   // alignItems: 'center',
  },
  container: {
    top:75,
   alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  button: {
    top:20,
    backgroundColor: '#FBAE3C', 
    paddingVertical: 15, 
    paddingHorizontal: 10, 
    borderRadius: 10, 
    width:250,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    fontSize: 22,
    fontWeight:'600',
    color:'#000'
  },
});

export default SplashScreen;
