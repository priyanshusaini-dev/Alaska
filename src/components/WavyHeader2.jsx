import React from 'react';
import { View, Text ,TouchableOpacity,Image} from 'react-native';
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons';

export default function WavyHeader() {
  function onPress() {
    console.log('ham pressed')
}
  return (
    <>
    <View style={tw`bg-[#] h-40 flex-row`}>
                <TouchableOpacity onPress={onPress} style={tw`w-10 h-10 my-9 mx-3 p-2`}>
                <AntDesign name="menuunfold" size={26} color="white" />
                </TouchableOpacity>
                <View style={tw`h-8 my-9 mx-15`}>
                    <Text style={tw`text-4xl text-white`}>
                        Alaska
                    </Text>
                </View>
                <TouchableOpacity onPress={onPress} style={tw`my-11 mx-3`}>
                <AntDesign name="bells" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <Image
                source={require('../../assets/wave.png')}
                style={{ width: null, height: 80 }}
            />
    </>
  );
}