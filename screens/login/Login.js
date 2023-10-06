import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";
import { Link, useNavigation } from "@react-navigation/native";
import { COLORS, images } from "../../constant";
import { LoginForm } from "../../components";

import tw from "twrnc";

const Login = () => {
  const navigate = useNavigation();
  return (
    <View style={[tw`w-full p-2 h-full`, styles.container]}>
      <View style={tw`w-full h-1/3`}>
        <Image
          source={images.loginImg}
          resizeMode="contain"
          style={tw`  w-full h-full`}
        />
      </View>
      <View>
        <LoginForm />
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: COLORS.gray }}>Don't have an account</Text>
        <Text
          onPress={() => navigate.replace("signup")}
          style={{ color: COLORS.primary, fontWeight: "bold" }}
        >
          Signup
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding: 2
  },
  img: {
    width: "80%",
    resizeMode: "contain",
    height: "100%"
  }
});

export default Login;
