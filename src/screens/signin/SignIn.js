import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import DropShadow from "react-native-drop-shadow";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { LogoRounded, MyButton } from "../../components";
import { HideKeyboard, CustomInput } from "../../components";
import { StatusBar } from "expo-status-bar";
import { Theme } from "../../constants";
import { useForm } from "react-hook-form";
import auth from "@react-native-firebase/auth";

const EMAIL_REGEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASS_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const SignIn = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const { colors } = Theme;

  // Handle user state changes=================>
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      // dispatch(setUser(user));
      // console.log(user);
      // if (initializing) setInitializing(false);
      if (user) {
        navigation.navigate("Drawer", { screen: "Home" });
      }
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  // setting react form hook>>==================>>
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // LOGIN WITH EMAIL=====================>>
  const onSubmit = (data) => {
    const { email, password } = data;
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        // console.log(user);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <HideKeyboard>
      <SafeAreaView style={{ ...tw`h-full`, height }}>
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
        <View
          style={{
            ...tw`w-full items-center absolute border-2 justify-between`,
            height,
          }}
        >
          <View style={tw``}></View>
          <View style={{ ...tw` w-full`, height: 370 }}>
            <Text
              style={[tw`text-center text-8 underline`, styles.fontNunitoBold]}
            >
              Sign In
            </Text>
            <View style={tw` mx-5`}>
              <Text style={tw`text-4 uppercase mt-4 ml-1`}>E-mail</Text>
              <CustomInput
                control={control}
                errors={errors.email}
                inputfeild={{
                  rules: {
                    required: true,
                    pattern: {
                      value: EMAIL_REGEX,
                      message: "Invalid Email",
                    },
                  },
                  name: "email",
                  autoComplete: "email",
                  keyboardType: "email-address",
                  placeholder: "E-mail",
                  secureTextEntry: false,
                }}
              />
              {errors.email && (
                <Text style={tw`text-[#f08a83] text-3 ml-1`}>
                  {errors.email.message || "*E-mail is required."}
                </Text>
              )}
              <Text style={tw`text-4 uppercase mt-2 ml-1`}>Password</Text>

              <CustomInput
                control={control}
                errors={errors.password}
                inputfeild={{
                  rules: {
                    required: true,
                    pattern: {
                      value: PASS_REGEX,
                      message:
                        "Password must have min 8 and max 18 characters, with at least a symbol,a upper and a lower case characters and a number",
                    },
                  },
                  name: "password",
                  autoComplete: "password",
                  keyboardType: "default",
                  placeholder: "Password",
                  secureTextEntry: true,
                }}
              />
              {errors.password && (
                <Text style={tw`text-[#f08a83] text-3 ml-1`}>
                  {errors.password.message || "*Password is required."}
                </Text>
              )}

              <View>
                <TouchableOpacity style={tw`self-end`}>
                  <Text style={tw`text-white`}>Forgot Password ? </Text>
                </TouchableOpacity>
              </View>
              <MyButton
                pink
                style={tw`mx-1 mt-4 mb-5`}
                onPress={handleSubmit(onSubmit)}
                textStyle={tw`text-white`}
              >
                Sign In
              </MyButton>
              <MyButton
                green
                style={tw`mx-1`}
                onPress={() => navigation.navigate("SignUp")}
                textStyle={tw`text-white`}
              >
                Sign Up
              </MyButton>
            </View>
          </View>
        </View>
        <StatusBar
          hidden={false}
          barStyle="light-content"
          backgroundColor="#DCECF6"
          animated={true}
        />
      </SafeAreaView>
    </HideKeyboard>
  );
};

export default SignIn;
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
