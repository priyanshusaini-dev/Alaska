import React from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar';

import {TileData,Theme} from './../constants'
import { HomeTiles, WavyHeader,MyHeader} from './../components';

// console.log(TileData)

const Home = ({navigation}) => {
    
    return (
        <View style={tw`bg-[${Theme.colors.bg}] flex-1`}>
            <MyHeader navigation={navigation}/>
            <WavyHeader navigation={navigation}/>
            <View>
                <Text style={tw`text-2xl text-[${Theme.colors.special}] ml-8`}>
                    Hi, John Doe {'\n'}Where do you want to go?
                </Text>
            </View>
            <FlatList
                contentContainerStyle={tw`w-full items-center`}
                numColumns={2}
                data={TileData}
                renderItem={(i) => <HomeTiles icon={i.item.icon} taskName={i.item.taskName} navigation={navigation}/>}
                keyExtractor={item => item.id}
            />
            <StatusBar hidden={false} barStyle="light-content" backgroundColor={Theme.colors.primary_light} animated={true} />
        </View>
    );
}


export default Home

