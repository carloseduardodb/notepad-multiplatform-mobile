import React, { useState, useRef } from "react";
import {
  ModalProps,
  Alert,
  Text,
  TouchableOpacity,
  View,
  Modal,
  StyleSheet,
} from "react-native";
import Input from "../../Components/Input";
import { Feather as Icon } from "@expo/vector-icons";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import api from "../../services/api";

interface forgoutPasswordProps extends ModalProps {
  status: boolean;
}

interface credentials {
  current_email: string;
}

const ModalForgoutPassword: React.FC<forgoutPasswordProps> = ({
  status,
  ...rest
}) => {
  //ref form to validation
  const formRef = useRef<FormHandles>(null);
  const [modalVisible, setModalVisible] = useState(false);

  function handleSubmit(data: credentials) {
    console.log(data.current_email.valueOf());
    if (data.current_email.length > 4) {
      api
        .post(
          "user/forgot-the-password",
          { email: data.current_email.valueOf() },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => {
          Alert.alert(
            "Sucesso",
            "Verifique sua caixa de email, foi enviado para você um código para a recuperação de senha!"
          );
        })
        .catch((error) => {
          console.log(error);
          Alert.alert(
            "Erro",
            "Ocorreu um erro ao tentar enviar um email de confirmação! Verifique se seu email está correto"
          );
        });
    } else {
      Alert.alert("Erro", "Seu email é muito curto!");
    }
  }

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
              <Form ref={formRef} onSubmit={handleSubmit}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={{ position: "absolute", padding: 10, right: 0 }}
                >
                  <Icon name="x" size={15} />
                </TouchableOpacity>
                <Input
                  name="current_email"
                  title="Digite o seu email"
                  placeholder="examples@example.com"
                />
                <View
                  style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      formRef.current?.submitForm();
                    }}
                    style={[styles.button, styles.buttonSend]}
                  >
                    <Text style={styles.textStyle}>Recuperar</Text>
                  </TouchableOpacity>
                </View>
              </Form>
            </View>
          </View>
        </Modal>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Esqueci minha senha</Text>
      </TouchableOpacity>
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
});

export default ModalForgoutPassword;
