import React, { useState, useRef, useCallback } from "react";
import { Text, View, BackHandler, TouchableOpacity, Alert } from "react-native";
import {
  Screen,
  Content,
  Logo,
  Title,
  SubTitle,
  FormContent,
  ButtonRecoveryPass,
  FormButton,
  ContentBtnForms,
} from "./styles";
import { Feather as Icon } from "@expo/vector-icons";
import getValidationsErrors from "../../utils/getValidationsErrors";
import { useNavigation } from "@react-navigation/native";

//validação e envio do formulário
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import Input from "../../Components/Input";
import ModalForgoutPassword from "../../Components/ModalForgoutPassword";
import * as Yup from "yup";
import api from "../../services/api";
import * as Device from "expo-device";
import * as SecureStore from "expo-secure-store";

interface credentials {
  email: string;
  password: string;
}

interface dataUser {
  status: string;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: null | Date;
    created_at: Date;
    updated_at: Date;
  };
  token: string;
}

const Login = () => {
  //diretions routes and navigation
  const navigation = useNavigation();

  function handleNavigate(route: string) {
    if (route == "exit") {
      BackHandler.exitApp();
    }
    navigation.navigate(route);
  }

  //ref form to validation
  const formRef = useRef<FormHandles>(null);

  async function sendData(data: credentials) {
    const { email, password } = data;

    const hidratedData = {
      device_name: Device.osBuildFingerprint,
      email: email,
      password: password,
    };

    async function saveUserToken(data: dataUser) {
      console.log(data);
      await SecureStore.setItemAsync("user_token", data.token);
      await SecureStore.setItemAsync("user_email", data.user.email);
    }

    api
      .post<dataUser>("user/login", hidratedData)
      .then((response) => {
        const { data } = response;
        saveUserToken(data);
        if (!!!data.user.email_verified_at) {
          handleNavigate("VerifyAccount");
        } else {
          handleNavigate("Home");
        }
      })
      .catch((error) => {
        Alert.alert(
          "Alerta",
          "Sua senha ou email estão incorretos, ou você está offline!"
        );
      });
  }

  const handleSubmit = useCallback(async (data: credentials, { reset }) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().email("Digite um e-mail válido!"),
        password: Yup.string()
          .min(8, "Minimo de 8 caracteres!")
          .max(150, "Máximo de 150 caracteres!")
          .required("Senha obrigatória!"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await sendData(data);
      //reset(); usar dps

      //navigation.navigate("Dashboard");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationsErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Screen>
      <TouchableOpacity onPress={() => handleNavigate("exit")}>
        <Icon name="x" size={25} />
      </TouchableOpacity>

      <Content>
        <Logo>
          <Title>Notepad</Title>
          <SubTitle>Multiplatform</SubTitle>
        </Logo>
        <View style={{ padding: 10 }}>
          <Text>Faça o login abaixo para continuar:</Text>
        </View>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormContent>
            <Input
              title="Digite seu email"
              name="email"
              placeholder="example@domain.com"
            />
            <Input
              title="Digite sua senha"
              name="password"
              secureTextEntry={true}
              placeholder="**************"
            />
            <ModalForgoutPassword status={true} />
            <ContentBtnForms>
              <FormButton
                activeOpacity={0.7}
                onPress={() => {
                  handleNavigate("Register");
                }}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Registrar
                </Text>
              </FormButton>
              <FormButton
                activeOpacity={0.7}
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Entrar
                </Text>
              </FormButton>
            </ContentBtnForms>
          </FormContent>
        </Form>
      </Content>
    </Screen>
  );
};

export default Login;
