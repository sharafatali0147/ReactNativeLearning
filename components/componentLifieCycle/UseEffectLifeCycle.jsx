import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const UseEffectLifeCycle = propes => {
    const initialState = 0;
    const [counter, setCounter] = useState(initialState);

    // console.log("counter val : " + counter);

    useEffect(() => {

        // console.log("useEffect just like componentDidMount ");

        // setInterval(() => setCounter(counter + 1), 1000);
 
        return () => {
            // console.log("useEffect from cleanUp just like componentWillUnmount");
            // cleanup
        }
    }, [counter])

    return (
        <View style={StyleSheet.view} >
            <Text>counter value is: {counter} </Text>
            <Button title="Increment" onPress={() => setCounter(counter + 1)} />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        fontSize: 25,
        margin: 20,
    }
})

export default UseEffectLifeCycle;
