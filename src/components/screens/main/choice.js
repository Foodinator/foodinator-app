import React, { useState } from 'react';
import { View, Image, StyleSheet, Button } from 'react-native'
const defaultImage = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.fr%2Fpin%2F514606694911799407%2F&psig=AOvVaw2sQrTZoHVjyCxl5mreUTCv&ust=1595942474973000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCp6ZTD7eoCFQAAAAAdAAAAABAD"

function Choice ({ navigation }) {
    const [name, setName] = useState("Bro")
    const [image, setImage] = useState(defaultImage)

    
    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: image }} style={styles.profileImage} />
                <Text>Wuzzzguuud ${name}</Text>  
            </View>

            <View style={styles.container}>
                <Button title="BREAKFAST" onPress={() => showMeal("BREAKFAST")}></Button>
                <Button title="LUNCH" onPress={() => showMeal("LUNCH")}></Button>
                <Button title="DINNER" onPress={() => showMeal("DINNER")}></Button>
                <Button title="SNACK" onPress={() => showMeal("SNACK")}></Button>
            </View>
            
        </View>
    )
}

/**
 * 
 * @param {("BREAKFAST"|"LUNCH"|"DINNER"|"SNACK")} type - The type of the meal to see 
 */
function showMeal(type) {
    console.log("Meal choosen:", type)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileImage: {
        height: 40,
        width: 40,
        alignSelf:'center'
    }
  });

export default Choice