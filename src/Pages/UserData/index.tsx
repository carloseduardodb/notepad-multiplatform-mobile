import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TopMenu from "../../Components/TopMenu";
import { Screen, PersonIcon, ButtonsData, ButtonLogout } from "./styles";
import { Feather as Icon } from "@expo/vector-icons";

const UserData = () => {
  return (
    <Screen>
      <TopMenu></TopMenu>
      <View
        style={{
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <View style={styles.content_image}>
          <PersonIcon
            source={{
              uri: "https://avatars.githubusercontent.com/u/50811913?v=4",
            }}
          />
        </View>
        <ButtonsData activeOpacity={0.8} style={styles.align}>
          <Text style={styles.text}>Nome</Text>
          <View style={styles.align}>
            <Text style={styles.text}>Carlos Eduardo</Text>
            <Icon color="#fff" name="chevron-right" size={20} />
          </View>
        </ButtonsData>
        <ButtonsData activeOpacity={0.8} style={styles.align}>
          <Text style={styles.text}>Senha</Text>
          <View style={styles.align}>
            <Text style={styles.text}>***********</Text>
            <Icon color="#fff" name="chevron-right" size={20} />
          </View>
        </ButtonsData>
        <ButtonLogout activeOpacity={0.8} style={styles.align}>
          <Text style={styles.text}>Logout</Text>
          <View style={styles.align}>
            <Icon color="#fff" name="log-out" size={20} />
          </View>
        </ButtonLogout>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  align: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 13,
  },

  content_image: {
    borderWidth: 3,
    borderRadius: 50,
    overflow: "hidden",
    borderColor: "#FFD35E",
    marginVertical: 20,
    elevation: 5,
  },
});

export default UserData;
