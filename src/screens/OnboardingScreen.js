import { View,  FlatList, Animated } from "react-native";
import {
  OnboardingItem,
  OnboardingNextButton,
  OnboardingPaginator,
} from "../components";
import tw from "twrnc";
import { useState, useRef } from "react";
import { slides } from "../constants";
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function OnboardingScreen({navigation}) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const  scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        await AsyncStorage.setItem('@onboarding', 'Drawer')
        navigation.navigate('SignInWelcome');
      } catch (e) {
        console.warn(e)
      }
    }
  };
  const scrollToIndex = (index) => {
    if (currentIndex <= slides.length - 1) {
      slideRef.current.scrollToIndex({ index });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          ref={slideRef}
        />
      </View>
      <View style={tw`flex-row justify-between items-center my-2`}>
        <OnboardingPaginator
          data={slides}
          scrollX={scrollX}
          scrollToIndex={scrollToIndex}
        />
        <OnboardingNextButton
          percentage={(currentIndex + 1) * (100 / slides.length)}
          scrollTo={scrollTo}
        />
      </View>
      <StatusBar hidden={true}/>
    </View>
  );
}
