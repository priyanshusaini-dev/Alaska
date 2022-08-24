import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import tw from 'twrnc'

import {Theme} from './../constants'

const HomeTiles = (props) => {
  return (
    <TouchableOpacity style={tw`w-33 h-33 pt-5 bg-[${Theme.colors.secondary}] rounded-lg m-4 justify-center items-center shadow-lg`}>
      {props.icon}
      <Text style={tw`text-xl m-2 text-white`}>
        {props.taskName}
      </Text>
    </TouchableOpacity>
  );
}



export default HomeTiles;
