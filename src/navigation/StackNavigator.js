import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignIn, SignUp,OnboardingScreen,SignInWelcome, MobileVerify, Otp } from "../screens";
import DrawerNavigator from "./DrawerNavigator";
import { useState, useEffect } from "react"
import { ActivityIndicator, View } from 'react-native';
import tw  from 'twrnc';
import {useFonts, Poppins_400Regular,Poppins_700Bold,Poppins_500Medium } from '@expo-google-fonts/poppins';



const Stack = createStackNavigator();


const StackNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [fontsLoaded] =  useFonts({ Poppins_400Regular,Poppins_700Bold ,Poppins_500Medium,'nunitoRegular': require('../../assets/fonts/Nunito-Regular.ttf'), 'nunitoBold': require('../../assets/fonts/Nunito-Bold.ttf'),})
  async function checkIfFirstLaunch() {
    try {
      const hasFirstLaunched = await AsyncStorage.getItem("@onboarding");
      if (hasFirstLaunched === null) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  async function getInfo() {
    const firstLaunch = await checkIfFirstLaunch();
    setIsFirstLaunch(firstLaunch);
  }
  useEffect(() => {
    getInfo();
  }, []);

  if(isFirstLaunch==null&&!fontsLoaded){
    return<View style={tw`justify-center items-center h-full`}>
      <ActivityIndicator size="large"/>
    </View>
  }


  return (
    isFirstLaunch != null && (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="OnboardingScreen"
      >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignInWelcome" component={SignInWelcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="MobileVerify" component={MobileVerify} />
        <Stack.Screen name="OtpScreen" component={Otp} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        {isFirstLaunch && <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />}
      </Stack.Navigator>
    )
  );
};

export default StackNavigator;
