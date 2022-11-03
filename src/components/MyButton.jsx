import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import DropShadow from "react-native-drop-shadow";
import tw from "twrnc";
import { LinearGradient as GraddientView } from "expo-linear-gradient";


export default function MyButton(props) {
    // console.log(props)
    let buttonColor = ["#A9E0F3", "#6EA6CE"]
    if (props?.green) {
        buttonColor = ["#D6F5F0", "#63C0AF"];
    } else if (props?.red) {
        buttonColor = ["#F2CACA", "#D17979"];
    }else if (props?.pink) {
        buttonColor = ["#EDBAEE", "#D47BD6"];
    }

    return (
        <TouchableOpacity
            style={{ ...tw`mx-13 rounded-md mb-7 border border-[${buttonColor[0]}]`,...props?.style }}
            onPress={props.onPress}
        >
            <DropShadow style={styles.buttonShadow}>
                <GraddientView
                    start={{ x: 0.1, y: 0.8 }}
                    end={{ x: 1, y: 5 }}
                    style={tw`w-full h-12 rounded-md justify-around flex-row items-center`}
                    colors={buttonColor}
                >
                    {props.icon&&<View>{props?.icon}</View>}
                    <Text style={[ styles.fontPoppinsMedium,{ ...tw`text-center text-6`, ...props?.textStyle },]}>
                        {props?.children}
                    </Text>
                </GraddientView>
            </DropShadow>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonShadow: {
        shadowColor: "#84C0DF",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
    },
    fontPoppinsMedium: {
        fontFamily: "Poppins_500Medium",
    },
});