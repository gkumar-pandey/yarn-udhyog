import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../constant";

import tw from "twrnc";

const Button = ({ type, text }) => {
  if (type === "solid") {
    return (
      <TouchableOpacity style={[styles.solidBtn, tw`rounded p-1`]}>
        <Text style={styles.solidBtnText}>{text}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  solidBtn: {
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  solidBtnText: {
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.white,
    fontSize: SIZES.large,
    padding: 4
  }
});

export default Button;
