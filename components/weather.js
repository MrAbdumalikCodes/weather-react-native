import React, { useState } from "react";
import { View,Text,StyleSheet, TextInput, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
const weatherOptions = {
    Clear:{
        iconName:'weather-sunny',
        gradient:['#1e90ff','#9980FA'],
        title:'Amazing weather ☀️',
        description:'You can walking, stop staying at home!'
    },
    Thunderstorm:{
        iconName:'weather-lightning',
        gradient:['#8e44ad','#34495e'],
        title:'Dangerous weather ⚡️',
        description:"Do you see what's on the street?"
    },
    Drizle:{
        iconName:'weather-rainy',
        gradient:['#30336b','#535c68'],
        title:'Do not forget to take an umbrella with you 🌧',
        description:'Rain may increase, stay safe!'
    },
    Rain:{
        iconName:'weather-pouring',
        gradient:['#3c6382','#1e3799'],
        title:'You can enjoy the rainy weather! 🌦',
        description:'Do not stay on the street for a long time, you can get sick in rainy weather!'
    },
    Snow:{
        iconName:'snowflake',
        gradient:['#dfe4ea','#ced6e0'],
        title:`It's a beautiful snowy day outside ❄️`,
        description:`Don't forget to drink coffee on a cold snowy day`
    },
    Dust: {
		iconName: 'weather-windy-variant',
		gradient: ['#B79891', '#94716B'],
		title: 'Dusty 🌪',
		description: 'Better close the windows',
	},
	Smoke: {
		iconName: 'weather-windy',
		gradient: ['#56CCF2', '#2F80ED'],
		title: 'On the street smog 😶‍🌫️',
		description: 'I do not advise going out unnecessarily',
	},
	Haze: {
		iconName: 'weather-hazy',
		gradient: ['#3E5151', '#DECBA4'],
		title: "There's a snow outside!🌫",
		description: 'Dress warmly, make snowmen',
	},
	Mist: {
		iconName: 'weather-fog',
		gradient: ['#606c88', '#3f4c6b'],
		title: "You can't see a damn thing in the fog 🌫",
		description: "Do you see what's on the street?",
	},
	Clouds: {
		iconName: 'weather-cloudy',
		gradient: ['#757F9A', '#D7DDE8'],
		title: 'The clouds ☁️',
		description: 'Go for a walk, stop staying at home!',
	},
}

export default function Weather({temp,name,condition,setWeather}) {
    const [query,setQuery] = useState('');
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.mainContainer}>
        <StatusBar barStyle={'dark-content'}/>
        <View style={styles.container}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} 
        size={96} color={'yellow'}
        />
        <View style={styles.flex}>
            <Text style={styles.temp}>{temp}° | </Text>
            <Text style={styles.temp}>{name}</Text>
        </View>
            <View style={{...styles.container, ...styles.textContainer}}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.description}>{weatherOptions[condition].description}</Text>
                <View style={styles.searchContainer}>
                    <TextInput placeholder="City..." value={query} onChangeText={text=>setQuery(text)}/>
                    <Button style={styles.btn} title="Search" onPress={() => setWeather(query)}/>
                </View>
            </View>
        </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
    },
    container:{
        flex:2,
        justifyContent:"center",
        marginTop:100,
        alignItems:'center',
    },
    temp:{
        fontSize:42,
        color:'white'
    },
    flex:{
        flexDirection:'row',
        alignItems:'center',
    },
    textContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    title:{
        color:'white',
        fontSize:32,
        fontWeight:'300',
        marginBottom:10,
        textAlign:'left'
    },
    description:{
        color:'white',
        fontWeight:'600',
        fontSize:20,
        textAlign:'left'
    },
    searchContainer:{
        padding:10,
        width: 350,
        marginTop:10,
        position:'relative',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#e8e8e8',
        borderRadius: 5,
    },
    input:{
        width:'70%'
    },
    btn:{
        width:"30%",
        backgroundColor:'#1B1464',
        borderRadius:6,
    }
})