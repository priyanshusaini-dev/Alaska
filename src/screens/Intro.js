import AppIntroSlider from "react-native-app-intro-slider";
import { View, Text } from "react-native";
import tw from "twrnc";
import { Intro1, Intro2, Intro3 } from "../components";
import { Theme } from "../constants";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Intro({navigation}) {
  let colors = Theme.colors;
  const slides = [
    {
      key: "one",
      title: "Confirm Your Driver",
      text: "Huge delivery network. Helps you find comforable, safe and cheap ride.",
      image: <Intro1 />,
      backgroundColor: "#59b2ab",
    },
    {
      key: "two",
      title: "Request Ride",
      text: "Huge delivery network. Helps you find comforable, safe and cheap ride.",
      image: <Intro2 />,
      backgroundColor: "#febe29",
    },
    {
      key: "three",
      title: "Track Your Ride",
      image: <Intro3 />,
      text: "Huge delivery network. Helps you find comforable, safe and cheap ride.",
      backgroundColor: "#22bcb5",
    },
  ];

  _keyExtractor = (item) => item.key;

  const renderItem = ({ item }) => {
    return (
      <View style={tw`bg-[${colors.bg}] h-full w-full justify-between`}>
        <View style={tw`top-40`}>{item.image}</View>
        <View style={tw`bg-[${colors.primary}] h-55 bottom-0 rounded-t-6`}>
          <Text style={tw`text-white text-2xl text-center font-bold mt-6`}>{item.title}</Text>
          <Text style={tw`text-white text-[3.5] m-1 mx-7 opacity-70 text-center`}>{item.text}</Text>
        </View>
      </View>
    );
  };

  async function setAsyncStore() {
    try {
        await AsyncStorage.setItem('@showIntro', 'Drawer')
        navigation.navigate('SignIn');
      } catch (e) {
        console.warn(e)
      }
  }

  function renderNextButton() {
    return (
      <View style={tw`bg-white items-center rounded `}>
          <Text style={tw`text-center p-2 text-lg text-[${colors.special}] uppercase`}>NEXT</Text>
      </View>
    );
  }
  function renderDoneButton() {
    return (
      <View style={tw`bg-white items-center rounded `}>
          <Text style={tw`text-center p-2 text-lg text-[${colors.special}] uppercase`}>Let's Start</Text>
      </View>
    );
  }

  return (
    <View style={tw`h-full w-full bg-cyan-200`}>
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={()=>{setAsyncStore()}}
        bottomButton
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        // showSkipButton
        // showPrevButton
      />
      <StatusBar
        hidden={false}
        barStyle="light-content"
        keyExtractor={_keyExtractor}
        backgroundColor={colors.bg}
        animated={true}
      />
    </View>
  );
}
