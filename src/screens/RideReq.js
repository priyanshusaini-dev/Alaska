import { View, Text, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { GOOGLE_API_KEY } from "@env"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


import { Theme } from './../constants'
import { MyHeader } from '../components';

export default function RideReq({ navigation }) {

  return (
    <View style={tw`bg-[${Theme.colors.primary}] flex-1`}>
      <MyHeader navigation={navigation} />
      <View style={tw`bg-[${Theme.colors.bg}] flex-1 mt-10 rounded-t-[8]`}>
        <View style={tw`rounded-lg top-8 bg-white mx-5 shadow-md flex-row items-center my-3 mt-6`}>
          <FontAwesome5 name="search-location" size={22} color={Theme.colors.special} style={tw`mx-2`} />
          <Text style={tw`text-slate-300 text-lg`}>|</Text>
          <GooglePlacesAutocomplete


            placeholder="Where From?"
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            query={{
              key: GOOGLE_API_KEY,
              language: 'en',
            }}
          />
          <AntDesign name="plus" size={24} color={Theme.colors.secondary} style={tw`mx-2`} />
        </View>
        <View style={tw`rounded-lg top-8 bg-white mx-5 shadow-md flex-row items-center my-3`}>
          <FontAwesome name="location-arrow" size={24} color={Theme.colors.special} style={tw`mx-2`} />
          <Text style={tw`text-slate-300 text-lg`}>|</Text>
          <TextInput
            style={tw`h-11 flex-1 px-2`}
            // onChangeText={onChangeNumber}
            value={''}
            placeholder="Where to go"
            keyboardType="text"
          />
        </View>
      </View>
    </View>
  )
}