import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, StatusBar, BackHandler, ToastAndroid } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import WeatherScreen from './screens/weatherScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Geolocation from '@react-native-community/geolocation';

const API_KEY = '243a994c44c74d44afb83513242304';

const Main = () => {
  const [city, setCity] = useState('Dehradun');
  const [submittedCity, setSubmittedCity] = useState('Dehradun');
  const [latitude,setLatitude]=useState('30.316496')
  const [longitude,setLongitude]=useState('78.032188')
  const [backPressCount, setBackPressCount] = useState(0);

  useEffect(() => {
    getLocation();
  }, []);

  const handleBackPress = () => {
    if (backPressCount === 1) {
     // ToastAndroid.show('You exit the app', ToastAndroid.SHORT);
      BackHandler.exitApp();
      return true;
    } else {
      setBackPressCount(1);
      ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
      setTimeout(() => setBackPressCount(0), 2000);
      return true;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [backPressCount]);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  };

  const fetchWeatherDataFromL = async (latitude, longitude) => {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setCity(data.location.name)
      setSubmittedCity(data.location.name);
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  };

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeatherDataFromL(latitude, longitude);
      setCity(data.location.name);
      setSubmittedCity(data.location.name);
    };

    getWeather();
  }, [latitude, longitude]);

  const handleCityChange = (text) => {
    setCity(text);
  };

  const handleSubmit = () => {
    setSubmittedCity(city);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          placeholderTextColor={'#CDCDCD'}
          onChangeText={handleCityChange}
          value={city}
        />
        <TouchableOpacity style={styles.iconButton} onPress={handleSubmit}>
          <MaterialIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <WeatherScreen Ocity={submittedCity} latitude={latitude} longitude={longitude}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#1E0342",
    paddingHorizontal: 20,
  },
  inputContainer: {
    top:20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    color:'#FFF',
    borderColor: 'gray',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    top:-5
  },
});

export default Main;
