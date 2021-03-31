import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, Alert } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { Title, Button, ButtonText } from "./styles";

import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";

interface dataUser {
  email: string;
  token: string;
}

const CELL_COUNT = 7;

const InputConfirmationCode: React.FC<dataUser> = ({
  email,
  token,
  ...rest
}) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  //diretions routes and navigation
  const navigation = useNavigation();

  function handleSendCode() {
    const hidrated_data = {
      email: email,
      code: value,
    };
    api.post("user/code-validation", hidrated_data).then((response) => {
      if (response.status === 201) {
        navigation.navigate("Home");
      } else {
        Alert.alert(
          "Erro",
          "Ooooops algo de errado não esta certo! Seu código está errado!"
        );
      }
    });
  }

  return (
    <SafeAreaView>
      <Title>Digite seu código </Title>
      <Title>de verificação abaixo:</Title>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <Button onPress={handleSendCode}>
        <ButtonText>Verificar</ButtonText>
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#00000030",
    textAlign: "center",
    marginLeft: 5,
  },
  focusCell: {
    borderColor: "#f79080",
  },
});

export default InputConfirmationCode;
