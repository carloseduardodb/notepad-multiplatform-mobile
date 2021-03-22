import React from "react";
import { Text, View } from "react-native";
import {
  Screen,
  Content,
  Logo,
  Title,
  SubTitle,
  Form,
  Input,
  TitleInput,
  FormButton,
  ContentBtnForms,
} from "./styles";
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
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
            <TitleInput>Repita sua senha:</TitleInput>
            <Input
              secureTextEntry={true}
              placeholder="*********"
              nativeID="1"
            />
          </View>
          <ContentBtnForms>
            <FormButton onPress={() => {}}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Registrar
              </Text>
            </FormButton>
          </ContentBtnForms>
        </Form>
      </Content>
    </Screen>
  );
};

export default Register;
