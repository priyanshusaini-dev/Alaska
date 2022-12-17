import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {OtpSvg} from '../../svg'
import {CustomInput, HideKeyboard, MyButton} from './../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const Otp = () => {


  
  return (
    <HideKeyboard>
      <SafeAreaView>
        <LinearGradient style={{ ...tw`p-6`, height }} colors={['#A9E0F3', '#99dafe', '#6A81CA']}>
          <Text style={[{ ...tw`text-center text-7 underline my-4` }, styles.fontNunitoBold]}>Verify Mobile Number</Text>
          <LinearGradient style={tw`m-5 my-26 border-[#D6F5F0] border-4 rounded-lg p-3 py-10 bg-cyan-300 shadow-lg`} colors={['#D6F5F0', '#99dafe', ]}>
            <OtpSvg width={222} height={180}/>
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

export default Otp

const styles = StyleSheet.create({})