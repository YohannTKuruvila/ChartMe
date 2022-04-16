import Firebase from "../api/firebaseConfig";
import { React, Component, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogIn = () => {
    try {
      if (email !== "" && password !== "") {
        signInWithEmailAndPassword(auth, email, password).then(() => {
          navigation.navigate("Home");
        });
      }
    } catch (error) {
      //console.log(`Sign in error ${error}`);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>ChartMe</Text>
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

      <TouchableOpacity>
        <Text style={styles.btn_forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={() => onLogIn()}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signUpBtn}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.signUpText}>Create Patient Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signUpBtn}
        onPress={() => navigation.navigate("PractitionerSignUp")}
      >
        <Text style={styles.signUpText}>Create Practitioner Account</Text>
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
    width: "80%",
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
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,

    // shadowColor: "rgba(46, 45, 49, 0.8)",
    // shadowOpacity: 1,
    // elevation: 8,
    // shadowRadius: 20,
    // shadowOffset: { width: 1, height: 15 },
  },
  signUpBtn: {
    width: "80%",
    backgroundColor: "black",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  signUpText: {
    fontSize: 21,
    color: "white",
  },
  loginText: {
    fontSize: 21,
    color: "black",
  },
});

export default Login;
