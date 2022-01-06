import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { store } from "../store";
import { SwitchRouterNavigation } from './routes';

const App = () => {

    return (
        <Provider store={ store }>
            <NavigationContainer>
                <SafeAreaProvider>
                    <SwitchRouterNavigation />
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
