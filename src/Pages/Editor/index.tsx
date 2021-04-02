import React, { useState, useEffect } from "react";
import { Text, ToastAndroid, Alert } from "react-native";
import TopMenu from "../../Components/TopMenu";
import { Screen, Title, Content, Button } from "./styles";
import api from "../../services/api";
import UserData from "../../Class/UserData";

const Editor = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [data, setData] = useState({});

  const expression = {
    title: title,
    text: text,
  };

  async function handleSendNote() {
    if (text.length >= 1 || title.length >= 1) {
      const config = {
        Accept: "application/json",
        headers: {
          Authorization: `Bearer ${UserData.token}`,
          "Content-Type": "application/json",
        },
      };
      await api
        .post("note/create", expression, config)
        .then((response) => {
          ToastAndroid.showWithGravityAndOffset(
            "Sucesso ao adicionar nota!",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
          );
          setText("");
          setTitle("");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      Alert.alert("Ooooooops", "Não é possivel não salvar nada.");
    }
  }

  return (
    <Screen>
      <TopMenu />
      <Button onPress={handleSendNote}>
        <Text style={{ textAlign: "center", color: "#fff" }}>Salvar</Text>
      </Button>
      <Title
        onChangeText={setTitle}
        value={title}
        placeholder="O seu título pode ficar aqui uai!"
      />
      <Content
        onChangeText={setText}
        value={text}
        multiline={true}
        placeholder="Digite as suas notas aqui!"
        numberOfLines={25}
        textAlignVertical="top"
      />
    </Screen>
  );
};

export default Editor;
