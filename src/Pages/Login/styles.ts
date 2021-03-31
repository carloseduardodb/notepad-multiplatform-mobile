import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Screen = styled.View`
  height: 100%;
  padding: 40px 20px;
`;

export const Content = styled.View`
  justify-content: center;
  height: 90%;
`;

export const Logo = styled.View`
  padding: 40px 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 35px;
  font-family: Ubuntu_400Regular;
`;

export const SubTitle = styled.Text`
  font-weight: bold;
  color: #f6644d;
  font-size: 25px;
  font-family: Ubuntu_300Light;
`;

export const FormContent = styled.View`
  margin-bottom: 10px;
  padding: 10px;
`;

export const ButtonRecoveryPass = styled(RectButton)`
  color: #f6644d;
`;

export const ContentBtnForms = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FormButton = styled.TouchableOpacity`
  margin-top: 25px;
  background-color: #2b2b2b;
  padding: 10px;
  border-radius: 5px;
  min-width: 100px;
`;
