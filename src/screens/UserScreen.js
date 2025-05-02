import {React, useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import colors from '../constants/colors'
import { LinearGradient } from 'expo-linear-gradient'
import { useAuth } from '../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../services/firebaseConfig'
import { showMessage } from 'react-native-flash-message'



const UserScreen = ({navigation}) => {
  const { user} = useAuth()
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false)
  const [imageUri, setImageUri] = useState(null)
  const defaultImage = 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
  
useEffect(() => {
  if (user && user.photoURL) {
    setImageUri(user.photoURL)
  }else{
    setImageUri(defaultImage)
  }
}, [user])

  const handleLogout = async() => {
    try {
      await signOut(auth)
      showMessage({
        message: '👋',
        description: 'Has cerrado sesión correctamente.',
        type: 'success',
      })
      setLogoutModalVisible(false)
      navigation.navigate('Login')
    }catch (error) {
      showMessage({
        message: '😵‍💫',
        description: 'No se pudo cerrar sesión. Inténtalo de nuevo.',
        type: 'danger',
      })
    }    
  }

  return (
    <LinearGradient colors={colors.gradienteAccion} style={styles.container}>
      
      <View style={styles.header}>
         <View style={styles.info}>
         <Text style={styles.label}>Foto de perfil</Text>
          <Image source={{uri: imageUri || defaultImage}} style={styles.profileImage} />
          </View>
        <Text style={styles.title}>{user?.displayName|| 'Usuario'}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.editButton}>Ajustes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Cerrar sesión 🔚</Text>
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
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#FFF',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#B35A56',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  info: {
    flexDirection: 'column',
  },
  label: {
    fontSize: 16,
    color: '#FFF',
  },
  infoText: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 5,
  },
  editButton: {
    backgroundColor: '#E97C71',
    padding: 8,
    borderRadius: 5,
  },
  editText: {
    color: '#FFF',
    fontSize: 14,
  },
  logoutButton: {
    backgroundColor: '#A72C2A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    color: '#FFF',
    fontSize: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
})

export default UserScreen