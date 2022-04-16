import firebase from "../api/firebaseConfig";
import { React, useState, Component, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import toDate from "firebase/compat/app";
import { route, navigation } from "react-native";

import { getAuth } from "firebase/auth";
//import "firebase/compat/firestore";

function Record(route, navigation) {
  const [records, setRecords] = useState([]);

  const auth = getAuth();
  const db = firebase.firestore();
  const userID = auth.currentUser.uid;
  //const { data } = route.params.data;
  useEffect(() => {
    const records = [];
    const subscriber = db
      .collection("patients")
      .doc(userID)
      .collection("medical")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          records.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setRecords(records);
      });
    return () => subscriber();
  }, []);

  return (
    <FlatList
      data={records}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={styles.headingText}>
              {new Date(item.date.seconds * 1000).toLocaleDateString("en-US")}
            </Text>
            <Text style={styles.headingText}>{item.title}</Text>
            <View style={styles.row}>
              <View style={styles.bullet}>
                <Text>{"\u2022" + " "}</Text>
              </View>
              <View style={styles.bulletText}>
                <Text style={styles.descText}>{item.description}</Text>
              </View>
            </View>
          </View>
          {/* <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate("AddRecord")}
          >
            <Text style={styles.loginText}>Add Record</Text>
          </TouchableOpacity> */}
        </View>
      )}
    />
  );
}

class ShowRecords extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore();
    this.state = {
      records: [],
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>Medical Records</Text>
        <Record />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#0094FF",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  innerContainer: {
    backgroundColor: "white",
    width: 330,
    borderRadius: 25,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 45,
    color: "black",
    justifyContent: "center",
    marginBottom: 40,
    marginTop: 40,
    fontWeight: "bold",
  },
  headingText: {
    fontSize: 25,
    color: "#0094FF",
    marginLeft: 10,
    marginTop: -3,
    //paddingTop: 10,
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
  descText: {
    margin: 10,
    fontSize: 20,
  },
});

export default ShowRecords;
