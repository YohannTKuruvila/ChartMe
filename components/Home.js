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

      <FlatList
        data={[
          { key: "Patient Name Here" },
          { key: "Blood Type" },
          { key: "Allergies" },
          { key: "Current Medications" },
          { key: "Address" },
          { key: "Pre-existing Conditions" },
          { key: "Organ Donor" },
          { key: "Emergency Contact" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />

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
