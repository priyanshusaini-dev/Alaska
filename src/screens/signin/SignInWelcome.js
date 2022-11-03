import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
// import { LogoRounded } from "../../svg";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";
import DropShadow from "react-native-drop-shadow";
import { StatusBar } from "expo-status-bar";
import { LogoRounded, MyButton } from "../../components";
import { FontAwesome5 } from "@expo/vector-icons";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const SignInWelcome = ({navigation}) => {
  GoogleSignin.configure({
    webClientId:
      "250514128771-8lnec1t1v1fanc4a8644aoct215qd36t.apps.googleusercontent.com",
  });
  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in
      .then((user) => {
        // setUser(user)
        // navigation.replace("Drawer");
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <View style={tw`h-full`}>
      <View style={[tw`absolute`]}>
        <DropShadow style={styles.shadow}>
          <Svg
            width={375}
            height={429}
            viewBox="0 0 375 429"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <G filter="url(#filter0_d_203_49)">
              <Path
                d="M376.778 306c-140-12-227-35-375 73s0-379 0-379h375s140 318 0 306z"
                fill="url(#paint0_linear_203_49)"
              />
            </G>
            <Defs>
              <LinearGradient
                id="paint0_linear_203_49"
                x1={-230.222}
                y1={-248}
                x2={295.778}
                y2={466}
                gradientUnits="userSpaceOnUse"
              >
                <Stop stopColor="#6A81CA" />
                <Stop offset={1} stopColor="#A9E0F3" />
              </LinearGradient>
            </Defs>
          </Svg>
        </DropShadow>
      </View>
      <View style={tw`justify-between h-full`}>
        <View style={[tw``]}>
          <View style={tw`flex-row justify-between items-center my-10 mx-8`}>
            <Text style={[tw`text-9 `, styles.fontPoppinsBold]}>Alaska</Text>
            <LogoRounded />
          </View>
          <Text style={[tw`text-10 text-center mx-7`, styles.fontPoppinsBold]}>
            Welcome to Alaska
          </Text>
        </View>
        <View style={tw`mb-7`}>
          <MyButton onPress={()=>navigation.navigate("SignIn")} blue>Sign In</MyButton>
          <MyButton onPress={()=>navigation.navigate("SignUp")} green>Sign Up</MyButton>
          <Text style={[tw`text-center text-4`, styles.fontPoppinsMedium]}>
            OR
          </Text>
          <MyButton
          onPress={()=>onGoogleButtonPress()}
            textStyle={tw`text-4`}
            red
            icon={
              <FontAwesome5
                name="google-plus-g"
                size={24}
                style={tw`mx-2`}
                color="black"
              />
            }
          >
            SignIn With Google
          </MyButton>
        </View>
      </View>
      <StatusBar />
    </View>
  );
};

export default SignInWelcome;

const styles = StyleSheet.create({
  rotate: {
    transform: [{ rotate: "180deg" }],
  },
  shadow: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  buttonShadow: {
    shadowColor: "#84C0DF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
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
