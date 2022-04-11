import { Component } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import Login from "./components/Login";
import Home from "./components/Home";
import Record from "./components/Record";
import RecordOptions from "./components/RecordOptions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./components/Signup";
import PractitionerSignUp from "./components/PractitionerSignUp";
const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="PractitionerSignUp" component={PractitionerSignUp} />
          <Stack.Screen name="Record" component={Record} />
          <Stack.Screen name="RecordOptions" component={RecordOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0094FF",
    alignItems: "center",
    justifyContent: "center",
  },
  btn_forgot: {},
  titleText: {
    justifyContent: "center",
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: "70%",
    height: 45,
    marginBottom: 20,
    // alignItems: "center",
  },
  TextInput: {
    height: 40,
    width: "100%",
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});

export default App;
