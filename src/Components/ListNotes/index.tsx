import React, { useState, useEffect } from "react";
import { Alert, FlatList, SafeAreaView, Text } from "react-native";
import { Item, Note, TitleNote, TextContainer } from "./styles";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import UserData from "../../Class/UserData";

interface Note {
  id: string;
  title: string;
  created_at: string;
  text: string;
}

interface Notes {
  notes: Note | any;
}

const ListNotes: React.FC<Notes> = ({ notes, ...rest }) => {
  const navigator = useNavigation();
  return (
    <SafeAreaView>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Item
              key={item.id}
              onPress={() => {
                navigator.navigate("Editor", item);
              }}
            >
              <Icon
                name="sticky-note-o"
                style={{ paddingHorizontal: 10, color: "#43C3A0" }}
                size={45}
              />
              <TextContainer>
                <TitleNote>{String(item.title)}</TitleNote>
                <Note>
                  {item.text.length < 35
                    ? `${item.text}`
                    : `${item.text.substr(0, 32)}`}
                </Note>
              </TextContainer>
            </Item>
          );
        }}
        {...rest}
      />
    </SafeAreaView>
  );
};

export default ListNotes;
