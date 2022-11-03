import { View, Text, TouchableOpacity, useWindowDimensions, Animated } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const AnimatedTouchable= Animated.createAnimatedComponent(TouchableOpacity)
const OnboardingPaginator = ({ data, scrollX,scrollToIndex }) => {
  const {width}= useWindowDimensions();
    return (
        <View style={tw`flex-row justify-center mx-7`}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                })
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.4, 1, 0.4],
                    extrapolate: 'clamp',
                })
                // console.log(_.color)
                return <AnimatedTouchable key={i.toString()} onPress={()=>scrollToIndex(i)} style={{ ...tw`border border-[${_.color.main}] m-1 p-1 rounded-full`,opacity, }}>
                    <Animated.View style={{ ...tw`bg-[${_.color.candy}] rounded-full`, height: 10, width: dotWidth }} />
                </AnimatedTouchable>
            })}
        </View>
    )
}

export default OnboardingPaginator