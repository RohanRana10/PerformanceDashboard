import { ActivityIndicator, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen() {
    const navigation = useNavigation();

    const decideNavigation = async () => {
        try {
            const value = await AsyncStorage.getItem('isSetupComplete');
            if (value !== null) {
                // value previously stored
                navigation.replace('Dashboard');
            }
            else {
                navigation.replace('Setup');
            }
        } catch (e) {
            console.log("Async Storage Error:", e);
        }
    }
    useEffect(() => {
        let timeout = setTimeout(() => {
            decideNavigation();
        }, 2000);

        return () => {
            clearTimeout(timeout);
        }
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar />
            {/* <Text style={{color: 'white'}}>SplashScreen</Text> */}
            <Image style={styles.logo} source={require('../assets/speedometer.png')} />
            <ActivityIndicator color={'orange'} size={28} style={{ position: 'absolute', right: 10, top: 10 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#151618',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'center',
    },
    logo: {
        width: 90,
        height: 90
    }
})