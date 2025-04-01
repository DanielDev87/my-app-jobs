
import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';
import colors from '../../constants/colors'

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = ()=>{
        createUserWithEmailAndPassword(auth, email,password)
            .then((userCredential) => {
                const user = userCredential.user
                updateProfile(user, {
                    displayName: name
                }).then(() => {
                    console.log('Usuario registrado con nombre:', user.displayName);
                    navigation.navigate('Login',{screen:'LoginScreen'})
                }).catch((error) => {
                    setError(true);
                    setErrorMessage(error.message);
                })
            })            
            .catch((error) => {
                setError(true);
                setErrorMessage(error.message);
            })
            
    }

  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/avatardanidev.png')} style={styles.logo} />
        <Text style={styles.title}>Crea una cuenta</Text>

        <View style={styles.inputContainer}>
            <Icon name="account-outline" size={24} style={styles.icon} />
                <TextInput
                style={styles.input}
                placeholder="nombre"
                value={name}
                onChangeText={setName}/>
        </View>

        <View style={styles.inputContainer}>
            <Icon name="email-outline" size={24} style={styles.icon} />
                <TextInput
                style={styles.input}
                placeholder="correo electrónico"
                value={email}
                onChangeText={setEmail}/>
        </View>

        <View style={styles.inputContainer}>
            <Icon name="lock-outline" size={24} style={styles.icon} />
                <TextInput
                style={styles.input}
                placeholder="contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}/>
        </View>

        {error && (
        <Text style={styles.errorMessage}>
          {errorMessage}
        </Text>
      )}

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Crear cuenta</Text>
         </TouchableOpacity>

         <View style={styles.loginContainer}>
            <Text style={styles.loginText}>¿Ya tienes una cuenta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginLink}>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.variante1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
      },
      logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 30,
      },
      title: {
        fontSize: 18,
        color: colors.luminous,
        fontWeight: '600',
        marginBottom: 20,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.fondoClaro,
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: colors.variante3,
      },
      icon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: colors.thin,
      },
      forgotPassword: {
        color: colors.variante8,
        fontSize: 14,
        marginBottom: 20,
      },
      loginButton: {
        backgroundColor: colors.exito,
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 30,
        marginBottom: 30,
      },
      loginButtonText: {
        color: colors.luminous,
        fontSize: 16,
        fontWeight: 'bold',
      },
      registerContainer: {
        flexDirection: 'row',
      },
      registerText: {
        color: colors.subtle,
        fontSize: 14,
      },
      registerLink: {
        color: colors.variante3,
        fontSize: 14,
        fontWeight: 'bold',
      },
      errorMessage: {
        color: colors.error,  
        fontSize: 14,
        marginBottom: 10,
      },

})
export default RegisterScreen

