import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import loginNavigator from './src/components/screens/login'

export default function App() {
  console.log("App started!")

  const AppNavigator = createAppContainer(createSwitchNavigator({
    loginNavigator: loginNavigator
  }))

  return (
    <AppNavigator/>
  );
}


