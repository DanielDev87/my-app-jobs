import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'
import { useAuth } from '../context/AuthContext'
import { auth } from '../services/firebaseConfig'
import colors from '../constants/colors'


const SettingsScreen = () => {
    const { user } = useAuth()
    

    
    
    
    
  return (
    <View style={styles.container}>    
        <Text style={styles.subtitle}>Ajustes</Text>    
        <Text style={styles.sectionTitle}>Sobre tu cuenta</Text>
        <View style={styles.row}>
            <View style={styles.info}>
                <Text style={styles.label}>Nombre</Text>
                <Text style={styles.infoText}>{user?.displayName || 'Sin nombre'}</Text>
            </View>
            <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('EditName')}
            >
            <Text style={styles.editText}>Editar</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.label}>Correo electrónico</Text>
          <Text style={styles.infoText}>{user?.email}</Text>
        </View>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditEmail')}
        >
          <Text style={styles.editText}>Editar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.label}>Nueva contraseña</Text>
          <Text style={styles.infoText}>Cambiar contraseña</Text>
        </View>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditPassword')}
        >
          <Text style={styles.editText}>Editar</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.editText}>Acerca de </Text>
        </TouchableOpacity> */}

        
      </View>


    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: colors.variante6,
    },
    subtitle: {
      fontSize: 24,
      color: colors.luminous,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: 18,
      color: colors.luminous,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 15,
      marginBottom: 15,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5, // Sombra en Android
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    info: {
      flex: 1,
    },
    label: {
      fontSize: 14,
      color: colors.luminous,
      fontWeight: 'bold',
    },
    infoText: {
      fontSize: 16,
      color: colors.variante2,
    },
    editButton: {
      backgroundColor: colors.variante8,
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 8,
    },
    editText: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold',
    },
  })
export default SettingsScreen