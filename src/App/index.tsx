import React from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';


const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={style.container}>
            <Text style={{textAlign: "center"}}>
                Lets build a Uber
            </Text>
        </View>
    );
};

const style = StyleSheet.create( {
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    }
} );

export default App;
