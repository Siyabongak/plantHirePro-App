//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, } from 'react-native';

// create a component
const Profile = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text style={{
                margin: 10, paddingTop: 2,
                paddingBottom: 2, fontSize: 20, fontWeight: "bold"
            }}>
                Create Account
            </Text>
            <TextInput
                style={styles.input}
                placeholder="First Name"

            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"

            />
            <TextInput
                style={styles.input}
                placeholder="Email"

            />
            <TextInput
                style={styles.input}
                placeholder="Create Password"

            />
            <TextInput
                style={styles.input}
                placeholder="Re-enter Password"

            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Profile")}
            >
                <Text style={{ color: "white" }}>Save</Text>
            </TouchableOpacity>



        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,

    },
    button: {
        alignItems: 'center',
        backgroundColor: "#34515e",
        padding: 10,
        borderRadius: 20,
        margin: 15,
        width: 150,
    },
});

//make this component available to the app
export default Profile;
