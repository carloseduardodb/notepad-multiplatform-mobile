import React, { useEffect, useRef } from "react";
import { TextInputProps, View } from "react-native";
import { useField } from "@unform/core";
import { FormInput, TitleInput, ErrorMessage } from "./styles";

interface InputProps extends TextInputProps {
  name: string;
  title: string;
}

interface InputValueReferences {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, title, ...rest }) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue = "", fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReferences>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: "value",
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = "";
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TitleInput>{title}:</TitleInput>
        <ErrorMessage>{error && error}</ErrorMessage>
      </View>
      <FormInput
        ref={inputElementRef}
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </View>
  );
};

export default Input;
