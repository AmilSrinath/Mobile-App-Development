import {View, Text, Button} from "react-native";
import React from "react";
import {router} from "expo-router";

export default function profile() {
    return (
        <View>
            <Text>Profile</Text>


            <Button
                onPress={() => router.back()}
                title="Back"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />

        </View>
    );
}