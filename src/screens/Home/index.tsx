import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Home = (): React.ReactElement => {
    return (
        <SafeAreaView style = {style.container}>
            <Text style={{textAlign: "center"}}> I'm the Home screen</Text>
        </SafeAreaView>
    );
};

export default Home;

const style = StyleSheet.create( {
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    }
} );