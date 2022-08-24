import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons';

import {Theme} from './../constants'

export default function MyHeader({navigation}) {
    function onPress() {
        console.log('ham pressed')
    }
    return (
        <View style={tw`bg-[${Theme.colors.primary}] h-21 flex-row`}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={tw`w-10 h-10 my-9 mx-3 p-2`}>
                <AntDesign name="menuunfold" size={26} color="white" />
            </TouchableOpacity>
            <View style={tw`h-8 my-10 mx-9 flex-row`}>
                <Image
                    source={require('../../assets/icon.png')}
                    style={tw`w-8 h-8 my-1 mx-1`}
                />
                <Text style={tw`text-4xl mx-2 text-white`}>
                    Alaska
                </Text>
            </View>
            <TouchableOpacity onPress={onPress} style={tw`mx-3 h-7 top-12`}>
                <AntDesign name="bells" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}