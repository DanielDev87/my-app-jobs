import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import colors from '../constants/colors'
import { LinearGradient } from 'expo-linear-gradient'
import { useAuth } from '../context/AuthContext'
import { signOut } from 'firebase/auth'


const UserScreen = ({navigation}) => {
  const { user } = useAuth()

  const handleLogout = () => {
    signOut(auth)
      .then(() => navigation.replace('Login'))
      .catch((error) => Alert.alert('Error', 'No se pudo cerrar sesión.'));
  }

  return (
    <LinearGradient colors={colors.gradienteAccion} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{user?.displayName|| 'Usuario'}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.editButton}>Ajustes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Cerrar sesión</Text>
          </TouchableOpacity>
      

      </View>          
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