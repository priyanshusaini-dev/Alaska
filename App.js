import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useState, useEffect } from "react"
import 'expo-dev-client';
import { StackNavigator } from "./src/navigation";
import firebaseConfig from "./firebaseConfig";




const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {




  return (
    // <SafeAreaProvider>
    <NavigationContainer theme={theme}>
      <StackNavigator />
    </NavigationContainer>
    // </SafeAreaProvider>
  );
}

// ==> ++ != -->> === <| <==< <~> |-|
