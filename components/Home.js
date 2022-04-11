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
import {
  useFonts,
  BalooChettan2_400Regular,
  BalooChettan2_500Medium,
  BalooChettan2_600SemiBold,
  BalooChettan2_700Bold,
  BalooChettan2_800ExtraBold,
} from "@expo-google-fonts/baloo-chettan-2";
import {
  //useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
  OpenSans_300Light_Italic,
  OpenSans_400Regular_Italic,
  OpenSans_500Medium_Italic,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold_Italic,
} from "@expo-google-fonts/open-sans";

const Home = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    OpenSans_500Medium,
    OpenSans_800ExtraBold,
    BalooChettan2_500Medium,
    BalooChettan2_600SemiBold,
    BalooChettan2_700Bold,
    BalooChettan2_800ExtraBold,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>PATIENT SUMMARY</Text>

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
    fontSize: 40,
    color: "white",
    justifyContent: "center",
    marginBottom: 40,
    fontFamily: "BalooChettan2_700Bold",
  },
  item: {
    fontFamily: "OpenSans_800ExtraBold",
  },
});

export default Home;
