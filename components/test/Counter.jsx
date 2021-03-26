import React, {useState} from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const Counter = () => {
    console.log("Counter Rendered");
    const initialState = 0;
    const [count, setcount] = useState(initialState)
    console.log(count);

    const incrementHandler = () => {
        setcount(() => count + 1 );
        console.log(count + " from increment");
    }


    return (
        <View>
            <Text>
                The Count is: {count} 
            </Text>
            <View style={styles.btn}>
                <Button
                    onPress={incrementHandler}
                    title="Increment"
                />
                <Button
                    onPress={() => {setcount( count - 1)}}
                    title="Decrement"
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    btn: {
        margin: 2,
        padding: 1,
        // flexDirection: 'rows'
    // alignItems: 'stretch',
    // justifyContent: 'space-evenly'
  
  }
})
  
export default Counter;