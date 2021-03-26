import React from 'react';
import { View, Text } from 'react-native'

const Spread = props => {
    const arr1 = [0, 1, 2, 3, 4];
    const arr2 = [5, 6, 7, 8, 9];

    console.log(arr1);
    console.log(arr2);

    const arr3 = [arr1, arr2]
    console.log(arr3);

    const arr4 = [...arr1, ...arr2]
    console.log(arr4);


    
    return (
        <View>
            <Text>

            </Text>
        </View>
    );
}


export default Spread;