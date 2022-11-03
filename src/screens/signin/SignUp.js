import {
  View,
  FlatList,
  Animated,
  StyleSheet,
  Text,
  useWindowDimensions,
  Image
} from "react-native";
import {
  SignUpItem,
  SignUpNextButton,
  OnboardingPaginator as SignUpPaginator,
  LogoRounded,
} from "../../components";
import tw from "twrnc";
import { useState, useRef } from "react";
import { signUpScreensData } from "../../constants";
import { StatusBar } from "expo-status-bar";
import DropShadow from "react-native-drop-shadow";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";

export default function SignUp({ navigation }) {
  const { height } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollEnable, setScrollEnable] = useState(false);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const getData =(data)=>{
  //  data.handleSubmit(onSubmit)
  console.log(data)
  }
  const onSubmit =(data)=>{
    console.log(data)
  }

  const submitForm =(data)=>{
    getData()
  }

  const scrollTo = async () => {
    submitForm()
    if (currentIndex < signUpScreensData.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("Last ");
    }
  };
  const scrollToIndex = (index) => {
    // if (currentIndex <= signUpScreensData.length - 1) {
    //   slideRef.current.scrollToIndex({ index });
    // }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={[{ ...tw`absolute justify-between h-full`, height }]}>
        <View style={tw``}></View>
        <DropShadow style={styles.shadow}>
          <Svg
            width={375}
            height={500}
            viewBox="0 0 375 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <G filter="url(#filter0_d_203_90)">
              <Path
                d="M5.722 111.5c140 12 227 35 375-73S369 603 369 603H-15S-134.278 99.5 5.722 111.5z"
                fill="url(#paint0_linear_203_90)"
              />
            </G>
            <Defs>
              <LinearGradient
                id="paint0_linear_203_90"
                x1={607}
                y1={848}
                x2={80.9999}
                y2={134}
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#6A81CA" />
                <Stop offset={1} stopColor="#A9E0F3" />
              </LinearGradient>
            </Defs>
          </Svg>
        </DropShadow>
      </View>
      <View style={tw`flex-row justify-between items-center my-5 mx-8`}>
        <Text style={[tw`text-9 `, styles.fontPoppinsBold]}>Alaska</Text>
        <LogoRounded />
      </View>
      <View style={tw`absolute w-full items-center h-full justify-between`}>
        <View></View>
        <Image
          source={require("../../../assets/img/login.png")}
          style={{ ...tw`w-65 h-65 bottom-82`, elevation: -1 }}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 3 }}>
        <FlatList
          data={signUpScreensData}
          renderItem={({ item }) => <SignUpItem item={item} onSubmit={onSubmit} getData={getData} />}
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          scrollEnabled={scrollEnable}
          onViewableItemsChanged={viewableItemsChanged}
          ref={slideRef}
        />
      </View>
      <StatusBar hidden={true} />
    </View>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  fontPoppinsBold: {
    fontFamily: "Poppins_700Bold",
  },
  fontNunitoBold: {
    fontFamily: "nunitoBold",
  },
  fontPoppinsMedium: {
    fontFamily: "Poppins_500Medium",
  },
});
