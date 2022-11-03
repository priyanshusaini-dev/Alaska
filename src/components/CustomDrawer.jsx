import {View,Text,ImageBackground,Image,TouchableOpacity,} from "react-native";
import { useState ,useEffect} from "react";
import {DrawerContentScrollView,DrawerItemList,} from "@react-navigation/drawer";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";
// import UserAvatar from 'react-native-user-avatar';

import { useNavigation } from "@react-navigation/native";

import { Theme } from "./../constants";

export default function CustomDrawer(props) {
  const navigation = useNavigation();
 const [user,setUser]=useState({
name:"John Doe"
 })
  function signOut() {
    auth()
      .signOut()
      .then(() => {
        navigation.replace("SignIn");
      })
      .catch((err) => alert(err.message));
  }

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      }
    });

    return unsubscribe;
  }, []);



  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        contentContainerStyle={{ backgroundColor: Theme.colors.white }}
        {...props}
      >
        <ImageBackground
          source={require("../../assets/wall1.jpg")}
          style={{ padding: 20, top: -8 }}
        >
          {/* <UserAvatar size={100} name={user.displayName} src={user.photoURL}/> */}
          <Text style={tw`text-white text-5 mt-2`}>{user.displayName}</Text>
          <View style={tw`flex-row`}>
            <FontAwesome5 name="coins" size={18} color="gold" />
            <Text style={tw`text-white mx-2`}>Coin:500</Text>
          </View>
        </ImageBackground>
        <View style={tw`flex-1 bg-white`}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={tw`px-4  border-t-2 border-[#ccc]`}>
        <TouchableOpacity onPress={() => {}} style={tw`py-3 my-2 flex-row`}>
          <Ionicons
            name="share-social-outline"
            size={24}
            color={Theme.colors.special}
          />
          <Text
            style={tw`text-[${Theme.colors.special}] px-2 font-semibold text-4`}
          >
            {" "}
            Tell a Friend
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            signOut();
          }}
          style={tw`pt-2 mb-3 flex-row`}
        >
          <Ionicons
            name="exit-outline"
            size={24}
            color={Theme.colors.special}
          />
          <Text
            style={tw`text-[${Theme.colors.special}] px-2 font-semibold text-4`}
          >
            {" "}
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
