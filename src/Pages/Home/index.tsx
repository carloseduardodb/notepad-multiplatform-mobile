import React from "react";
import { FlatList, View } from "react-native";
import { Screen, Body } from "./styles";
import TopMenu from "../../Components/TopMenu";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigator = useNavigation();

  function handleLogout() {
    //por enquanto
    navigator.goBack();
  }

  return (
    <Screen>
      <TopMenu />
      <Body></Body>
    </Screen>
  );
};

export default Home;
