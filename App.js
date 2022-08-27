// import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { useFonts } from "expo-font";
import { Ionicons } from '@expo/vector-icons';

import {Theme} from './src/constants'
import {Home,RideReq,Account} from './src/screens';
import {CustomDrawer} from './src/components'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

// const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();


export default function App() {
  // const [loaded] = useFonts({
  //   InterBold: require("./assets/fonts/Inter-Bold.ttf"),
  //   InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  //   InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
  //   InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
  //   InterLight: require("./assets/fonts/Inter-Light.ttf"),
  // });
  const loaded = true;
  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={
        {
          headerShown: false,
          drawerLabelStyle: { marginLeft: -13, fontSize: 16 },
          drawerActiveBackgroundColor: Theme.colors.light,
          drawerActiveTintColor: Theme.colors.secondary,
          drawerInactiveTintColor: Theme.colors.primary,
        }} initialRouteName="Request a Ride">

        <Drawer.Screen name="Home" component={Home} options={{
          drawerIcon: ({ color }) => (<Ionicons name="home-outline" size={24} color={color} />)
        }} />
        <Drawer.Screen name="Request a Ride" component={RideReq} options={{
          drawerIcon: ({ color }) => (<Ionicons name="ios-add-circle-outline" size={24} color={color} />)
        }} />
        <Drawer.Screen name="Account" component={Account} options={{
          drawerIcon: ({ color }) => (<Ionicons name="ios-person-outline" size={24} color={color} />)
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


