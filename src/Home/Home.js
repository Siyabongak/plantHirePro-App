//import liraries
import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, } from 'react-native';
import machineData from './Data';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


// create a component
const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text style={{
                margin: 10, paddingTop: 2,
                paddingBottom: 2, fontSize: 20, fontWeight: "bold"
            }}>
                Machine Catalog
            </Text>
            <FlatList
                data={machineData}
                contentInset={{ padding: 12 }}
                renderItem={({ item }) => {
                    return [
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Details")}
                            style={{
                                margin: 10, height: windowHeight * 0.15,
                                backgroundColor: item.bgColor, borderRadius: 30,
                                borderColor: item.bdrColor
                            }}>

                            <Text style={styles.names}>
                                {item.name}
                            </Text>
                            <Text style={styles.types}>
                                {item.type}
                            </Text>
                            <Text style={styles.companies}>
                                {item.company}
                            </Text>
                            <Image style={styles.logo} source={item.image} />

                        </TouchableOpacity>
                    ]
                }}
            />
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#34515e',
    },
    names: {
        fontSize: 30,
        fontWeight: "bold",
        paddingLeft: 18,

    },
    types: {
        fontSize: 25,
        fontWeight: "200",
        paddingLeft: 18,
    },
    companies: {
        fontSize: 15,
        paddingLeft: 18,

    },
    logo: {
        width: 110,
        height: 80,
        position: "absolute",
        right: 0,
        margin: 10,
        bottom: 10,
    }

});

//make this component available to the app
export default Home;
