import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Svg, { Path } from "react-native-svg"
import DropShadow from "react-native-drop-shadow";


export default function LogoRounded(props) {
    return (
        <DropShadow style={styles.shadow}>
            <View style={tw`w-13 h-13 bg-gray-800 rounded-full border-4 p-1 `}>
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 300 300"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    {...props}
                >
                    <Path
                        d="M25 259.184c105.808-49.887 120.487-60.917 168.101-83.366 0 0-106.686 76.814 81.899 83.366L152.116 42.674"
                        fill="#fff"
                        strokeWidth={0.6}
                    />
                </Svg>
            </View>
        </DropShadow>
    )
}
const styles = StyleSheet.create({

    shadow: {
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowOffset: {
        width: 0,
        height:2,
      },
      shadowOpacity: 0.4,
      shadowRadius: 4,
    },
  });