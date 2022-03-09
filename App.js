import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NestedNavigator from "./NestedNavigator";

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title={"navigate"} onPress={() => {
                navigation.navigate('nestedNav')
            }}/>
        </View>
    );
}

const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="nestedNav" component={NestedNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;