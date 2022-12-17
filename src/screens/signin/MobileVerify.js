import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { CustomInput, HideKeyboard, MyButton } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import tw from 'twrnc';
import { useForm } from 'react-hook-form';
import { MobileSvg } from '../../svg';

const MOBILE_NUMBER_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const MobileVerify = ({ route, navigation }) => {
  // getting data from previous page
  const { userData } = route.params;
  // const [updatedUserData, setUpdatedUserData] = React.useState(userData)
  // getting dimensions
  const { height, width } = useWindowDimensions();
  // console.log(userData)
  // react hook form=====>
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mobileNumber: "",
    },
  });
  // submit form
  // get form data=====================>>
  const onSubmit = (data) => {
    const mobileData = data;
    // setUpdatedUserData((prevData)=>{return{...prevData,data}})
    // console.log(updatedUserData);
    const newUserData = {...userData,...mobileData}
    // console.log({...userData,...mobileData});
    navigation.navigate("OtpScreen",
    {newUserData}
    );
  };

  return (
    <HideKeyboard>
      <SafeAreaView>
        <LinearGradient style={{ ...tw`p-6`, height }} colors={['#A9E0F3', '#99dafe', '#6A81CA']}>
          <Text style={[{ ...tw`text-center text-7 underline my-4` }, styles.fontNunitoBold]}>Verify Mobile Number</Text>
          <LinearGradient style={tw`m-5 my-26 border-[#D6F5F0] border-4 rounded-lg p-3 py-10 bg-cyan-300 shadow-lg`} colors={['#D6F5F0', '#99dafe', ]}>
            <MobileSvg width={222} height={180}/>
            <Text style={[tw`text-4 uppercase my-2 ml-1 text-center`, styles.fontPoppinsMedium]}>Mobile Number</Text>
            <CustomInput
              color="green"
              control={control}
              maxLength={10}
              errors={errors.mobileNumber}
              inputfeild={{
                rules: {
                  required: true,
                  pattern: {
                    value: MOBILE_NUMBER_REGEX,
                    message: "Invalid Mobile Number",
                  },
                },
                name: "mobileNumber",
                autoComplete: "tel",
                keyboardType: "phone-pad",
                placeholder: "Mobile Number",
                secureTextEntry: false,
              }}
            />
            {errors.mobileNumber && (
              <Text style={tw`text-[#f08a83] text-3 ml-1`}>
                {errors.mobileNumber.message || "*Mobile Number is required."}
              </Text>
            )}
            <MyButton style={tw`mb-0 mt-5`} textStyle={styles.fontNunitoBold} onPress={handleSubmit(onSubmit)}>Get OTP</MyButton>
          </LinearGradient>
        </LinearGradient>
      </SafeAreaView>
    </HideKeyboard>
  )
}

export default MobileVerify

const styles = StyleSheet.create({
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