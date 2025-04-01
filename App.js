import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from "./src/context/AuthContext";


export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
    </AuthProvider>
    
  )
}

