import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function Ex1() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Image style={styles.imageBackground}  source={require('../assets/backgroundimage1.jpg')} /> 

      <View style={{ height: 100 }}></View>

      <Text style={[styles.text, { fontWeight: "bold"  },  { fontSize:35 }]}>Quiz</Text>

      <View style={{ height: 60 }}></View>

      <View style={styles.hienThiThongBao}>
        <FontAwesome5 name="list" style={styles.lockIcon} />
        {/* <Image  source={require('../assets/multiplayer_1.jpg')} /> */}
        <Text style={styles.thongBao} secureTextEntry={true}>
          {"Play Quiz"}
        </Text>
      </View>

      <View style={styles.hienThiThongBao}>
        <FontAwesome5 name="user-friends" style={styles.lockIcon} />

        <Text style={styles.thongBao} secureTextEntry={true}>
          {"MultiPlayer 1-1"}
        </Text>
      </View>

      <View style={styles.hienThiThongBao}>
        <FontAwesome5 name="chart-bar" style={styles.lockIcon} />

        <Text style={styles.thongBao} secureTextEntry={true}>
          {"More Categories"}
        </Text>
      </View>

      <View style={styles.hienThiThongBao}>
        <FontAwesome5 name="signal" style={styles.lockIcon} />

        <Text style={styles.thongBao} secureTextEntry={true}>
          {"World Scores"}
        </Text>
      </View>


      <View style={{ height: 240 }}></View>


      <View style={styles.linkButtonGroup}>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.text}>About</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2980b9",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 40,
    textAlign: "center",
    marginLeft:10
  },
  hienThiThongBao: {
    width: "90%",
    marginTop:15,
  },
  lockIcon: {
    fontSize: 20,
    color: "gray",
    position: "absolute",
    top: 18,
    left: 20,
    zIndex: 1,

  },
  thongBao: {
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 40,
    textAlign: "center",
    fontSize: 18,
    color: "#000",
    width: "100%",
    fontWeight: "bold",
  },
  loginButton: {
    marginTop: 15,
    height: 50,
    backgroundColor: "#8d015a",
    borderRadius: 25,
    textAlign: "center",
    fontSize: 20,
    width: "90%",
  },
  linkButtonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  linkButton: {
    
  },
  imageBackground:{
    width:"100%",
    height:"100%",
    position:"absolute",

  },

});
