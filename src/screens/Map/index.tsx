import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Config from "react-native-config";

const Map = () => {
    console.log( Config.REACT_NATIVE_GOOGLE_KEY );
    return (
        <View>
            <Text></Text>
        </View>
    );
};

export default Map;

const styles = StyleSheet.create( {} );
