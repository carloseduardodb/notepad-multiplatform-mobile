import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { Screen, Body } from "./styles";
import TopMenu from "../../Components/TopMenu";
import { useNavigation, useRoute } from "@react-navigation/native";
import ListNotes from "../../Components/ListNotes";
import States from "../../Class/States";

const teste = 5;

const Home = () => {
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
