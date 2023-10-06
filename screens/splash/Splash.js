import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { COLORS, images } from "../../constant";
import tw from "twrnc";

const Splash = () => {
  const navigate = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate.replace("login");
    }, 2000);
  }, []);
  return (
    <View style={style.container}>
      <View style={tw``}>
        <Image
          source={images.sheepImg}
          resizeMode="contain"
          style={tw`w-full h-full`}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray
  }
});

export default Splash;
