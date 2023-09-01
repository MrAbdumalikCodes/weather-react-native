import React from 'react';
import { StyleSheet,Text } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

export default function Loader() {
	return (
        <>
        <AnimatedLoader
        visible={true}
        overlayColor='#FDF6AA'
        source={require('../assets/loader.json')}
        animationStyle={styles.lottie}
        speed={1}
		>
            <Text style={styles.tet}>Loading...</Text>
        </AnimatedLoader>
        </>
        );
}

const styles = StyleSheet.create({
	lottie: {
		width: 100,
		height: 100,
	},
    tet:{
        fontSize:18,
    }
});