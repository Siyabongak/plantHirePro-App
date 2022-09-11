//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import MachineList from './MachineList';
import Loader from '../Loader';
import Carousel from 'react-native-snap-carousel';

// create a component
const Details = ({navigation}) => {
    const companies = MachineList
    let refCarousel = null
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation(location);
        })();
    }, []);

    const RenderMarker = () => {
        return (
            <View>
                {
                    companies.map((marker, index) => {
                        return (
                            <Marker
                                key={index}
                                coordinate={{ latitude: marker.coords['latitude'], longitude: marker.coords['longitude'] }}
                                title={marker.name}
                            />

                        )

                    })
                }
            </View>




        )
    }

    const renderCard = ({ item, index }) => {
        return (
            <View style={{ backgroundColor: "white", borderRadius: 15, }} >
                <Text style={{ margin: 3, fontsize: 10, fontWeight: "bold", paddingStart: 5 }}>
                    {item.name}
                </Text>
                <Text style={{ margin: 3, fontWeight: "300", paddingStart: 5, }}>
                    {item.type}
                </Text>
                <Text style={{ margin: 3, fontWeight: "500", paddingStart: 5, }}>
                    {item.company}
                </Text>
                <Text style={{ margin: 3, fontWeight: "300", paddingStart: 5, }}>
                    {item.rate}
                </Text>
                <Text style={{ margin: 3, fontWeight: "300", paddingStart: 5, }}>
                    {item.hours}
                </Text>
                <Text style={{ margin: 3, fontWeight: "300", paddingStart: 5, }}>
                    {item.contact}
                </Text>
                <Image style={styles.pic}  source={item.Image}/>
                
                
            </View>
        )
    }


    return (
        <View style={styles.container}>
            {companies != null

                ? <View>
                    <MapView style={styles.map}
                        initialRegion={{
                            latitude: -28.0642775,
                            longitude: 29.97857,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        showsUserLocation={true}
                    >
                        <RenderMarker />
                    </MapView>

                    <Carousel
                        ref={(c) => { refCarousel = c; }}
                        data={companies}
                        renderItem={renderCard}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={300}
                        containerCustomStyle={styles.carousel}
                    />

                </View>


                : <Loader />

            }

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    carousel: {
        position: 'absolute',
        bottom: 0,
        height: Dimensions.get('window').height / 3,
    },
    button: {
        margin: 3,
        fontWeight: "300",
        paddingStart: 5,
        paddingBottom: 5,
        backgroundColor:"#34515e",
        width:40,
        borderRadius: 20,
        
    },
    pic: {
        width: 110,
        height: 80,
        position: "absolute",
        right: 0,
        margin: 10,
        bottom: 10,
    }

});

//make this component available to the app
export default Details;
