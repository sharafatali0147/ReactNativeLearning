import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Landing({ navigation }) {
    return (
        <View style={{flex: 1, justifyContent: 'center' }}>
            <Text>
                <Button
                    title="Register"
                    onPress={() => navigation.navigat("Register")}
                />
                <Button
                    title="Login"
                    onPress={() => navigation.navigat("Login")}
                />
            </Text>
        </View>
    )
}
