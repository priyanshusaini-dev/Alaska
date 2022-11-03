import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import "expo-dev-client";
import { StackNavigator } from "./src/navigation";
// import firebaseConfig from "./firebaseConfig";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { ActivityIndicator, View,Text } from "react-native";
import tw  from 'twrnc';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#DCECF6",
  },
};

export default function App() {


  return (
    // <SafeAreaProvider>
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
// {/* <Text style={{fontFamily:'Poppins_400Regular'}}>Helloaaaaaaaaaaaaaaaaaaaaa</Text> */}
    // </SafeAreaProvider>
  );
}

// ==> ++ != -->> === <| <==< <~> |-|
