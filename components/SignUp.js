import Firebase from "../api/firebaseConfig";
import { StatusBar } from "expo-status-bar";
import { React, Component, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const SignUp = ({ navigation }) => {
  let [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [emergency, setEmergency] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const onSignUp = () => {
    try {
      if (
        name != "" &&
        email !== "" &&
        password !== ""
        //   address !== "" &&
        //   emergency !== ""
      ) {
        createUserWithEmailAndPassword(auth, email, password);
      }
      // Firebase.collection("patients").doc("test22").set({
      //   name: "testName",
      //   email: "testEmail",
      // });
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>ChartMe</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name:"
          placeholderTextColor="#0094FF"
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email:"
          placeholderTextColor="#0094FF"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password:"
          placeholderTextColor="#0094FF"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Address:"
          placeholderTextColor="#0094FF"
          onChangeText={(address) => setAddress(address)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Emergency Contact:"
          placeholderTextColor="#0094FF"
          onChangeText={(emergency) => setEmergency(emergency)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.btn_forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => onSignUp()}>
        <Text style={styles.loginText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0094FF",
    alignItems: "center",
    justifyContent: "center",
  },
  btn_forgot: {},
  titleText: {
    fontSize: 50,
    color: "white",
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
  loginBtn: {
    width: "60%",
    backgroundColor: "black",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  loginText: {
    fontSize: 21,
    color: "white",
  },
});

export default SignUp;
