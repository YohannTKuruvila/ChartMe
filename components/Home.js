import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList
} from "react-native";

const Home = () => {
  return (
    
    <View style={styles.container}>
      <Text style={styles.titleText}>Patient Summary</Text>

      <FlatList data={[
        {key: 'Patient Name Here'},
        {key: 'Blood Type'},
        {key: 'Allergies'},
        {key: 'Current Medications'},
        {key: 'Address'},
        {key: 'Pre-existing Conditions'},
        {key: 'Organ Donor'},
        {key: 'Emergency Contact'},
      ]}
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("")}
      >
        <Text style={styles.loginText}>View All Records </Text>
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
