import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Link, useNavigation } from "@react-navigation/native";

import tw from "twrnc";

import { COLORS, images } from "../../constant";
import { SignUpForm } from "../../components";

const Signup = () => {
  const navigate = useNavigation();

  return (
    <View style={[tw`w-full p-2 h-full`, styles.container]}>
      <View style={tw`w-full h-1/3`}>
        <Image
          source={images.signupImg}
          resizeMode="contain"
          style={tw`  w-full h-full`}
        />
      </View>
      <View>
        <SignUpForm />
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: COLORS.gray }}>Already have an account</Text>
        <Text
          onPress={() => navigate.replace("login")}
          style={{ color: COLORS.primary, fontWeight: "bold" }}
        >
          Login
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding: 2,
  },
  img: {
    width: "80%",
    resizeMode: "contain",
    height: "100%",
  },
});
export default Signup;
