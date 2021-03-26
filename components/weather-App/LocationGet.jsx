import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location'

const LocationGet = propes => {
    const { errorMsg, setErrorMsg } = useState(null);
    const { location, setLocation } = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
        })();
        return () => {
            // cleanup
        }
    }, [])

    return (
        <View>
            <Text>
                adt
            </Text>
        </View>
    );
}

export default LocationGet;