import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Loader from './components/loader';
import { useEffect, useState } from 'react';
import Weather from './components/weather';
import * as Location from 'expo-location';
import axios from 'axios';

//https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=233d3e0a456b7c90b561f50accd87457
const API_KEY = '233d3e0a456b7c90b561f50accd87457'
export default function App() {
  const [isLoading,setIsLoading] = useState(true)
  const [location,setLocation] = useState(null)

  const getWeather = async(latitude,longitude) =>{
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    setLocation(data)
    setIsLoading(false)
  };
  const setWeather = async(query) =>{
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`)
    setLocation(data)
    setIsLoading(false)
  }
  const getLocation = async() =>{
    try{
      const {status} = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied')
        return;
      }
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({})
      getWeather(latitude,longitude)
    }catch(error){
      Alert.alert("I can't find your current location, so bad!")
    }
  }

  useEffect(() =>{
    getLocation()
  },[])

  return isLoading ? <Loader/> : <Weather 
  setWeather={setWeather}
  temp={Math.round(location.main.temp)} 
  name={location.name}
  condition={location.weather[0].main}
  />
}
const styles = StyleSheet.create({})
