import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  BalooChettan2_400Regular,
  BalooChettan2_500Medium,
  BalooChettan2_600SemiBold,
  BalooChettan2_700Bold,
  BalooChettan2_800ExtraBold,
} from "@expo-google-fonts/baloo-chettan-2";

const Record = () => {
  let [fontsLoaded] = useFonts({
    BalooChettan2_400Regular,
    BalooChettan2_500Medium,
    BalooChettan2_600SemiBold,
    BalooChettan2_700Bold,
    BalooChettan2_800ExtraBold,
  });

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
    fontFamily: "baloo",
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
  bullet: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
});

export default Record;
