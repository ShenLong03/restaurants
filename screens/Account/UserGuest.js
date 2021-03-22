import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native'

export default function UserGuest() {
  const navigation =useNavigation()
    return (
      <ScrollView centerContent style={styles.viewBody}>
        <Image
          source={require("../../assets/punto-coma.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.title}>Consulta tu perfil en restaurantes</Text>
        <Text style={styles.description}>
          ¿Como describiriras mejor tu restaurante de una forma sencilla, vota
          cúal te ha gustado más y comenta ha sido tu experiencia?
        </Text>
        <Button
            title="Ver tu perfil"
            buttonStyle={styles.button}
            onPress={()=>navigation.navigate("login")}
        />
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody:{
        marginHorizontal:30
    },
    image:{
        height:300,
        width:"100%",
        marginBottom: 10
    },
    title:{
        fontWeight:"bold",
        fontSize:19,
        marginVertical:10,
        textAlign:"center"
    },
    description:{
        textAlign:"justify",
        marginBottom:10,
        color:"#c43994"
    },
    button:{
        backgroundColor:"#b60073"
    }
})
