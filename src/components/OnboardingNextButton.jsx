import { View, Text, TouchableOpacity, Animated } from "react-native";
import React,{ useEffect, useRef } from "react";
import Svg ,{ Circle, G } from "react-native-svg";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";

const OnboardingNextButton = ({percentage,scrollTo}) => {
  const size = 90;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progressAnimation = useRef(new Animated.Value(0)).current
  const progressRef = useRef(null);

  const animation = (toValue)=>{
    return Animated.timing(progressAnimation,{
      toValue,
      duration:250,
      useNativeDriver:true
    }).start()
  }

  useEffect(() => {
    animation(percentage);
  }, [percentage])

  useEffect(() => {
    progressAnimation.addListener((value)=>{
      const strokeDashoffset=circumference-(circumference*value.value)/100;
      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset
        })
      }
    }, [percentage]
    )
    return ()=>{
      progressAnimation.removeAllListeners()
    }
  }, [])
  
  return (
    <View style={{ ...tw`items-center justify-center`, flex: 1 }}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke={"#e6e7e8"}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            />
          <Circle
            stroke={"#BC8EE9"}
            r={radius}
            cx={center}
            cy={center}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            ref={progressRef}
          />
        </G>
      </Svg>
      <TouchableOpacity style={tw`absolute bg-[#BC8EE9] rounded-full shadow-md p-4`} onPress={()=>scrollTo()}>
        <AntDesign name="arrowright" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingNextButton;
