import React from "react";
import { Screen, Body } from "./styles";
import TopMenu from "../../Components/TopMenu";
import { useNavigation } from "@react-navigation/native";
import ListNotes from "../../Components/ListNotes";

const Home = () => {
  const navigator = useNavigation();

  function handleLogout() {
    //por enquanto
    navigator.goBack();
  }

  return (
    <Screen>
      <TopMenu />
      <Body>
        <ListNotes></ListNotes>
      </Body>
    </Screen>
  );
};

export default Home;
