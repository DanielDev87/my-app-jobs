import React from 'react'
import {StyleSheet, Text} from 'react-native'
import colors from '../constants/colors'
import { LinearGradient } from 'expo-linear-gradient'
import { useAuth } from '../context/AuthContext'


const HomeScreen = () => {
  const { user } = useAuth()
  return (
    <LinearGradient colors={colors.gradienteSecundario} style={styles.container}>
      <Text style= {styles.text}>Hola  {user?.displayName || 'Usuario'}</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    color: colors.luminous,
    fontWeight: 'bold'
  }
})

export default HomeScreen