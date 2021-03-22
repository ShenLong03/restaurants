import React, { Component } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { Image, ScrollView, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

export default class Login extends Component {
  render() {
    return (
      <ScrollView>
        <Image
          source={require("../../assets/punto-coma.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.container}>
          <Text>Login Form</Text>
          <CreateAccount />
        </View>
        <Divider style={styles.divider} />
      </ScrollView>
    );
  }
}

function CreateAccount(props) {
  return (
    <Text style={styles.register}
    onPress={()=>{console.log("Register")}}
    >
      ¿Aun no tienes una cuenta?{" "}
      <Text style={styles.btnRegister}>Regístrate</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: "100%",
    marginBottom: 20,
  },
  container: {
    marginHorizontal: 40,
  },
  divider: {
    backgroundColor: "#b60073",
    margin: 40,
  },
  register:{
      marginTop:15,
      marginHorizontal:10,
      alignSelf:"center"
  },
  btnRegister:{
      color:"#b60073",
      fontWeight:"bold"
  }
});
