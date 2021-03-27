import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { Item, Note, TitleNote, TextContainer } from "./styles";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface Note {
  title: string;
  text: string;
}

const state = {
  data: [
    {
      id: "00",
      name: "Fiuk chorando, cuiedeira passando",
      text:
        "Recusou internalizar as diversidades da reparação histórica há tanto tempo necessária infligindo sentimentos.",
    },
    {
      id: "01",
      name: "Aqueles bate boca, rasteira baiana",
      text:
        "Deslegitimou a relativação das pautas minoritárias perpetuando o fascismo.",
    },
    {
      id: "02",
      name: "Chorando, moto estralando, bebe chorando.",
      text:
        "Diminutizou as lamúrias de seus iguais, silenciados pela heteronormatividade patriarcal para proveito proprio.",
    },
    {
      id: "03",
      name: "Gaio de pau quebrando",
      text:
        "Descentralizou as uniformidades do discurso dos pretos, pardos, miscigenados, indígenas e autoproclamados para proveito proprio.",
    },
    {
      id: "04",
      name: "Gaio de pau quebrando",
      text:
        "Descentralizou as uniformidades do discurso dos pretos, pardos, miscigenados, indígenas e autoproclamados para proveito proprio.",
    },
    {
      id: "05",
      name: "Gaio de pau quebrando",
      text:
        "Descentralizou as uniformidades do discurso dos pretos, pardos, miscigenados, indígenas e autoproclamados para proveito proprio.",
    },
    {
      id: "06",
      name: "Gaio de pau quebrando",
      text:
        "Descentralizou as uniformidades do discurso dos pretos, pardos, miscigenados, indígenas e autoproclamados para proveito proprio.",
    },
    {
      id: "07",
      name: "Gaio de pau quebrando",
      text:
        "Descentralizou as uniformidades do discurso dos pretos, pardos, miscigenados, indígenas e autoproclamados para proveito proprio.",
    },
    {
      id: "08",
      name: "Gaio de pau quebrando",
      text:
        "Descentralizou as uniformidades do discurso dos pretos, pardos, miscigenados, indígenas e autoproclamados para proveito proprio.",
    },
    {
      id: "09",
      name: "Gaio de pau quebrando",
      text:
        "Descentralizou as uniformidades do discurso dos pretos, pardos, miscigenados, indígenas e autoproclamados para proveito proprio.",
    },
    {
      id: "10",
      name: "Gaio de pau quebrando",
      text:
        "Descentralizou as uniformidades do discurso dos pretos, pardos, miscigenados, indígenas e autoproclamados para proveito proprio.",
    },
  ],
};

const ListNotes = (note: Note) => {
  const navigator = useNavigation();
  function handleInNote() {
    navigator.navigate("Editor");
  }

  return (
    <SafeAreaView>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
        data={state.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Item key={item.id} onPress={handleInNote}>
              <Icon
                name="sticky-note-o"
                style={{ paddingHorizontal: 10, color: "#43C3A0" }}
                size={45}
              />
              <TextContainer>
                <TitleNote>{item.name}</TitleNote>
                <Note>{item.text}</Note>
              </TextContainer>
            </Item>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default ListNotes;
