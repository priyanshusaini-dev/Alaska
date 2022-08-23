import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import tw from 'twrnc'
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import Svg, { Path } from 'react-native-svg';

// import {HomeTiles,WavyHeader,CarouselCards} from './../components';

const Home = () => {
    function onPress(){
        console.log('ham pressed')
    }
    return (
        <View>
            <View >
                <View style={tw`bg-[#19B5FE] h-24`}>
                    <TouchableOpacity
                            onPress={onPress}
                    >
                        <Feather style={styles.ham} name="bar-chart-2" size={32} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={tw`w-full`}>
                    <Svg xmlns="http://www.w3.org/2000/svg"
                        height="59.4%"
                        width="100%"
                        viewBox="0 66 1440 320"
                    >
                        <Path fill="#19B5FE" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,245.3C384,277,480,299,576,277.3C672,256,768,192,864,176C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></Path>
                    </Svg>
                </View>
            </View>
            <StatusBar hidden={false} />
        </View>
    );
}


export default Home;



const styles = StyleSheet.create({
    ham: {
        // // transform: [{ rotate: '90deg' }],
        // top:30,
        
        margin: 0.75
    }
})