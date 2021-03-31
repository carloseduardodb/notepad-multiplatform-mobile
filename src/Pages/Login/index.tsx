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

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  async function seedData(data: credentials) {
    const { email, password } = data;

    const hidratedData = {
      device_name: Device.osBuildFingerprint,
      email: email,
      password: password,
    };

    api.post<dataUser>("user/login", hidratedData).then((response) => {
      const { data } = response;
      if (!!!data.user.email_verified_at) {
        console.log(data);
        Alert.alert("Seu email não esta verificado!");
      } else {
        Alert.alert("Seu email está verificado!");
      }
    });
  }

  const handleSubmit = useCallback(async (data: credentials, { reset }) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório!")
          .email("Digite um e-mail válido!"),
        password: Yup.string()
          .min(8, "Minimo de 8 caracteres!")
          .max(150, "Máximo de 150 caracteres!")
          .required("Senha obrigatória!"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await seedData(data);
      reset();

      //navigation.navigate("Dashboard");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationsErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  //diretions routes
  const navigation = useNavigation();
  function handleNavigateRegister() {
    navigation.navigate("Register");
  }
  function handleNavigateHome() {
    navigation.navigate("Home");
  }
  function handleCloseApplication() {
    BackHandler.exitApp();
  }

  return (
    <Screen>
      <TouchableOpacity onPress={handleCloseApplication}>
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
              value="carloscangere@hotmail.co"
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
              <FormButton activeOpacity={0.7} onPress={handleNavigateRegister}>
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
