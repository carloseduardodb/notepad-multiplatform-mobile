import { StatusBar } from "react-native";
import React from "react";
import Routes from "./src/routes";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_300Light,
} from "@expo-google-fonts/ubuntu";

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
