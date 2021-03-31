import React from "react";
import { View, Text } from "react-native";
import animation from "../../Animations/VerifyCode/VerifyCode.json";
import { LottieViewAnimate } from "./styles";
import InputConfirmationCode from "../../Components/InputConfirmationCode";

class VerifyAccount extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LottieViewAnimate source={animation} loop autoPlay />
        <InputConfirmationCode />
      </View>
    );
  }
}

export default VerifyAccount;
