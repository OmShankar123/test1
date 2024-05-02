// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, ActivityIndicator, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import { BlurView } from "@react-native-community/blur";
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {SliderBox } from "react-native-image-slider-box";
// import DetailImageScreen from './detailImageScreen';
// import { ScrollView } from 'react-native-gesture-handler';

// const API_KEY = '243a994c44c74d44afb83513242304';

// const WeatherScreen = ({ Ocity, latitude, longitude }) => {
//   console.log("Ocity",Ocity,latitude,longitude)
//   const [weatherData1, setWeatherData1] = useState(null);
//   const [weatherData, setWeatherData] = useState(null);
//   const [forecastData, setForecastData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);



//   const images = [
//     "https://graphicsfamily.com/wp-content/uploads/edd/2022/07/Healthy-Food-Social-Media-Post-Template-999x999.png",
//     "https://cdn.pixabay.com/photo/2023/11/17/20/05/ai-generated-8394986_1280.jpg",
//     "https://cdn.pixabay.com/photo/2023/11/17/20/04/ai-generated-8394982_1280.jpg",
//     "https://cdn.pixabay.com/photo/2023/11/17/20/05/ai-generated-8394986_1280.jpg",
//     "https://cdn.pixabay.com/photo/2019/06/08/20/06/dining-table-4260920_960_720.jpg",
// ];


// const fetchWeatherDataFromL = async (latitude, longitude) => {
//   //const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
//   const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`;
//   console.log(latitude,longitude);
//   console.log("Api url",apiUrl)

//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error('Failed to fetch weather data');
//     }
//     const data = await response.json();
//     setLoading(false)
//     return data;
   
//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//     setLoading(false)
//     return null;
//   }
// };


  

//   // useEffect(() => {
//   //   const getWeather = async () => {
//   //     const data = await fetchWeatherDataFromL(latitude, longitude);
//   //    setWeatherData1(data);
//   //   };

//   //   getWeather();
//   // }, [latitude, longitude]);



//   //console.log("Datat by lattitude",weatherData1.location.name)







//   // const fetchWeatherData = async () => {
//   //   setError(null);
//   //   setLoading(true);
//   //   try {
//   //     const currentResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${Ocity}&aqi=yes`);
//   //     const currentData = await currentResponse.json();
//   //     const forecastResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${Ocity}&days=1&aqi=no&alerts=no`);
//   //     const forecastData = await forecastResponse.json();
//   //     setError(null);
//   //     setWeatherData(currentData);
//   //     setForecastData(forecastData);
//   //   } catch (error) {
//   //     setError(error.message);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const fetchWeatherData = async () => {
//     setError(null);
//     setLoading(true);
//     try {
//       const currentResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${Ocity}&aqi=yes`);
//       const currentData = await currentResponse.json();
//       const forecastResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${Ocity}&days=1&aqi=no&alerts=no`);
//       const forecastData = await forecastResponse.json();
//       setError(null);
//       setWeatherData(currentData);
//       setForecastData(forecastData);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // useEffect(() => {
//   //   fetchWeatherData();
//   // }, []);

//   const handleRetry = () => {
//     fetchWeatherData();
//   };





//   console.log("Data from api",weatherData)
//   useEffect(() => {
//     fetchWeatherData();
//   }, [Ocity]);

//   const refreshWeather = () => {
//     fetchWeatherData();
//   };

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.error}>Error: {error}</Text>
//         <Button title="Retry" onPress={handleRetry} />
//       </View>
//     );
//   }

//   const renderForecastItem = ({ item }) => (
//     <View style={styles.forecastItem}>
//       <Text style={styles.forecastTime}>{item.time.substring(10, 16)}</Text>
//       <Text style={styles.forecastTemp}>{item.temp_c}°C</Text>
//       <Text style={styles.forecastCondition}>{item.condition.text}</Text>
//       <Image style={styles.icon} source={{ uri: `https:${item.condition.icon}` }} />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={styles.time}>{weatherData.location.localtime.substring(0, 10)}</Text>
//         <Text style={styles.title}>{weatherData.location.name}</Text>
//       </View>

//       {/* <BlurView intensity={70} style={styles.weatherInfoContainer}> */}
      
//   <View style={styles.weatherContainer}>
//     <View style={styles.weatherDetails}>
//       <Text style={styles.weatherInfo}>{weatherData.current.temp_c}°C</Text>
//       <Text style={styles.weatherInfo1}>{ weatherData.current.condition.text}</Text>
//       <Text style={styles.weatherInfo2}>{`Wind: ${weatherData.current.wind_kph} km/h ${weatherData.current.wind_dir}`}</Text>
//     </View>

//     <View style={styles.iconContainer}>
//       <Image style={styles.currentWeatherIcon} source={{ uri: `https:${weatherData.current.condition.icon}` }} />
//     </View>
//   </View>
                          

//                           <DetailImageScreen query={weatherData.current.condition.text}/>

                         

// {/* </BlurView> */}


//                            {/* <View style={styles.sliderContainer}>
//                             <SliderBox
//                                 images={images}
//                                 sliderBoxHeight={height * 0.58}
//                                 dotColor="purple"
//                                 inactiveDotColor="#FFF"
//                                 paginationBoxStyle={styles.paginationBoxStyle}
//                                 dotStyle={styles.dotStyle}
//                                 imageLoadingColor="#2196F3"
//                                 resizeMethod={'resize'}
//                                 resizeMode={'cover'}
//                                 currentImageEmitter={(index) => setCurrentIndex(index)}
//                             />

//                             <Text style={styles.imageCounter}>{`${currentIndex + 1}/${images.length}`}</Text>
//                         </View> */}


//       <ScrollView style={styles.forecastContainer}>
//         <Text style={styles.forecastTitle}>Today's Forecast</Text>
//         <FlatList
//           data={forecastData.forecast.forecastday[0].hour}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={renderForecastItem}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//         />
        
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//     top:20
//   },
//   title: {
//     fontSize: 15,
//     color: "gray"
//   },
//   time: {
//     fontSize: 20,
//     color: "#fff"
//   },
//   weatherInfoContainer: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginVertical: 10,
//     backgroundColor:'red'
//   },
//   weatherContainer: {
//     top:10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     //borderRadius: 10,
//     borderWidth:1,
//     borderColor: 'gray',
//     justifyContent: 'space-between',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderTopLeftRadius: 40,
//     borderBottomRightRadius: 40,
//   },
//   weatherDetails: {
//     alignItems: 'flex-start',
//   },
//   iconContainer: {
//     alignItems: 'center',
//     top: -20
//   },
//   currentWeatherIcon: {
//     height: 150,
//     width: 120,
//   },
//   weatherInfo: {
//     fontSize: 50,
//     color: 'yellow',
//     fontWeight: '600'
//   },
//   weatherInfo1: {
//     fontSize: 20,
//     color: 'gray'
//   },
//   weatherInfo2: {
//     fontSize: 16,
//     color: 'gray'
//   },

//   sliderContainer: {
//     position: 'relative',
// },
// imageCounter: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     color: 'white',
//     fontSize: 16,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 15,
// },



  
//   forecastContainer: {
//     marginTop:30,
//     marginBottom: 20,
//   },
//   forecastTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 10,
//   },
//   forecastItem: {
//     marginRight: 10,
//     borderRadius: 10,
//     padding: 10,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   forecastTime: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   forecastTemp: {
//     fontSize: 16,
//     color: '#fff',
//     marginTop: 5,
//   },
//   forecastCondition: {
//     fontSize: 14,
//     color: '#ccc',
//   },
//   icon: {
//     width: 50,
//     height: 50,
//   },
//   error: {
//     fontSize: 18,
//     color: 'red',
//     marginBottom: 10,
//   },
// });

// export default WeatherScreen;


import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, ActivityIndicator, Image, StyleSheet, FlatList, TouchableOpacity, RefreshControl, ScrollView } from 'react-native';
import { BlurView } from "@react-native-community/blur";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SliderBox } from "react-native-image-slider-box";
import DetailImageScreen from './detailImageScreen';
import WeeklyForecastScreen from './weeklyForecastScreen';

const API_KEY = '243a994c44c74d44afb83513242304';

const WeatherScreen = ({ Ocity, latitude, longitude }) => {
  console.log("Ocity", Ocity, latitude, longitude)
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const images = [
    "https://graphicsfamily.com/wp-content/uploads/edd/2022/07/Healthy-Food-Social-Media-Post-Template-999x999.png",
    "https://cdn.pixabay.com/photo/2023/11/17/20/05/ai-generated-8394986_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/11/17/20/04/ai-generated-8394982_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/11/17/20/05/ai-generated-8394986_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/06/08/20/06/dining-table-4260920_960_720.jpg",
  ];

  const fetchWeatherData = async () => {
    setError(null);
    setLoading(true);
    try {
      const currentResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${Ocity}&aqi=yes`);
      const currentData = await currentResponse.json();
      // Handle specific error code 1006
      if (currentData.error && currentData.error.code === 1006) {
        setError('No matching location found');
        setLoading(false);
        return;
      }
      if (currentData.error) {
        setError(error.message);
        setLoading(false);
        return;
      }
      const forecastResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${Ocity}&days=1&aqi=no&alerts=no`);
      const forecastData = await forecastResponse.json();
      setWeatherData(currentData);
      setForecastData(forecastData);
      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError(error.message);
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [Ocity]);

  const handleRetry = () => {

    fetchWeatherData();
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchWeatherData();
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container1}>
        <Text style={styles.error}>Error: {error}</Text>
        <Button title="Retry" onPress={handleRetry} />
      </View>
    );
  }

  const renderForecastItem = ({ item }) => (
    <View style={styles.forecastItem}>
      <Text style={styles.forecastTime}>{item.time.substring(10, 16)}</Text>
      <Text style={styles.forecastTemp}>{item.temp_c}°C</Text>
      <Text style={styles.forecastCondition}>{item.condition.text}</Text>
      <Image style={styles.icon} source={{ uri: `https:${item.condition.icon}` }} />
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
       showsVerticalScrollIndicator={false}
       showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View>
          <Text style={styles.time}>{weatherData.location.localtime.substring(0, 10)}</Text>
          <Text style={styles.title}>{weatherData.location.name}</Text>
        </View>

        <View style={styles.weatherContainer}>
          <View style={styles.weatherDetails}>
            <Text style={styles.weatherInfo}>{weatherData.current.temp_c}°C</Text>
            <Text style={styles.weatherInfo1}>{weatherData.current.condition.text}</Text>
            <Text style={styles.weatherInfo2}>{`Wind: ${weatherData.current.wind_kph} km/h ${weatherData.current.wind_dir}`}</Text>
          </View>

          <View style={styles.iconContainer}>
            <Image style={styles.currentWeatherIcon} source={{ uri: `https:${weatherData.current.condition.icon}` }} />
          </View>
        </View>

         <DetailImageScreen query={weatherData.current.condition.text} /> 

        

        <View style={styles.forecastContainer}>
          <Text style={styles.forecastTitle}>Today's Forecast</Text>
          <FlatList
            data={forecastData.forecast.forecastday[0].hour}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderForecastItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <WeeklyForecastScreen location={weatherData.location.name}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    top: 20,
    bottom:20
  },
  container1: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent:'center'
  },
  title: {
    fontSize: 15,
    color: "gray"
  },
  time: {
    fontSize: 20,
    color: "#fff"
  },
  weatherInfoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'red'
  },
  weatherContainer: {
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  weatherDetails: {
    alignItems: 'flex-start',
  },
  iconContainer: {
    alignItems: 'center',
    //top: -20
  },
  currentWeatherIcon: {
    height: 150,
    width: 120,
  },
  weatherInfo: {
    fontSize: 50,
    color: 'yellow',
    fontWeight: '600'
  },
  weatherInfo1: {
    fontSize: 20,
    color: 'gray'
  },
  weatherInfo2: {
    fontSize: 16,
    color: 'gray'
  },
  forecastContainer: {
    marginTop: 30,
    marginBottom: 30,
  },
  forecastTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  forecastItem: {
    marginRight: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  forecastTime: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  forecastTemp: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  forecastCondition: {
    fontSize: 14,
    color: '#ccc',
  },
  icon: {
    width: 50,
    height: 50,
  },
  error: {
    fontSize: 18,
    color: 'red',
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
});

export default WeatherScreen;


