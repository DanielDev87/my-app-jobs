import React from 'react'
import {StyleSheet, Text} from 'react-native'
import colors from '../constants/colors'
import { LinearGradient } from 'expo-linear-gradient'

const UserScreen = () => {
  return (
    <LinearGradient colors={colors.gradienteAccion} style={styles.container}>
          <Text style= {styles.text}>User Screen 🤓</Text>
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

export default UserScreen