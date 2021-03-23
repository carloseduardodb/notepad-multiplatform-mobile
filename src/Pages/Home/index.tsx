import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import {
  MenuBar,
  Screen,
  Logo,
  Title,
  SubTitle,
  LogoutButton,
  Body,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigator = useNavigation();

  function handleLogout() {
    //por enquanto
    navigator.goBack();
  }

  return (
    <Screen>
      <MenuBar>
        <LogoutButton onPress={() => {}}>
          <Icon name="log-out" size={20} />
          <Text>Logout</Text>
        </LogoutButton>
        <Logo>
          <Title>Notepad</Title>
          <SubTitle>Multiplatform</SubTitle>
        </Logo>
      </MenuBar>

      <Body></Body>
    </Screen>
  );
};

export default Home;
