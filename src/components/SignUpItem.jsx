import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import tw from "twrnc";
import CustomInput from './CustomInput'
import { useForm } from "react-hook-form";

const EMAIL_REGEX =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default function SignUpItem(props) {
    // console.log(props.item.key)
    const { width } = useWindowDimensions()
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

    props.getData({
        handleSubmit
    })

    return (
        <View style={{ ...tw`h-full border bg-red-300 opacity-50 justify-between`, width }}>
            <View></View>
            <View style={tw`h-68`}>
                <Text style={[{ ...tw`text-8 underline text-center`, }, styles.fontNunitoBold]}>Sign Up</Text>
                <View>
                    {props.item.key == '1' && <View style={tw`mx-7`}>
                        <Text style={tw`text-4 uppercase mt-4 mx-2`}>
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
                        <Text style={tw`text-4 uppercase mt-4 mx-2`}>
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
                    </View>}
                </View>
            </View>
        </View>
    )
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