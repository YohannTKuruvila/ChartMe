import { React, Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const RecordOptions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Patient Records</Text>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Record")}
        >
          <Text style={styles.btnText}>All Records</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("Record", {
              data: "medical",
            });
          }}
        >
          <Text style={styles.btnText}>Medical</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Record")}
        >
          <Text style={styles.btnText}>Dental</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Record")}
        >
          <Text style={styles.btnText}>Optometry</Text>
        </TouchableOpacity>
      </View>
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
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 50,
    color: "white",
    justifyContent: "center",
    marginBottom: 10,
  },
  btn: {
    width: "75%",
    backgroundColor: "white",
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 60,
  },
  btnText: {
    color: "#0094FF",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default RecordOptions;
