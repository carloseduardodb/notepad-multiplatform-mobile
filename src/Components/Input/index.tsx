import React, { useEffect, useRef } from "react";
import { TextInputProps, View, Text } from "react-native";
import { useField } from "@unform/core";
import { FormInput, TitleInput } from "./styles";

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReferences {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
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
      <TitleInput>Seu email:</TitleInput>
      <FormInput
        ref={inputElementRef}
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
      <Text>{error}</Text>
    </View>
  );
};
