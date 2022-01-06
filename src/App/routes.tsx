import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Map from '../screens/Map';

export type RootStackParamList = {
    Home: undefined;
    Map: undefined;
};
export const SwitchRouterNavigation = (): React.ReactElement => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={ { headerShown: false } }>
            <Stack.Screen name="Home" component={ Home } />
            <Stack.Screen key="Map" name="Map" component={ Map } />
        </Stack.Navigator>
    );
};
