import React from 'react';
import { View, Text } from 'react-native';

const Empolyee = propes => {
    const {firstName, lastName: lName, id: ID} = propes
    console.log(propes);

    return (
        <View>
            <Text>
               {ID}  Hi Mr. {firstName} {lName}
            </Text>
        </View>
    );
}

export default Empolyee;
