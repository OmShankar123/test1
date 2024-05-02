import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

const { height } = Dimensions.get('window');

const DetailImageScreen = ({ query }) => {
  const [images, setImages] = useState([
    "https://graphicsfamily.com/wp-content/uploads/edd/2022/07/Healthy-Food-Social-Media-Post-Template-999x999.png",
    "https://cdn.pixabay.com/photo/2019/06/08/20/06/dining-table-4260920_960_720.jpg",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const apiUrl = `https://api.unsplash.com/search/photos?&query=${query}`;
      console.log("API URL:", apiUrl);

      try {
        const response = await fetch(apiUrl, {
          headers: {
            'Authorization': 'Client-ID LhoxcBUMPr3nEJMqjU9Wmyur_FqDbbv5fSIPsBJZ_fI',
          },
        });
        const data = await response.json();
        console.log("Api data ", data)
        const imageData = data.results.map(photo => photo.urls.regular);
        setImages(imageData.slice(0, 5));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [query]);

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <SliderBox
          images={images}
          sliderBoxHeight={height * 0.4}
          dotColor="purple"
          inactiveDotColor="#FFF"
          paginationBoxStyle={styles.paginationBoxStyle}
          dotStyle={styles.dotStyle}
          imageLoadingColor="#2196F3"
          resizeMethod={'resize'}
          resizeMode={'cover'}
          currentImageEmitter={(index) => setCurrentIndex(index)}
          imageLoadingIndicator={() => null}
          autoplay 
          circleLoop 
          autoplayInterval={3000}
        />
        <Text style={styles.imageCounter}>{`${currentIndex + 1}/${images.length}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    top: 15,
  },
  paginationBoxStyle: {
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 20
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: -5,
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.92)'
  },
  sliderContainer: {
    top: 10,
    position: 'relative',
    borderRadius: 20,
    overflow: 'hidden', 
  },
  imageCounter: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: 'white',
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
  },
});

export default DetailImageScreen;
