import { View, Text, useWindowDimensions } from "react-native";
import tw from "twrnc";



export default function OnboardingItem({ item }) {
  const { width } = useWindowDimensions()
  return (
    <View style={{ ...tw`h-full`, width }}>
      <View style={{ ...tw`top-0 relative w-full h-[38.5]`, }}>{item.header}</View>
      <View style={{ ...tw`mx-2 items-center justify-center`, flex: 3, width }}>
        {item.svg}
      </View>
      <View style={{ flex: 2 }}>
        <Text style={{ ...tw`text-center font-bold text-lg`, fontFamily: "Poppins_700Bold", }}>{item.title}!!</Text>
        <Text style={{ ...tw`text-center text-sm mx-3 opacity-40`, fontFamily: "Poppins_500Medium", }}>{item.text}!!</Text>
      </View>
    </View>
  );
}
