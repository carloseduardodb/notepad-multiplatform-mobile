import React from "react";
import { Alert } from "react-native";
import api from "../../services/api";
import * as SecureStore from "expo-secure-store";
import UserData from "../../Class/UserData";
import { useNavigation } from "@react-navigation/native";
import Loading from "../Loading";

const Decision = () => {
  const navigation = useNavigation();
  async function verifyAuth() {
    let result = await SecureStore.getItemAsync("user_token");
    if (result) {
      const config = {
        Accept: "application/json",
        headers: { Authorization: `Bearer ${result}` },
      };
      api
        .get("user/show", config)
        .then((response) => {
          if (response.data.user.email_verified_at != null) {
            /**enviar para home após adicionar os
             * dados do usuário em um local estatico.
             * Evitar a fadiga de puxar os dados localmente sempre que mudar de rota.
             * */
            UserData.user = response;
            navigation.navigate("Home");
          } else {
            //envia para tela de login
            navigation.navigate("VerifyAccount");
          }
        })
        .catch(() => {
          //sem internet
          Alert.alert(
            "Erro de conexão",
            "Verifique sua conexão com a internet e tente entrar novamente!"
          );
        });
    } else {
      //envia o usuário para fazer login
      navigation.navigate("Login");
    }
  }
  verifyAuth();
  return <Loading />;
};

export default Decision;
