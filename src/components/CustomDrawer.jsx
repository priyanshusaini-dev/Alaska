import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { auth } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";

import {Theme} from './../constants'

export default function CustomDrawer(props) {
  const navigation = useNavigation();

  function signOut(){
    auth
    .signOut()
    .then(()=>{
      navigation.replace("SignIn")
    })
    .catch(err=>alert(err.message))
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView contentContainerStyle={{ backgroundColor: Theme.colors.white }} {...props}>
        <ImageBackground source={require('../../assets/wall1.jpg')} style={{ padding: 20,top:-8 }}>

        <Image
          source={require('../../assets/cartoon2.jpg')}
          style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10,top:15 }}
        />
        <Text style={tw`text-white  text-5 mt-2`}>John Doe</Text>
        <View style={tw`flex-row`}>
          <FontAwesome5 name="coins" size={18} color="gold" />
          <Text style={tw`text-white mx-2`}>Coin:500</Text>
        </View>
        </ImageBackground>
        <View style={tw`flex-1 bg-white`}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={tw`px-4  border-t-2 border-[#ccc]`}>
        <TouchableOpacity onPress={() => { }} style={tw`py-3 my-2 flex-row`}>
          <Ionicons name="share-social-outline" size={24} color={Theme.colors.special} />
          <Text style={tw`text-[${Theme.colors.special}] px-2 font-semibold text-4`}> Tell a Friend</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { signOut()}} style={tw`pt-2 mb-3 flex-row`} >
          <Ionicons name="exit-outline" size={24} color={Theme.colors.special} />
          <Text style={tw`text-[${Theme.colors.special}] px-2 font-semibold text-4`}> Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}