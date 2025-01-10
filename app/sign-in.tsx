import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "@/constants/images";
import icons from "@/constants/icons";

const signIn = () => {
  const handleLogin = () => {};

  return (
    <View className="bg-white h-full flex-1">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Willkommen bei Swipeo
          </Text>
          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Wir helfen dir dabei dein{"\n"}
            <Text className="text-primary-300">Traumjob zu finden</Text>
          </Text>
          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Registriere dich bei Swipeo mit Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              ></Image>
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Weiter mit Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default signIn;
