import React, { useState } from "react";
import { View, Alert } from "react-native";
import animation from "../../Animations/VerifyCode/VerifyCode.json";
import { LottieViewAnimate } from "./styles";
import InputConfirmationCode from "../../Components/InputConfirmationCode";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

interface dataStorageUser {
  email: string;
  token: string;
}

const VerifyAccount = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  async function getValueLocal(token: string, email: string) {
    const result_token = await SecureStore.getItemAsync(token);
    const result_email = await SecureStore.getItemAsync(email);
    if (result_token && result_email) {
      setEmail(result_email);
      setToken(result_token);
    } else {
      Alert.alert("Você não deveria estar nesta página!");
      navigation.navigate("Login");
    }
  }
  const dataUserLocal = getValueLocal("user_token", "user_email");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LottieViewAnimate source={animation} loop autoPlay />
      <InputConfirmationCode email={email} token={token} />
    </View>
  );
};

export default VerifyAccount;
