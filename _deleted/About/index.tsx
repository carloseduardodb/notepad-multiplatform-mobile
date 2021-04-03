import React, { useState } from "react";
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

interface forgoutPasswordProps extends ModalProps {
  status: boolean;
}

const About: React.FC<forgoutPasswordProps> = ({ status, ...rest }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
              <Text>Algumas</Text>
              <View
                style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
              >
                <TouchableOpacity style={[styles.button, styles.buttonSend]}>
                  <Text style={styles.textStyle}>Recuperar</Text>
                </TouchableOpacity>
              </View>
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

export default About;
