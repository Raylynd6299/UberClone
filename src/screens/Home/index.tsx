import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from "tailwind-react-native-classnames";
import NavigationOptions from '../../components/NavigationOptions';

const Home = (): React.ReactElement => {
    return (
        <SafeAreaView style={ tw`bg-white h-full ` }>
            <View style={tw`p-5`}>
                <Image
                    style={ {
                        width: 100,
                        height: 100,
                        resizeMode: "contain"
                    } }
                    source={ {
                        uri: "https://links.papareact.com/gzs"
                    } }
                />
                <NavigationOptions/>
            </View>
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