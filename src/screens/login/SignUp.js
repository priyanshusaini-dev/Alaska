import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Theme } from "../../constants";
import { HideKeyboard, CustomInput } from "../../components";
import { useEffect,useState } from "react";
import { useForm } from "react-hook-form";
import { StatusBar } from "expo-status-bar";
import auth from "@react-native-firebase/auth";

const EMAIL_REGEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASS_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const SignUp = ({ navigation }) => {
  // const [name, setName] = useState(null);
  const { colors } = Theme;
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Drawer");
      }
    });

    return unsubscribe;
  }, []);


   const onSubmit = (data) => {
    const { email, password, name } = data;
    // setName(name);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        // const user = userCredentials.user;
        const user = firebase.auth().currentUser;
        const update = {
          displayName: name,
        }
        return user.updateProfile(update)
      })
      .catch((err) => alert(err));
  };



  return (
    <HideKeyboard>
      <SafeAreaView
        style={tw`bg-[${colors.primary_light}] h-full justify-between`}
      >
        <View>
          <View
            style={tw`bg-[${colors.primary_light2}] h-14 rounded-b-6 absolute left-0 right-0`}
          ></View>
          <View style={tw`m-3 mt-[25] mx-6`}>
            <Text style={tw`text-[${colors.white}] text-6 font-bold mt-3`}>
              Create An Account
            </Text>

            <Text style={tw`text-[${colors.white}] text-4 uppercase mt-4`}>
              Name
            </Text>
            <CustomInput
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
            {errors.name && (
              <Text style={tw`text-red-500 text-3`}>
                {errors.name.message || "*Name is required."}
              </Text>
            )}

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

            <Text style={tw`text-[${colors.white}] text-4 uppercase mt-2`}>
              Confirm Password
            </Text>
            <CustomInput
              control={control}
              errors={errors.confirm_password}
              inputfeild={{
                rules: {
                  required: true,
                  validate: (val) => {
                    if (watch("password") != val) {
                      return "Your passwords do no match";
                    }
                  },
                },
                name: "confirm_password",
                autoComplete: "password",
                keyboardType: "default",
                placeholder: "Password",
                secureTextEntry: true,
              }}
            />
            {errors.confirm_password && (
              <Text style={tw`text-red-500 text-3`}>
                {errors.confirm_password.message || "*Password is required."}
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
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ~~~---->botoom<-----------====================<< */}
        <View style={tw`bg-[${colors.white}] rounded-t-6 px-6`}>
          <Text
            style={tw`text-center text-[${colors.primary}] my-3 uppercase `}
          >
            Already have an account?
          </Text>
          <TouchableOpacity
            style={tw`border border-[${colors.light}] bg-[${colors.bg}] mb-6 rounded mt-1`}
            onPress={() => navigation.replace("SignIn")}
          >
            <Text
              style={tw`text-center text-[${colors.primary}] bg-[${colors.bg}] my-[10] text-4 uppercase font-bold`}
            >
              SIGN IN
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

export default SignUp;
