import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import {Entypo} from "@expo/vector-icons"
import { facebook } from "../../../constants/facebook"
import * as Facebook from 'expo-facebook';
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
                <Button title="Login with Facebook" onPress={logIn}>
                    <Entypo name="facebook" size= {32} color="#3b5998" />
                </Button>
            </View>
        )
    }
}

async function logIn() {
    try {
      await Facebook.initializeAsync(facebook.id);
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
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Login