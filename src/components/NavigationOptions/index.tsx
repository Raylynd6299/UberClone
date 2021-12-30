import React from 'react';
import { FlatList, Image, ListRenderItem, ListRenderItemInfo, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from "tailwind-react-native-classnames";

type RouteType = {
    id: number;
    title: string;
    image: string;
    screen: string;
};

const RoutesData: RouteType[] = [
    {
        id: 123,
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: 456,
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    }
];


const NavigationOptions = (): React.ReactElement => {
    return (
        <FlatList
            data={ RoutesData }
            horizontal
            keyExtractor={ ( routeOption: RouteType, index: number ) => String( routeOption.id ) }
            renderItem={ ( { index, item: { id, title, image, screen } }: ListRenderItemInfo<RouteType> ) => (
                <TouchableOpacity
                    style={ tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40` }
                >
                    <View>
                        <Image
                            style={ { width: 120, height: 120, resizeMode: "contain" } }
                            source={ {
                                uri: image
                            } }
                        />
                        <Text style={ tw` mt-2 text-lg font-semibold` }>{ title }</Text>
                    </View>
                    <Icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowright"
                        color="white"
                        type="antdesign" tvParallaxProperties={ undefined } />
                </TouchableOpacity>
            ) }
        />
    );
};

export default NavigationOptions;

const styles = StyleSheet.create( {} );
