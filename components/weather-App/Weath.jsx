import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

const WEATHER_API_KEY = '6eb770c281bd61a25f8de79dc5a8ffc9';
const BASE_WEATHER_URL = 'api.openweathermap.org/data/2.5/weather?';

const Weath = propes => {
  const [location, setLocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        alert("Location denied")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // const {coords:{latitude, longitude, altitude, accuracy, altitudeAccuracy, heading, speed}, timestamp} = location;
      
      const { latitude, longitude } = location.coords;

      const weatherUrl = BASE_WEATHER_URL + 'lat={' + latitude +'}&lon={' + longitude + '}&appid={'+ WEATHER_API_KEY +'}'

      const response = await fetch(weatherUrl);

      const result = await response.json();

      if (response.ok) {
        setCurrentWeather(result);
      } else {
        setErrorMsg("appi not responed ");
      }

      setLocation(location);
    })();
    // return {
    //   return
    // }
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    // cont { latitude, longitude } = location.coords;
    text = JSON.stringify(location);
     
  }

  

  return (
    <View>
      <Text>weather temp {temp }</Text>
      <Text>{text}</Text>
    </View>
  );
}

export default Weath;