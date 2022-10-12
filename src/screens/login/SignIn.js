import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Theme } from "../../constants";
import { auth } from "../../config/firebase";
import { HideKeyboard } from "../../components";
import { FontAwesome } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { StatusBar } from "expo-status-bar";
import {  useEffect } from "react"
// import {logInAsync} from 'expo-google-app-auth';
// import {logInAsync} from 'expo-google-sign-in';
// import * as GoogleSignIn from 'expo-google-sign-in';
// import * as GoogleSignIn from 'expo-google-sign-in';


const EMAIL_REGEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASS_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const SignIn = ({ navigation }) => {
  const { colors } = Theme;

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
  const onSubmit = (data) => {
    const {email,password}=data;
    auth
      .signInWithEmailAndPassword(email,password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((err) => alert(err.message));
  };

  async function signInWithGoogleAsync() {
    // console.warn("hj")
    // try {
    //   const result = await logInAsync({
    //     behavior:'web',
    //     androidClientId: "21106027430-j6cp6vcinpot75c9p5pipukneotsa920.apps.googleusercontent.com",
    //     // iosClientId: YOUR_CLIENT_ID_HERE,
    //     scopes: ['profile', 'email'],
    //   });
  
    //   if (result.type === 'success') {
    //     return result.accessToken;
    //   } else {
    //     return { cancelled: true };
    //   }
    // } catch (e) {
    //   return { error: true };
    // }
    
  }
  



  useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged(user=>{
       if(user){
         navigation.replace ("Drawer")
       }
     })   
     return unsubscribe
   },[])

  return (
    <HideKeyboard>
      {/* <Scro */}
      <SafeAreaView
        style={tw`bg-[${colors.primary_light}] h-full justify-between`}
      >
        <View>
          <View
            style={tw`bg-[${colors.primary_light2}] h-14 rounded-b-6 absolute left-0 right-0`}
          ></View>
          <View style={tw`m-3 mt-[25] mx-6`}>
            <Text style={tw`text-[${colors.white}] text-6 font-bold mt-3`}>
              Let's Get Started
            </Text>
            <Text style={tw`text-[${colors.white}] text-4 uppercase mt-4`}>
              E-mail
            </Text>
            <Controller
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: EMAIL_REGEX,
                  message: "Invalid Email",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  style={tw`border border-[${
                    errors.email ? "#ff1303" : colors.light
                  }] mt-1 h-11 p-3 rounded text-white bg-[${colors.primary}]`}
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoComplete="email"
                  clearButtonMode="while-editing"
                  cursorColor="#fff"
                  placeholderTextColor={colors.secondary_light}
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={tw`text-red-500 text-3`}>
                {errors.email.message || "*E-mail is required."}
              </Text>
            )}
            <Text style={tw`text-[${colors.white}] text-4 uppercase mt-2`}>
              Password
            </Text>
            <Controller
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: PASS_REGEX,
                  message:
                    "Password must have min 8 and max 18 characters, with at least a symbol,a upper and a lower case characters and a number",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  style={tw`border border-[${
                    errors.password ? "#ff1303" : colors.light
                  }] mt-1 h-11 p-3 rounded text-white bg-[${colors.primary}]`}
                  placeholder="Password"
                  cursorColor="#fff"
                  secureTextEntry={true}
                  placeholderTextColor={colors.secondary_light}
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text style={tw`text-red-500 text-3`}>
                {errors.password.message || "*Password is required."}
              </Text>
            )}

            <View>
              <TouchableOpacity style={tw`self-end`}>
                <Text style={tw`text-white`}>Forgot Password ? </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={tw`bg-[${colors.white}] rounded p-[10] mt-4`}
              onPress={handleSubmit(onSubmit)}
            >
              <Text
                style={tw`text-center text-4 uppercase font-bold text-[${colors.primary}]`}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tw`bg-[${colors.white}] rounded-t-6 px-6`}>
          <Text
            style={tw`text-center text-[${colors.primary}] my-3 uppercase `}
          >
            Create an account?
          </Text>
          <TouchableOpacity
            style={tw`border border-[${colors.light}] bg-[${colors.bg}] rounded mt-1`}
            onPress={(e) => navigation.replace("SignUp")}
          >
            <Text
              style={tw`text-center text-[${colors.primary}] bg-[${colors.bg}] my-[10] text-4 uppercase font-bold`}
            >
              SIGN UP
            </Text>
          </TouchableOpacity>
          <Text style={tw`text-center text-[${colors.primary}] m-1`}>OR</Text>
          <TouchableOpacity
            style={tw`bg-blue-400 rounded mx-6 my-2 flex-row items-center `}
          >
            <FontAwesome
              name="facebook"
              style={tw`mx-5`}
              size={24}
              color="white"
            />
            <Text style={tw`text-center p-3 text-white`}>
              SignUp with Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-red-400 rounded mx-6 my-2 flex-row items-center`}
            onPress={()=>signInWithGoogleAsync()}
          >
            <FontAwesome
              name="google-plus"
              style={tw`mx-5`}
              size={24}
              color="white"
            />
            <Text style={tw`text-center p-3 text-white`}>
              SignUp with Google
            </Text>
          </TouchableOpacity>
        </View>
        <StatusBar
          hidden={false}
          barStyle="light-content"
          backgroundColor={colors.primary_light2}
          animated={true}
        />
      </SafeAreaView>
    </HideKeyboard>
  );
};

export default SignIn;
