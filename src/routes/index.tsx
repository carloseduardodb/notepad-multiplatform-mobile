//assets
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";

//screens
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Editor from "../Pages/Editor";
import UserData from "../Pages/UserData";
import VerifyAccount from "../Pages/VerifyAccount";
import Decision from "../Pages/Decision";

//navigations
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//components
import ButtonAdd from "../Components/ButtonAdd";

//global
import States from "../Class/States";

const AppStack = createStackNavigator();
const AppBottomTab = createBottomTabNavigator();

function MyTabsButton() {
  return (
    <AppBottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Meu Perfil":
              iconName = "user";
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#F6644D",
        inactiveTintColor: "#777",
        showLabel: false,
      }}
    >
      <AppBottomTab.Screen name="Home" component={Home} />
      <AppBottomTab.Screen
        name="Editor"
        component={Editor}
        options={() => ({
          tabBarIcon: () => <ButtonAdd />,
        })}
      />
      <AppBottomTab.Screen name="Meu Perfil" component={UserData} />
    </AppBottomTab.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Decision"
        headerMode="none"
        screenOptions={{ cardStyle: { backgroundColor: "#F3F8F2" } }}
      >
        <AppStack.Screen name="Decision" component={Decision} />
        <AppStack.Screen name="Home" component={MyTabsButton} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="VerifyAccount" component={VerifyAccount} />
        <AppStack.Screen name="Register" component={Register} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
