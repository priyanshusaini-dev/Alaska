import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawer } from "../components";
import { Account, Home, RideReq } from "../screens";
import { Theme } from "./../constants";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { marginLeft: -13, fontSize: 16 },
        drawerActiveBackgroundColor: Theme.colors.light,
        drawerActiveTintColor: Theme.colors.secondary,
        drawerInactiveTintColor: Theme.colors.primary,
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Request a Ride"
        component={RideReq}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="ios-add-circle-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="ios-person-outline" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
