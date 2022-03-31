import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Patient Summary</Text>

      <View style={styles.innerContainer}>
        <Text style={styles.headingText}>Patient Name</Text>
        <View style={styles.row}>
          <Text>
            Danil Ishutin
          </Text>
        </View>        
        <Text style={styles.headingText}>Blood Type</Text>
        <View style={styles.row}>
          <Text>
            O
          </Text>
        </View>
        <Text style={styles.headingText}>Allergies</Text>
        <View style={styles.row}>
          <Text>
            Peanuts
          </Text>
        </View>
        <Text style={styles.headingText}>Current Medication</Text>
        <View style={styles.row}>
          <Text>
            Oxycotin
          </Text>
        </View>
        <Text style={styles.headingText}>Address</Text>
        <View style={styles.row}>
          <Text>
            1430 Trafalgar Road
            Oakville, ON, CA
          </Text>
        </View>
        <Text style={styles.headingText}>Pre-Existing Conditions</Text>
        <View style={styles.row}>
          <Text>
            None
          </Text>
        </View>
        <Text style={styles.headingText}>Organ Donor</Text>
        <View style={styles.row}>
          <Text>
            Yes
          </Text>
        </View>
        <Text style={styles.headingText}>Emergency Contact</Text>
        <View style={styles.row}>
          <Text>
            Jamjam, 4161234567
          </Text>
        </View>
      </View>
      

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("RecordOptions")}
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
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginVertical: 1,
    marginLeft: 15,
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
