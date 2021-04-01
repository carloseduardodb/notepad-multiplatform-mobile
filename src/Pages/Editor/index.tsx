import React from "react";
import { Text } from "react-native";
import TopMenu from "../../Components/TopMenu";
import { Screen, Title, Content } from "./styles";

const Editor = () => {
  return (
    <Screen>
      <TopMenu />
      <Title placeholder="O seu título pode ficar aqui uai!" />
      <Content
        multiline={true}
        placeholder="Digite as suas notas aqui!"
        numberOfLines={25}
        textAlignVertical="top"
      />
    </Screen>
  );
};

export default Editor;
