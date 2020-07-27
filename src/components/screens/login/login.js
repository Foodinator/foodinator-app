import React, { useEffect, Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import {Entypo} from "@expo/vector-icons"
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import { config } from '../../../constants/configuration'
import { NavigationActions } from 'react-navigation';

class Login extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // Check if the user already exists in the localStorage i.e already loggedIn
        // if yes , this.proceed()
    }

    facebookLogIn = async () => {
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
            // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            const userInfo = { id, email, image } // to be extracted from the response
            await success()
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
    }
    
    googleLogIn = async () => {
        try {
            const result = await Google.logInAsync({
              androidClientId: config.androidClientId,
              scopes: ['profile', 'email'],
            });
            
            if (result.type === 'success') {
            //   return result.accessToken;
                const { user } = result
                const userInfo = {
                    id: user.id,
                    email: user.email,
                    image: user.photoUrl
                }
                await this.success(userInfo)
            } else {
            //   return { cancelled: true };
            }
          } catch (e) {
            // return { error: true };

            alert(`Error happend ${e}`)
          }
    }
    
    /**
     * 
     * @param {object} userInfo - information of the user,
     * @param {string|number} userInfo.id - id of the user,
     * @param {string} userInfo.email - email of the user,
     * @param {string} userInfo.image - image of the user
     */
    success = async (userInfo) => {
        // Send user info to the server
        // save user info in the localStorage
        console.log("Dealing witht the user:", userInfo)
        this.proceed()
    }
    
    /**
     * 
     */
    proceed = () => {
        this.props.navigation.navigate('mainNavigator', {name: "moha"}, NavigationActions.navigate("ChoiceScreen"))
    }
      

    render(){
        return (
            <View style={styles.container}>
                <Text>
                    Welcome to Foodinator
                </Text>
                <Button title="Login with Facebook" onPress={this.facebookLogIn}>
                    <Entypo name="facebook" size= {32} color="#3b5998" />
                </Button>
                <Button title="Login with Google" onPress={this.googleLogIn}>
                    <Entypo name="google-" />
                </Button>
            </View>
        )
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