import styled from "styled-components/native";

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: #ffd35e;
  padding: 8px;
  border-radius: 6px;
`;

export const ButtonText = styled(Title)`
  font-weight: normal;
  font-size: 19px;
`;
