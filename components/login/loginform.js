import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import CheckBox from "react-native-check-box";

import { COLORS, SIZES } from "../../constant";
import tw from "twrnc";
import { Button, Input } from "../common";

const LoginForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={tw`p-1`}>
      <View style={tw`p-2 flex gap-4`}>
        <Text style={styles.title}>Login</Text>
        <Input type={"input"} placeholder="Email/Phone number" />
        <TextInput
          placeholder="Password"
          style={tw` border border-slate-500 px-2  py-1 rounded bg-slate-100  `}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              fontSize: SIZES.medium
            }}
          >
            <CheckBox
              isChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
            />
            <Text>Remember me</Text>
          </View>
          <Text
            style={{
              fontSize: SIZES.small,
              fontWeight: "bold",
              color: COLORS.primary
            }}
          >
            Forget Password?
          </Text>
        </View>
        <Button type={"solid"} text={"Login"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: SIZES.xLarge,
    fontWeight: "700"
  }
});

export default LoginForm;
