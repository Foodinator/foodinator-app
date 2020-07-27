import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import {Entypo} from "@expo/vector-icons"
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import { config } from '../../../constants/configuration'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Welcome to Foodinator
                </Text>
                <Button title="Login with Facebook" onPress={facebookLogIn}>
                    <Entypo name="facebook" size= {32} color="#3b5998" />
                </Button>
                <Button title="Login with Google" onPress={googleLogIn}>
                    <Entypo name="google-" />
                </Button>
            </View>
        )
    }
}

async function facebookLogIn() {
    try {
      await Facebook.initializeAsync(config.facebookId);
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
}

async function googleLogIn() {
    try {
        const result = await Google.logInAsync({
          androidClientId: config.androidClientId,
          scopes: ['profile', 'email'],
        });
        
        console.log("Result:", result)
        if (result.type === 'success') {
          return result.accessToken;
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
}
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Login