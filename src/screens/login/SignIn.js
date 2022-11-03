import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Theme } from "../../constants";
import { HideKeyboard, CustomInput } from "../../components";
import { FontAwesome } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { StatusBar } from "expo-status-bar";
import {  useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
const windowHeight = Dimensions.get("screen").height;
const EMAIL_REGEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASS_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


const SignIn = ({ navigation }) => {
  const { colors } = Theme;

  GoogleSignin.configure({
    webClientId:
      "250514128771-8lnec1t1v1fanc4a8644aoct215qd36t.apps.googleusercontent.com",
  });

  // Set an initializing state whilst Firebase connects
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // Handle user state changes=================>
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      // dispatch(setUser(user));
      // console.log(user);
      // if (initializing) setInitializing(false);
      if (user) {
        navigation.replace("Drawer");
      }
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  // ====google sign in ==============>
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
      <SafeAreaView
        style={{
          ...tw`bg-[${colors.primary_light}] justify-between`,
          height: windowHeight,
        }}
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
              <Text style={tw`text-red-500 text-3`}>
                {errors.email.message || "*E-mail is required."}
              </Text>
            )}

            <Text style={tw`text-[${colors.white}] text-4 uppercase mt-2`}>
              Password
            </Text>

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
            onPress={() => onGoogleButtonPress()}
            style={tw`bg-red-400 rounded mx-6 my-2 flex-row items-center`}
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
