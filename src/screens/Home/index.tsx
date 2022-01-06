import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInputBase, ListViewComponent } from 'react-native';
import tw from "tailwind-react-native-classnames";
import NavigationOptions from '../../components/NavigationOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Config from "react-native-config";

const Home = (): React.ReactElement => {

    const GOOGLE_API_KEY = Config.REACT_NATIVE_GOOGLE_KEY;

    return (
        <SafeAreaView style={ tw`bg-white h-full ` }>
            <View style={ tw`p-5` }>
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
                <GooglePlacesAutocomplete
                    styles={ {
                        container: {
                            flex: 0
                        },
                        textInput: {
                            fontSize: 18
                        }
                    } }
                    query={ {
                        key: GOOGLE_API_KEY,
                        language: "es",
                    } }
                    debounce={ 40 }
                    placeholder='Where from?'
                    nearbyPlacesAPI="GooglePlacesSearch"

                />
                <NavigationOptions />
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