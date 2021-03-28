import React, { useState } from "react";
import { Text, View, BackHandler } from "react-native";
import {
  Screen,
  Content,
  Logo,
  Title,
  SubTitle,
  Form,
  Input,
  TitleInput,
  ButtonRecoveryPass,
  FormButton,
  ContentBtnForms,
} from "./styles";
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

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
        <Form>
          <View>
            <TitleInput>Seu email:</TitleInput>
            <Input placeholder="example@example.com" nativeID="1" />
          </View>
          <View>
            <TitleInput>Sua senha:</TitleInput>
            <Input
              secureTextEntry={true}
              placeholder="*********"
              nativeID="1"
            />
          </View>
          <View>
            <ButtonRecoveryPass>
              <Text style={{ color: "#3b3b3b" }}>Esqueci a senha</Text>
            </ButtonRecoveryPass>
          </View>
          <ContentBtnForms>
            <FormButton activeOpacity={0.7} onPress={handleNavigateRegister}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Registrar
              </Text>
            </FormButton>
            <FormButton activeOpacity={0.7} onPress={handleNavigateHome}>
              <Text style={{ color: "#fff", textAlign: "center" }}>Entrar</Text>
            </FormButton>
          </ContentBtnForms>
        </Form>
      </Content>
    </Screen>
  );
};

export default Login;
