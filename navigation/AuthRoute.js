import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home, Login, Signup, Splash } from "../screens";

const AuthStack = createNativeStackNavigator();

const AuthRoute = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="splash" component={Splash} />
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="signup" component={Signup} />
    </AuthStack.Navigator>
  );
};

export default AuthRoute;
