import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoute from "./navigation/AuthRoute";

export default function App() {
  return (
    <NavigationContainer>
      <AuthRoute />
    </NavigationContainer>
  );
}
