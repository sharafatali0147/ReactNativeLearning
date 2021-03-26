import React from 'react';
import { View, Text, } from 'react-native';

const EmployeeInfo = [
    {
        fName: "Ali",
        lName: "Raza",
        age: "30",
        address: {
            street: "abc",
            city: "def",
            country: "pakistan",
            nestedObj: {
                nesObj: "nestedObj",
                nesObj1: "nestedObj1"
            }
        }
    }

]

const Destructuring = propes => {
    const {
        fName: firstName,
        lName, age,
        address: {
            street,
            city,
            country,
            nestedObj: {
                nesObj,
                nesObj1
            }
        }
    } = EmployeeInfo;
    
    return (
        <View>
            <Text>
                {firstName, lName}
            </Text>
        </View>
    )
}

export default Destructuring;