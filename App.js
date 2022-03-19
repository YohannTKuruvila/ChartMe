import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <View style={styles.container}>

      <View style={styles.titleText}>
        <Text style={{color: 'white'}}>ChartMe</Text>
      </View>      

      <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder = "Email:"
        placeholderTextColor="#0094FF"
        onChangeText={(email) => setEmail(email)}
      />
    </View>

    <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Password:"
      placeholderTextColor="#0094FF"
      secureTextEntry={true}
      onChangeText={(password) => setPassword(password)}
      />
      </View>
{/* 
      <TouchableOpacity>
        <Text style={styles.btn_forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity> */}

    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0094FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_forgot:{
    
  },
  titleText:{
    justifyContent: 'center',
    marginBottom: 40,        
  },
  inputView:{
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: "70%",
    height: 45,
    marginBottom: 20,
    // alignItems: "center",
  },
  TextInput: {
    height: 40,
    width: "100%",
    flex: 1,
    padding: 10,
    alignItems: "center",
  }
});
