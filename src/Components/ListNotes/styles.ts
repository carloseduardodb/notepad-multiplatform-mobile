import styled from "styled-components/native";

export const Item = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 5px;
  flex-direction: row;
  padding: 5px;
  align-items: center;
  margin-vertical: 5px;
`;

export const Note = styled.Text`
  color: #3d3d3d;
`;

export const TitleNote = styled.Text`
  color: #000;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const TextContainer = styled.View`
  width: 85%;
  padding-vertical: 5px;
`;
