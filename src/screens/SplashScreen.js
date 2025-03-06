import React, {useEffect} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('MainTabs')
        }, 3000)
        return () => clearTimeout(timer)
    }, [navigation])
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
      <Image source={require('../../assets/avatardanidev.png')} style={styles.logo}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF0ED',  
      justifyContent: 'center',    
      alignItems: 'center',        
    },
    logo: {
      width: 200,      
      height: 200,
      resizeMode: 'contain',  
    },
    loader: {
      marginTop: 20,   
    },
  })

export default SplashScreen