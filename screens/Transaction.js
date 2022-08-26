import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  StatusBar,

} from "react-native";

import db from "../config";
import Login from './Login';
import firebase from "firebase";


export default class TransactionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentname: "",
      classname:"",
      reason: "",
      email: this.props.email,
      dateleave:""
    };
  }


submitreason = async(studentname,classname,dateleave,reason) =>{

if(classname && studentname && dateleave && reason){
    db.collection("leaveforms").add({
    class_name : classname,
    student_name : studentname,
    reason : reason,
    todaysdate : firebase.firestore.Timestamp.now().toDate(),
    email: this.state.email,
    date_of_leave: dateleave
  });


db.collection("students")
       .doc(this.state.email)
      .update({
        number_of_days_leave: firebase.firestore.FieldValue.increment(1)
      });

this.setState({
  studentname: "", 
  classname :"",
  dateleave:"",
  reason: ""
});


Alert.alert("Submitted Successfully");
//this.props.setUpdateToTrue();

}

else {
  Alert.alert("All fields are required")
}

}


 render() {
    
    const { classname,studentname,dateleave,reason} = this.state;

    return(
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView style = {styles.droidSafeView} />
       
<View style = {styles.upperContainer}>
<Text style ={styles.titleText}> Leave Form</Text>
</View>


          <View style={styles.lowerContainer}>
                                   

            <View style = {styles.textinputContainer}>
              
              <TextInput
                style={styles.textinput}
                placeholder={"Student Name"}
                placeholderTextColor={"#FFFFFF"}
                value = {studentname}
                onChangeText={text => this.setState({ studentname: text })}
              />
              
            </View>
              <View style={[styles.textinputContainer,{marginTop:10}]}>
           
              <TextInput
                style={styles.textinput}
                placeholder={"Class"}
                placeholderTextColor={"#FFFFFF"}
                value = {classname}
                onChangeText={text => this.setState({ classname: text })}
              />
              
              
            </View>
       <View style={[styles.textinputContainer,{marginTop:10}]}>
              <TextInput
                style={styles.textinput}
                placeholder={"Date"}
                placeholderTextColor={"#FFFFFF"}
                value = {dateleave}
                
                onChangeText={text => this.setState({ dateleave: text })}
              />
              
            </View>


             <View style={[styles.textinputContainer,{marginTop:10}]}>
              <TextInput
                style={styles.textinput}
                placeholder={"Reason"}
                placeholderTextColor={"#FFFFFF"}
                value = {reason}
                
                onChangeText={text => this.setState({ reason: text })}
              />
              
            </View>

            
            <TouchableOpacity
              style={[styles.button, { marginTop: 25 }]}
              onPress={()=>{this.submitreason(studentname,classname,dateleave,reason)}}
            >
              <Text style={styles.buttonText}>submit</Text>

              
            </TouchableOpacity>
     
          </View>
        
      </KeyboardAvoidingView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9dfd24"
  },
  droidSafeView:{
    marginTop: Platform.OS === "android"? StatusBar.currentHeight :0
  },

  upperContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
  },
 
  lowerContainer: {
    flex: 0.9,
    alignItems: "center"
  },
  textinputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#9DFD24",
    borderColor: "#FFFFFF"
  },
  titleText:{
   fontFamily:"Rajdhani_600SemiBold",
    fontSize:20,
    color:"blue",
    justifyContent:"center",
    alignItems:"center"
  },
  textinput: {
    width:'90%',
    height: 60,
    padding: 10,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#5653D4",
    fontFamily: "Rajdhani_600SemiBold",
    color: "#FFFFFF"
  },
  
  button: {
    width: "100%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48D20",
    borderRadius: 15,
    alignSelf:"center"
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold"
  }
});

