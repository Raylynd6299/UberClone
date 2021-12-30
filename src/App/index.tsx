import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from "../store";
import Home from "../screens/Home";

const App = () => {

    return (
        <Provider store={ store }>
            <SafeAreaProvider>
                <Home />
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
