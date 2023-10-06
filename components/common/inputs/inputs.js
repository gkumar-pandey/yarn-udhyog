import { TextInput } from "react-native";
import React from "react";

import tw from "twrnc";

const Input = ({ type, placeholder }) => {
  if (type === "input") {
    return (
      <TextInput
        placeholder={placeholder}
        style={tw` border border-slate-500 px-2 py-1 rounded bg-slate-100  `}
      />
    );
  }
  return null;
};

export default Input;
