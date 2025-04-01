import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebaseConfig'
import colors from '../../constants/colors'

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [errorMessages, setErrorMessages] = useState('')

    const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('Usuario logueado:', userCredential.user);
          setError(false)
          setErrorMessages('')
          navigation.replace('MainTabs');
          })
        .catch((error) => {
          setError(true)
          setErrorMessages(error.message)
          console.log('Error al iniciar sesión:', error.message);
        })
    }

  return (
   <View style={styles.container}>
    <Image source={require('../../../assets/avatardanidev.png')} style={styles.logo} />
    <Text style={styles.title}>¿En Busqueda de Empleo?</Text>
    <Text style={styles.title}>Inicia sesión con tu cuenta</Text>
    <View style={styles.inputContainer}>
    <Icon name="email-outline" size={24} style={styles.icon} />  
    <TextInput
          style={styles.input}
          placeholder="correo electrónico"
          value={email}
          onChangeText={setEmail}
        />
    </View>
    <View style={styles.inputContainer}>
        <Icon name="lock-outline" size={24}  style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
    </View>

    {error && (
        <Text style={styles.errorMessage}>
          {/* {errorMessage} */}
          Revisa tus credenciales e intenta de nuevo 😕
        </Text>
      )}

    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Iniciar sesión</Text>
    </TouchableOpacity>

    <View style={styles.registerContainer}>
        <Text style={styles.registerText}>¿Aun no tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>Regístrate aquí</Text>
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

export default LoginScreen