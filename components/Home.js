import firebaseApp from "../api/firebaseConfig";
import { React, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  ScrollView,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "firebase/compat/firestore";
import { getDoc, setDoc } from "@firebase/firestore";

const auth = getAuth();
const db = firebaseApp.firestore();

function Home({ navigation }) {
  const [doct, setDoct] = useState(false);
  const [docName, setDocName] = useState("");
  const [license, setLicense] = useState("");
  const [address, setAddress] = useState("");

  const checkIfDoc = () => {
    let docRef = db.collection("practitioners").doc(auth.currentUser.uid);
    docRef.get().then((docSnapshot) => {
      if (docSnapshot.exists) {
        setDoct(true);
        setDocName(docSnapshot.data().name);
        setAddress(docSnapshot.data().address);
        setLicense(docSnapshot.data().license);
      } else {
        setDoct(false);
      }
    });
  };

  const getPracInfo = () => {};

  useEffect(() => {
    checkIfDoc();
  }, []);

  if (doct == true) {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Practitioner Summary</Text>

          <View style={styles.innerContainer}>
            <Text style={styles.headingText}>Practitioner Name</Text>
            <View style={styles.row}>
              <Text>{docName}</Text>
            </View>
            <Text style={styles.headingText}>Main Practice Address</Text>
            <View style={styles.row}>
              <Text>{address}</Text>
            </View>
            <Text style={styles.headingText}>Medical License #</Text>
            <View style={styles.row}>
              <Text>{license}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate("AddRecord")}
          >
            <Text style={styles.loginText}>Add New Record</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleText}>Patient Summary</Text>

          <View style={styles.innerContainer}>
            <Text style={styles.headingText}>Patient Name</Text>
            <View style={styles.row}>
              <Text>Danil Ishutin</Text>
            </View>
            <Text style={styles.headingText}>Blood Type</Text>
            <View style={styles.row}>
              <Text>O</Text>
            </View>
            <Text style={styles.headingText}>Allergies</Text>
            <View style={styles.row}>
              <Text>Peanuts</Text>
            </View>
            <Text style={styles.headingText}>Current Medication</Text>
            <View style={styles.row}>
              <Text>Oxycotin</Text>
            </View>
            <View style={styles.row}>
              <Text>Amoxicillin</Text>
            </View>
            <Text style={styles.headingText}>Address</Text>
            <View style={styles.row}>
              <Text>1430 Trafalgar Road Oakville, ON, CA</Text>
            </View>
            <Text style={styles.headingText}>Pre-Existing Conditions</Text>
            <View style={styles.row}>
              <Text>None</Text>
            </View>
            <Text style={styles.headingText}>Organ Donor</Text>
            <View style={styles.row}>
              <Text>Yes</Text>
            </View>
            <Text style={styles.headingText}>Emergency Contact</Text>
            <View style={styles.row}>
              <Text>Jamjam, 4161234567</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate("RecordOptions")}
          >
            <Text style={styles.loginText}>View Records </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#0094FF",
  },
  container: {
    flex: 1,
    backgroundColor: "#0094FF",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginVertical: 1,
    marginLeft: 15,
    paddingBottom: 10,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "white",
    width: "90%",
    borderRadius: 25,
    marginBottom: 20,
  },
  headingText: {
    fontSize: 25,
    color: "#0094FF",
    margin: 15,
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
  titleText: {
    fontSize: 50,
    color: "white",
    justifyContent: "center",
    marginBottom: 40,
  },
});

export default Home;
