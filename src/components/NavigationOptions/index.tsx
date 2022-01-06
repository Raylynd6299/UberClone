import React from 'react';
import { FlatList, Image, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native';
import tw from "tailwind-react-native-classnames";
import { ArrowRight } from "../icons";
import { RootStackParamList } from "../../App/routes";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

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
        screen: "Map",
    },
    {
        id: 456,
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "Eats",
    }
];


const NavigationOptions = (): React.ReactElement => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <FlatList
            data={ RoutesData }
            horizontal
            keyExtractor={ ( routeOption: RouteType, index: number ) => String( routeOption.id ) }
            renderItem={ ( { index, item: { id, title, image, screen } }: ListRenderItemInfo<RouteType> ) => (
                <TouchableOpacity
                    style={ tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40` }
                    onPress={ () => navigation.navigate( "Map" ) }
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
                    <View
                        style={ tw`p-2 bg-black rounded-full w-10 mt-4` }
                    >
                        <ArrowRight
                            fill={ "white" }
                        />
                    </View>


                </TouchableOpacity>
            ) }
        />
    );
};

export default NavigationOptions;
