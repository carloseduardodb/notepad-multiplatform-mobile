import styled from "styled-components/native";

export const Screen = styled.View`
  height: 100%;
  padding: 40px 20px;
`;

export const MenuBar = styled.View`
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;

export const AboutButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #f6644d;
  padding: 8px;
  border-radius: 5px;
`;

export const Text = styled.Text`
  color: white;
  margin-left: 5px;
`;

export const Logo = styled.View`
  padding: 0;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  font-family: Ubuntu_400Regular;
`;

export const SubTitle = styled.Text`
  font-weight: bold;
  color: #f6644d;
  font-size: 10px;
  font-family: Ubuntu_300Light;
`;
