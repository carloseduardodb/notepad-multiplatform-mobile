import React, { useRef, useCallback } from "react";
import { Text, View, Alert } from "react-native";
import {
  Screen,
  Content,
  Logo,
  Title,
  SubTitle,
  FormContent,
  FormButton,
  ContentBtnForms,
} from "./styles";
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

//validação e envio do formulário
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import Input from "../../Components/Input";
import * as Yup from "yup";
import getValidationsErrors from "../../utils/getValidationsErrors";
import api from "../../services/api";

interface credentials {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  async function seedData(data: credentials) {
    const { name, email, password } = data;

    const hidrateData = {
      name: name,
      email: email,
      password: password,
    };
    await api.post("user/create", hidrateData);
    Alert.alert(
      `Conta criada com sucesso`,
      `Verifique sua caixa de email para validar sua conta, e após copiar o código faça o login com os dados cadastrados!`
    );
  }

  const handleSubmit = useCallback(async (data: credentials, { reset }) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(3, "Minimo de 3 caracteres!")
          .max(240, "Máximo de 240 caracteres!")
          .required("Nome obrigatório!"),
        email: Yup.string()
          .required("E-mail obrigatório!")
          .email("Digite um e-mail válido!"),
        password: Yup.string()
          .min(8, "Minimo de 8 caracteres!")
          .max(150, "Senha muito grande! Máximo 150 caracteres!")
          .required("Senha obrigatória!"),
        repeatPassword: Yup.string()
          .min(8, "Minimo de 8 caracteres")
          .max(150, "Máximo de 150 caracteres!")
          .oneOf([Yup.ref("password"), null], "As senhas não coincidem!"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await seedData(data);
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationsErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  const navigator = useNavigation();

  function handleReturnLogin() {
    navigator.goBack();
  }

  return (
    <Screen>
      <TouchableOpacity onPress={handleReturnLogin}>
        <Icon name="arrow-left" size={25} />
      </TouchableOpacity>

      <Content>
        <Logo>
          <Title>Notepad</Title>
          <SubTitle>Multiplatform</SubTitle>
        </Logo>
        <View style={{ padding: 10 }}>
          <Text>Registre-se:</Text>
        </View>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormContent>
            <Input
              title="Digite seu nome:"
              placeholder="Example example"
              name="name"
            />
            <Input
              title="Digite seu email:"
              placeholder="example@domain.com"
              name="email"
            />
            <Input
              title="Digite sua senha"
              placeholder="****************"
              name="password"
              secureTextEntry={true}
            />
            <Input
              title="Repita sua senha"
              placeholder="****************"
              name="repeatPassword"
              secureTextEntry={true}
            />
            <ContentBtnForms>
              <FormButton
                activeOpacity={0.8}
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  Registrar
                </Text>
              </FormButton>
            </ContentBtnForms>
          </FormContent>
        </Form>
      </Content>
    </Screen>
  );
};

export default Register;
