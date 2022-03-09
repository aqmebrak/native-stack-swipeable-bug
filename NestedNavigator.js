import React from 'react';
import NestedScreen from './NestedScreen';
import {createStackNavigator} from "@react-navigation/stack";
// import {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function NestedNavigator() {
    const Stack = createStackNavigator();
    // const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="nestedNav.firstScreen" component={NestedScreen}/>
        </Stack.Navigator>
    );
}
