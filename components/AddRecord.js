import firebaseApp from "../api/firebaseConfig";
import firebase from "firebase/compat/app";
import { React, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getAuth } from "firebase/auth";
import DropDownPicker from "react-native-dropdown-picker";
import "firebase/compat/firestore";

const auth = getAuth();
const db = firebaseApp.firestore();

const AddRecord = ({ navigation }) => {
  const [patientId, setPatientId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Medical", value: "medical" },
    { label: "Dental", value: "dental" },
    { label: "Optometry", value: "optometry" },
  ]);

  const onSubmitRecord = () => {
    if (patientId !== "" && title !== "" && description !== "") {
      db.collection("patients")
        .doc(patientId)
        .collection(type)
        .add({
          date: firebase.firestore.FieldValue.serverTimestamp(),
          title: title,
          description: description,
        })
        .then(() => {
          navigation.navigate("Home");
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Add Patient Record</Text>

      <View style={styles.innerContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={(type) => setType(type)}
        />
        <TextInput
          style={styles.headingText}
          placeholder="Patient Id..."
          onChangeText={(patientId) => setPatientId(patientId)}
        ></TextInput>
        <TextInput
          style={styles.headingText}
          placeholder="Record title..."
          onChangeText={(title) => setTitle(title)}
        ></TextInput>
        <View style={styles.row}>
          <View style={styles.bullet}>
            <Text>{"\u2022" + " "}</Text>
          </View>
          <View style={styles.bulletText}>
            <TextInput
              multiline={true}
              placeholder="Record description..."
              placeholderTextColor={"grey"}
              onChangeText={(description) => setDescription(description)}
            ></TextInput>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => onSubmitRecord()}
      >
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
  innerContainer: {
    flex: 1,
    backgroundColor: "white",
    width: "90%",
    borderRadius: 25,
    marginBottom: 180,
  },
  titleText: {
    fontSize: 50,
    color: "white",
    justifyContent: "center",
    marginBottom: 40,
  },
  headingText: {
    fontSize: 25,
    color: "#0094FF",
    margin: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    flex: 1,
    marginVertical: 4,
    marginLeft: 15,
  },
  loginBtn: {
    width: "60%",
    backgroundColor: "black",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 30,

    shadowColor: "rgba(46, 45, 49, 0.8)",
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 15 },
  },
  loginText: {
    fontSize: 21,
    color: "white",
  },
  bullet: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
});

export default AddRecord;
