import React, { useState, useEffect } from "react";
import { Alert, TouchableOpacity, Text, ToastAndroid } from "react-native";
import { Screen, Body } from "./styles";
import TopMenu from "../../Components/TopMenu";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import ListNotes from "../../Components/ListNotes";
import UserData from "../../Class/UserData";
import api from "../../services/api";

interface Note {
  id: string;
  created_at: string;
  text: string;
}

const Home = () => {
  const navigator = useNavigation();
  const [notes, setNotes] = useState<Note[]>([]);
  const [refresh, setRefresh] = useState(false);

  function handleInNote() {
    navigator.navigate("Editor");
  }

  useEffect(() => {
    setRefresh(false);
    const config = {
      Accept: "application/json",
      headers: {
        Authorization: `Bearer ${UserData.token}`,
      },
    };
    api
      .get("note/show", config)
      .then((response) => {
        setNotes(response.data.notes.reverse());
        ToastAndroid.showWithGravity(
          "Atualizado!",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
      })
      .catch((error) => {
        Alert.alert("Erro", error.message);
      });
  }, [refresh]);

  return (
    <Screen>
      <TopMenu />
      <Body>
        <TouchableOpacity
          style={{
            backgroundColor: "#43C3A0",
            padding: 5,
            borderRadius: 5,
            marginVertical: 5,
          }}
          onPress={() => {
            setRefresh(true);
          }}
        >
          <Icon
            name="refresh-ccw"
            size={30}
            style={{ textAlign: "center", color: "#fff" }}
          />
        </TouchableOpacity>
        <ListNotes notes={notes}></ListNotes>
      </Body>
    </Screen>
  );
};

export default Home;
