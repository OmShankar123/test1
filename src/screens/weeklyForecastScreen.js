import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image, Dimensions } from 'react-native';

const WeeklyForecastScreen = ({ location}) => {
  const apiKey = '243a994c44c74d44afb83513242304';
  //const location = 'noida';
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError(error.message || 'An error occurred while fetching data');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [apiKey, location]);

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (!weatherData) {
    return (
      <View style={[styles.container, styles.noDataContainer]}>
        <Text style={styles.noDataText}>No data available</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, styles.weatherContainer]}>
      <Text style={styles.title}>Weekly forecast of {location}</Text>
      <FlatList
        data={weatherData.forecast.forecastday}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>



            <View style={styles.weatherInfoContainer}>

<Text style={styles.dateText}>{item.date}</Text>



</View>
            <View style={styles.weatherIconContainer}>
              <Image source={{ uri: `https:${item.day.condition.icon}` }} style={styles.weatherIcon} />
            </View>



            <View style={styles.weatherInfoContainer}>

              
              <View style={styles.textContainer}>
                
                <Text style={styles.infoText}>{item.day.maxtemp_c}/{item.day.mintemp_c}°C</Text>
              </View>
              
              <View style={styles.textContainer}>
               
                <Text style={styles.infoText}>{item.day.condition.text}</Text>

              </View>
            </View>

          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom:20
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  loadingContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  errorContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  noDataContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  weatherContainer: {
    backgroundColor: "#1E0342",
    flex: 1,
  },
  title: {
    fontSize: 20,
    color:'#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorText: {
    color: 'white',
  },
  noDataText: {
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
   // backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 5,
    borderRadius: 10,
    width: '100%',
  //  height: height / 8, 
  },
  weatherIconContainer: {
   // justifyContent:'space-between',
    
   // marginRight: 10,
   // marginLeft:10,
  },
  weatherIcon: {
    width: 60,
    height: 60,
  },
  weatherInfoContainer: {
   // backgroundColor:'red',
    width:100,
    //justifyContent:'space-between',
    //  flex: 1,
  },
  dateText: {
    fontSize: 16,
    color:'#CDCDCD',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   // marginLeft:10,
    marginRight:10
  },
  labelText: {
    fontSize: 14,
    marginRight: 5,
    color: 'white',
  },
  infoText: {
    fontSize: 16,
    fontWeight:'600',
    color: 'white',
  },
  flatListContent: {
    top:10,
    justifyContent: 'center',
    borderRadius:20,
    marginBottom:20,
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     flexGrow: 1,
  },
});

export default WeeklyForecastScreen;
