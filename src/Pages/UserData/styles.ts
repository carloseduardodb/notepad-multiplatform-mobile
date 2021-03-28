import styled from "styled-components/native";

export const Screen = styled.View`
  padding: 10% 5%;
  height: 100%;
  background-color: #f3f8f2;
`;

export const PersonIcon = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const ButtonsData = styled.TouchableOpacity`
  background-color: #ffd35e;
  padding: 10px 20px;
  width: 80%;
  border-radius: 50px;
  justify-content: space-between;
  margin-top: 15px;
  box-shadow: 60px -16px black;
  elevation: 3;
`;

export const ButtonLogout = styled.TouchableOpacity`
  background-color: #f6644d;
  padding: 10px 20px;
  width: 80%;
  border-radius: 50px;
  justify-content: space-between;
  margin-top: 15px;
  elevation: 3;
`;
