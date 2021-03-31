import React from "react";
import { View, Text } from "react-native";
import { LottieViewAnimate } from "./styles";
import animation from "./../../Animations/Loading/loading.json";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LottieViewAnimate source={animation} loop autoPlay />
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>CARREGANDO ...</Text>
    </View>
  );
};

export default Loading;
