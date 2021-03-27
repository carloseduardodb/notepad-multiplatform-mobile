import React from "react";
import { Text } from "react-native";
import TopMenu from "../../Components/TopMenu";
import { Screen } from "./styles";

const UserData = () => {
  return (
    <Screen>
      <TopMenu></TopMenu>
      <Text>Essa é a pagina de edição de dados do usuário</Text>
    </Screen>
  );
};

export default UserData;
