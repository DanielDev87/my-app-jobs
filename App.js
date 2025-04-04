import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from "./src/context/AuthContext";
import FlashMessage from "react-native-flash-message"



export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <AppNavigator/>
      <FlashMessage position="top"/>
    </NavigationContainer>
    </AuthProvider>    
  )
}

