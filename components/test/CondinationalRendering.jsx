import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import UseEffectLifeCycle from '../componentLifieCycle/UseEffectLifeCycle';
import Weath from '../weather-App/Weath';


const CondinationalRendering = propes => {
    const [loggedIn, setLoggedIn] = useState(false);

    console.log(loggedIn);

    return (
        <View>
            <Text>Helllo from CondinationalRendering</Text>

            <Button
                onPress={() => setLoggedIn(!loggedIn)}
                title={ loggedIn ? "Log out" : "Log in"}
            />
            
            {loggedIn ? (
                <View>
                    <Text>Hello Sharafat Ali</Text>
                    
                    <Weath />
                    {/* <UseEffectLifeCycle /> */}
               </View>

            ) : (
                    <View>
                        <Text>Please log in to countinue </Text>
                        
                   </View>
            )}

        </View>
    );
}

export default CondinationalRendering;