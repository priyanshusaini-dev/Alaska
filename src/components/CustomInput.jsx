import { Controller } from "react-hook-form";
import { Theme } from "../constants";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import tw from "twrnc";
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from "react"
import InsetShadow from "react-native-inset-shadow";


export default function CustomInput({ control, errors, inputfeild,color,countryCode,maxLength,style}) {
  const [rightIcon, setRightIcon] = useState('eye-slash');
  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-slash');
    } else if (rightIcon === 'eye-slash') {
      setRightIcon('eye');
    }
  };
  if(color=="pink"){
    color="3DBBEEB";
  }else if (color=="green"){
    color="#D6F5F0";
  }else{
    color="#DBBEEB";
  }
  return (
    <Controller
      control={control}
      rules={inputfeild.rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <InsetShadow right={false} bottom={false} shadowOffset={0.5} shadowOpacity={0.3} shadowRadius={5} elevation={3} containerStyle={tw`rounded-lg border-[0.8] h-11 border-[${errors ? "#f08a83" : color}] bg-[#E1DFE7] flex-row items-center`}>
          {inputfeild.name=="mobileNumber"&&<Text style={tw`mx-2`}>{countryCode||"+91"}</Text>}
          <TextInput
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            style={{ ...tw`w-${inputfeild.autoComplete == "password"?"9/10":"full"} p-2 `,...style }}
            placeholder={inputfeild.placeholder}
            keyboardType={inputfeild.keyboardType}
            autoComplete={inputfeild.autoComplete}
            clearButtonMode="while-editing"
            maxLength={maxLength}
            // placeholderTextColor={Theme.colors.secondary_light}
            secureTextEntry={inputfeild.secureTextEntry && rightIcon == "eye-slash"}
          />
          {inputfeild.autoComplete == "password" && <TouchableOpacity onPress={() => handlePasswordVisibility()} style={tw``}>
            <FontAwesome5 name={rightIcon} size={22} color="#5e5e5e" />
          </TouchableOpacity>}
        </InsetShadow>
      )}
      name={inputfeild.name}
    />
  );
}
