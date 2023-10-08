import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens";

const AppStack = createNativeStackNavigator();
const AppRoute = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="home" component={Home} />
    </AppStack.Navigator>
  );
};

export default AppRoute;
