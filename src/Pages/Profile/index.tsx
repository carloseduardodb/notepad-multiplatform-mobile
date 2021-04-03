import React from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import TopMenu from "../../Components/TopMenu";
import { Screen, PersonIcon, ButtonsData, Button } from "./styles";
import { Feather as Icon } from "@expo/vector-icons";
import UserData from "../../Class/UserData";
import UpdateName from "../../Modals/UpdateName";
import UpdatePassword from "../../Modals/UpdatePassword";
import api from "../../services/api";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  function deleteUserDataLocal() {
    SecureStore.deleteItemAsync("user_token");
    SecureStore.deleteItemAsync("user_email");
  }
  async function deleteServidortoken() {}
  function handleLogout() {
    const config = {
      Accept: "application/json",
      headers: {
        Authorization: `Bearer ${UserData.token}`,
      },
    };
    api
      .get("user/logout", config)
      .then((response) => {
        deleteUserDataLocal();
        Alert.alert("Sucesso", "Sucesso ao fazer logout!");
      })
      .catch((error) => {
        Alert.alert("Erro", error.message);
      });
  }

  function handleDeleteAccount() {
    const config = {
      Accept: "application/json",
      headers: {
        Authorization: `Bearer ${UserData.token}`,
      },
    };
    api
      .delete("user/delete", config)
      .then((response) => {
        deleteUserDataLocal();
        Alert.alert("Sucesso", "Sucesso ao apagar conta!");
        navigation.navigate("Register");
      })
      .catch((error) => {
        Alert.alert("Erro", error.message);
      });
  }

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
        <UpdateName status={true} />
        <UpdatePassword status={true} />
        <Button onPress={handleLogout} activeOpacity={0.8} style={styles.align}>
          <Text style={styles.text}>Logout</Text>
          <View style={styles.align}>
            <Icon color="#fff" name="log-out" size={20} />
          </View>
        </Button>
        <Button
          onPress={handleDeleteAccount}
          activeOpacity={0.8}
          style={styles.align}
        >
          <Text style={styles.text}>Apagar Conta</Text>
          <View style={styles.align}>
            <Icon color="#fff" name="trash-2" size={20} />
          </View>
        </Button>
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

export default Profile;
