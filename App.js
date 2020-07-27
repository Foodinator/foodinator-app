import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import loginNavigator from './src/components/screens/login'
import mainNavigator from './src/components/screens/main';

export default function App() {
  console.log("App started!")

  const AppNavigator = createAppContainer(createSwitchNavigator({
    loginNavigator: loginNavigator,
    mainNavigator: mainNavigator
  }))

  return (
    <AppNavigator/>
  );
}


