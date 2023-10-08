import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

import tw from "twrnc";
import { Button, Input } from "../common";
import { COLORS, SIZES } from "../../constant";
import CheckBox from "react-native-check-box";

const SignUpForm = () => {
  return (
    <View>
      <View style={tw`p-1`}>
        <View style={tw`p-2 flex gap-4`}>
          <Text style={styles.title}>Signup</Text>
          <Input type={"input"} placeholder="First Name" />
          <Input type={"input"} placeholder="Last Name" />
          <Input type={"input"} placeholder="Email" />

          <TextInput
            placeholder="Password"
            style={tw` border border-slate-500 px-2  py-1 rounded bg-slate-100  `}
          />
          <TextInput
            placeholder="Confirm Password"
            style={tw` border border-slate-500 px-2  py-1 rounded bg-slate-100  `}
          />

          <Button type={"solid"} text={"Signup"} />
        </View>
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

export default SignUpForm;
