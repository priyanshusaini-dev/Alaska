import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';

import {Theme} from './../constants'

const HomeTiles = (props) => {
  return (
    <TouchableOpacity
     style={tw`w-33 h-33 pt-5 bg-[${Theme.colors.white}] rounded-lg m-4 justify-center items-center shadow-md`} 
    onPress={()=>{props.navigation.navigate(props.taskName)}}
    >
      <Ionicons name={props.icon} size={48} color={Theme.colors.primary} />
      <Text style={tw`text-xl m-2 text-[${Theme.colors.primary}] text-center`}>
        {props.taskName}
      </Text>
    </TouchableOpacity>
  );
}



export default HomeTiles;
