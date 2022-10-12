import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Intro, SignIn, SignUp } from "../screens";
import DrawerNavigator from "./DrawerNavigator";
import { useState, useEffect } from "react"

const Stack = createStackNavigator();


const StackNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  async function checkIfFirstLaunch() {
    try {
      const hasFirstLaunched = await AsyncStorage.getItem("@showIntro");
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


  return (
    isFirstLaunch != null && (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Intro"
      >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        {isFirstLaunch && <Stack.Screen name="Intro" component={Intro} />}
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
      </Stack.Navigator>
    )
  );
};

export default StackNavigator;
