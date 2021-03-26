import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


import LandingScreen from './components/auth/Landing';
import CondinationalRendering from './components/test/CondinationalRendering';
import Counter from './components/test/Counter';
import Empolyee from './components/test/Empolyee';
import Spread1 from './components/test/Spread';



// const Stack = createStackNavigator();
const EmpolyeeData = [
  {
    id: 1,
    firstName: 'jack',
    lastName: 'Smith'
  },
  {
    id: 2,
    firstName: 'jack',
    lastName: 'Ali'
  },
  {
    id: 3,
    firstName: 'Ali',
    lastName: 'Smith'
  },
  {
    id: 4,
    firstName: 'Sharafat',
    lastName: 'Ali'
  },
  {
    id: 5,
    firstName: 'jack',
    lastName: 'Smith'
  },
  {
    id: 6,
    firstName: 'jack',
    lastName: 'Smith'
  },
  {
    id: 7,
    firstName: 'jack',
    lastName: 'Smith'
  },
  {
    id: 8,
    firstName: 'jack',
    lastName: 'Smith'
  },
];

export default function App() {

  console.log("Main App Rendered");
  return (
    <View style={styles.screen} >

     
      {EmpolyeeData.map(empObj => <Empolyee {...empObj} />)}
      


  
      <CondinationalRendering />

      
      {/* <Spread1 /> */}
      

      {/* {
        EmpolyeeData.map(empolyee => {
          const { id, firstName, lastName } = empolyee;
          
          return (
            <Empolyee id={id} firstName={firstName} lastName={ lastName}/>
          )
        })
      } */}


      {/* <Empolyee firstName={"Sharafat "} lastName={"Ali"} />
      <Empolyee firstName={"Sharafat "} lastName={"Ali"} />
      <Empolyee firstName={"Sharafat "} lastName={"Ali"} />
      <Empolyee firstName={"Sharafat "} lastName={ "Ali"}/> */}
      {/* <Counter /> */}
      {/* <Landing/> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  
  }
})
