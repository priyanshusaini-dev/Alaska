import { View, Text } from 'react-native'
import React from 'react'
import { MyHeader } from './../components';


export default function Details({ navigation }) {
  return (
    <>
      <MyHeader navigation={navigation} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Details</Text>
        </View>
    </>
  )
}