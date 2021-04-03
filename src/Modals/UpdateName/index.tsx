import React, { useState } from "react";
import {
  ModalProps,
  Alert,
  Text,
  TouchableOpacity,
  View,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import UserData from "../../Class/UserData";
import { ButtonsData } from "./styles";
import api from "../../services/api";

interface forgoutPasswordProps extends ModalProps {
  status: boolean;
}

interface data {
  status: string;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: null | boolean;
    created_at: Date;
    updated_at: Date;
  };
}

const ModalUpdateName: React.FC<forgoutPasswordProps> = ({
  status,
  ...rest
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleUpdateName() {
    if (name.length < 4 || password.length < 8) {
      Alert.alert("Nome ou senha muito pequenos!");
      return;
    }
    const user = {
      name: name,
      password: password,
    };

    const config = {
      Accept: "application/json",
      headers: {
        Authorization: `Bearer ${UserData.token}`,
        "Content-Type": "application/json",
      },
    };
    api
      .put("user/update/name", user, config)
      .then((response) => {
        Alert.alert("Sucesso ao atualizar usuário!");
      })
      .catch((error) => {
        Alert.alert("Erro", error.message);
      });
  }

  const user = UserData.user.data as data;

  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={{ position: "absolute", padding: 10, right: 0 }}
              >
                <Icon name="x" size={15} />
              </TouchableOpacity>

              <Text>Seu novo nome:</Text>
              <TextInput
                onChangeText={setName}
                value={name}
                placeholder="Seu novo nome!"
                style={{ borderBottomColor: "#F6644D", borderBottomWidth: 2 }}
              />

              <Text style={{ marginTop: 20 }}>Confirme sua senha:</Text>
              <TextInput
                onChangeText={setPassword}
                value={password}
                secureTextEntry
                placeholder="Seu novo nome!"
                style={{ borderBottomColor: "#F6644D", borderBottomWidth: 2 }}
              />
              <View
                style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
              >
                <TouchableOpacity
                  onPress={handleUpdateName}
                  style={[styles.button, styles.buttonSend]}
                >
                  <Text style={styles.textStyle}>Atualizar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <ButtonsData
        onPress={() => setModalVisible(true)}
        activeOpacity={0.8}
        style={styles.align}
      >
        <Text style={styles.text}>Nome</Text>
        <View style={styles.align}>
          <Text style={styles.text}>{user.user.name}</Text>
          <Icon color="#fff" name="chevron-right" size={20} />
        </View>
      </ButtonsData>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  modalView: {
    width: "90%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
  },
  buttonOpen: {
    backgroundColor: "transparent",
  },
  buttonSend: {
    alignItems: "center",
    backgroundColor: "#FFD35E",
    marginTop: 10,
    padding: 5,
    width: 90,
  },
  textStyle: {
    color: "#525050",
    textAlign: "left",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
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

export default ModalUpdateName;
