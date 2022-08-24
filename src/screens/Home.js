import React from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc'
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import {TileData,Theme} from './../constants'
import { HomeTiles, WavyHeader,MyHeader} from './../components';

// console.log(TileData)

const Home = ({navigation}) => {
    
    return (
        <View>
            <MyHeader navigation={navigation}/>
            <WavyHeader navigation={navigation}/>
            <View>
                <Text style={tw`text-2xl text-[${Theme.colors.primary}] ml-8`}>
                    Hi, John Doe {'\n'}Where do you want to go?
                </Text>
            </View>
            <FlatList
                contentContainerStyle={tw`w-full items-center`}
                numColumns={2}
                data={TileData}
                renderItem={(i) => <HomeTiles icon={<Ionicons name={i.item.icon} size={48} color={'white'} />} taskName={i.item.taskName} />}
                keyExtractor={item => item.id}
            />
            <StatusBar hidden={false} barStyle="light-content" backgroundColor={Theme.colors.secondary} animated={true} />
        </View>
    );
}


export default Home

