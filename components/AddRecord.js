import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const AddRecord = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Patient Records</Text>
      
      <View style={styles.innerContainer}>
        <Text style={styles.headingText}>2022/04/22 - Surgery</Text>
        <View style={styles.row}>
          <View style={styles.bullet}>
            <Text>{"\u2022" + " "}</Text>
          </View>
          <View style={styles.bulletText}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
          </View>
        </View>
        <Text style={styles.headingText}>2022/02/20 - Pre Op</Text>
        <View style={styles.row}>
          <View style={styles.bullet}>
            <Text>{"\u2022" + " "}</Text>
          </View>
          <View style={styles.bulletText}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
          </View>
        </View>
        <Text style={styles.headingText}>2022/01/12 - Check Up</Text>
        <View style={styles.row}>
          <View style={styles.bullet}>
            <Text>{"\u2022" + " "}</Text>
          </View>
          <View style={styles.bulletText}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Record")}
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
    marginBottom: 20,
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
