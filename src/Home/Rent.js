//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

// create a component
const Rent = () => {
    return (
        <SafeAreaView>
            <Text style={{
                margin: 10, paddingTop: 2,
                paddingBottom: 2, fontSize: 20, fontWeight: "200"
            }}>
                Message Lister
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Your Name"
              

            />
            
            <TextInput
                style={styles.input}
                placeholder="Your Email"
                
            />
            <TextInput
                style={{height:80, margin:12, borderRadius:20, padding:10, borderWidth:1}}
                placeholder="Enter Your Message"
               

            />

            <TouchableOpacity
                style={styles.button}
                
            >
                <Text style={{ color: "white" }}>Send Message</Text>
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
export default Rent;
