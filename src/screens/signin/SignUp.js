import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  Image,
} from "react-native";
import { CustomInput, HideKeyboard, LogoRounded, MyButton } from "../../components";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
import DropShadow from "react-native-drop-shadow";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";


const EMAIL_REGEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


export default function SignUp({ navigation }) {
  const { height, width } = useWindowDimensions();

  // react hook form=====>
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

  // get form data=====================>>
  const onSubmit = (data) => {
    const userData= data;
    // console.warn(name, email);
    navigation.navigate("MobileVerify",
    {userData}
    )
  };

  return (
    <HideKeyboard>
      <SafeAreaView style={{ height }}>
        {/* background svg */}
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
        {/* branding */}
        <View style={tw`flex-row justify-between items-center my-5 mx-8`}>
          <Text style={[tw`text-9 mx-1`, styles.fontPoppinsBold]}>Alaska</Text>
          <LogoRounded />
        </View>
        {/* background hello image */}
        <View style={tw`absolute w-full items-center h-full justify-between`}>
          <View></View>
          <Image
            source={require("../../../assets/img/login.png")}
            style={{ ...tw`w-65 h-65 bottom-82`, elevation: -1 }}
            resizeMode="contain"
          />
        </View>

        {/* form begin here~~~~~~~=====>> */}
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
              Sign Up
            </Text>
            <View style={tw` mx-5`}>
              <Text style={tw`text-4 uppercase mt-4 ml-1`}>Name</Text>
              <CustomInput
                color="green"
                control={control}
                errors={errors.name}
                inputfeild={{
                  rules: {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                    maxLength: {
                      value: 28,
                      message: "Username must be at most 28 characters",
                    },
                  },
                  name: "name",
                  autoComplete: "name",
                  keyboardType: "default",
                  placeholder: "Name",
                  secureTextEntry: false,
                }}
              />
              <Text style={tw`text-4 uppercase mt-4 ml-1`}>E-mail</Text>
              <CustomInput
                color="green"
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
              <MyButton
                green
                style={tw`mx-1 mt-4 mb-2`}
                onPress={handleSubmit(onSubmit)}
                textStyle={tw`text-white`}
              >
                Next
              </MyButton>
              <View style={{ ...tw`bg-black h-[0.2] my-2 mb-3 opacity-50`, }}></View>
              <MyButton
                pink
                style={tw`mx-1`}
                onPress={() => navigation.navigate("SignIn")}
                textStyle={tw`text-white`}
              >
                Sign In
              </MyButton>
            </View>
          </View>
        </View>
        {/* <StatusBar hidden={true} /> */}
      </SafeAreaView>
    </HideKeyboard>

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
