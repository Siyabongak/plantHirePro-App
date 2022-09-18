//import liraries
import React, { Component, useState } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebaseConfig from './firebaseConfig';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// create a component
const Login = ({ navigation }) => {
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")

    
    return (
        <SafeAreaView>
            <Text style={{margin:15, paddingTop:35, fontSize:34,paddingBottom:10, fontWeight:"100"}}>
                Welcome back 
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}

                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    secureTextEntry
                    onChangeText={text => setPassword(text)}
                    
                />
            </View>
            <View style={styles.buttonFix}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={{ color: "white" }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Profile")}
                >
                    <Text style={{ color: "white" }}>Create Account</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    form: {
        paddingTop: windowHeight / 7
    },
    buttonFix: {
        flexDirection: "row",
        justifyContent: "space-between",
    }

});

//make this component available to the app
export default Login;
