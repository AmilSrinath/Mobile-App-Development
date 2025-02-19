import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import {Link, router} from "expo-router";

export default function index() {
  return (
    <View>
      <Text style={style.nametext}>Amil Srinath</Text>

      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          margin: 20,
          borderRadius: 20,
          textAlign: "center",
        }}
        placeholder="Type here.."
        onChangeText={(text) => console.log("Hello")}
      />

      <Button
        onPress={() => router.push('/profile')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Image
        source={require("../assets/images/react-logo.png")}
        style={{
          width: 200,
          height: 200,
          alignSelf: "center",
        }}
      />

        <Link style={{
            textAlign: 'center',
            fontSize: 20,
        }} href="/profile">View details</Link>
    </View>
  );
}

const style = StyleSheet.create({
  nametext: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 100,
  },
});
