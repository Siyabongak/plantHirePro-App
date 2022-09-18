//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, } from 'react-native';
import { registration } from './Backend/Authentication';

// create a component
const Profile = ({ navigation }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerUser = () => {
        registration(firstName,lastName,email,password)
    }
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
                value={firstName}
                onChangeText={text => setFirstName(text)}

            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={text => setLastName(text)}

            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}

            />
            <TextInput
                style={styles.input}
                placeholder="Create Password"
                value={password}
                secureTextEntry
                onChangeText={text => setPassword(text)}

            />
            <TextInput
                style={styles.input}
                placeholder="Re-enter Password"

            />
            <TouchableOpacity
                style={styles.button}
                onPress={registerUser}
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
