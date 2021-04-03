import React, { useState, useEffect } from "react";
import { Text, ToastAndroid, Alert, View } from "react-native";
import TopMenu from "../../Components/TopMenu";
import { Screen, Title, Content, Button } from "./styles";
import api from "../../services/api";
import UserData from "../../Class/UserData";
import { useRoute, useNavigation } from "@react-navigation/native";

interface Note {
  id: string;
  text: string;
  title: string;
}

const Editor = () => {
  const navigator = useNavigation();
  const route = useRoute();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const routeParams = route.params as Note;
    setId(routeParams.id);
    setTitle(routeParams.title);
    setText(routeParams.text);
  }, [route.params]);

  const expression = {
    title: title,
    text: text,
  };

  async function handleDeleteNote(id: string) {
    if (text.length >= 1 || title.length >= 1) {
      const config = {
        Accept: "application/json",
        headers: {
          Authorization: `Bearer ${UserData.token}`,
        },
      };
      await api
        .delete("note/delete/" + id, config)
        .then((response) => {
          ToastAndroid.showWithGravityAndOffset(
            "Apagado com successo!",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
          );
          setId("");
          setText("");
          setTitle("");
          navigator.navigate("Home");
        })
        .catch((e) => {
          console.log(e);
          Alert.alert(e.message);
        });
    } else {
      Alert.alert("Ooooooops", "Não é possivel não salvar nada.");
    }
  }

  async function handleUpdateNote(id: string) {
    if (text.length >= 1 || title.length >= 1) {
      const config = {
        Accept: "application/json",
        headers: {
          Authorization: `Bearer ${UserData.token}`,
          "Content-Type": "application/json",
        },
      };
      await api
        .put("note/update/" + id, expression, config)
        .then((response) => {
          ToastAndroid.showWithGravityAndOffset(
            "Sucesso ao atualizar nota!",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
          );
        })
        .catch((e) => {
          Alert.alert("Erro", e.message);
        });
    } else {
      Alert.alert("Ooooooops", "Não é possivel salvar um documento vazio.");
    }
  }

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
          Alert.alert(e.message);
        });
    } else {
      Alert.alert("Ooooooops", "Não é possivel não salvar nada.");
    }
  }

  return (
    <Screen>
      <TopMenu />
      <View
        style={{
          flexDirection: "row-reverse",
          justifyContent: "space-between",
        }}
      >
        <Button
          onPress={() => {
            id == "" ? handleSendNote : handleUpdateNote(id);
          }}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>Salvar</Text>
        </Button>
        {id != "" && (
          <Button
            style={{ backgroundColor: "#F6644D" }}
            onPress={() => handleDeleteNote(id)}
          >
            <Text style={{ textAlign: "center", color: "#fff" }}>Apagar</Text>
          </Button>
        )}
      </View>
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
