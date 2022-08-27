import { createStackNavigator } from '@react-navigation/stack'
import {Home,RideReq,Account} from './../screens';

const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Request a Ride" component={RideReq} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    )
  }
  
  export default StackNavigator

