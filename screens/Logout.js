import React, { Component } from "react";
import { StyleSheet, Text, View,TouchableOpacity,Alert } from "react-native";
import firebase from "firebase";



export default class Logout extends Component {
constructor(props){
  super(props);

}



   componentDidMount() {
     firebase.auth().signOut();
   }




// signouthere = () =>{
// firebase.auth().signOut().then(function() {
//   Alert.alert('Signed Out');
 
 
// }, function(error) {
//   console.error('Sign Out Error', error);
// });
// }


  render() {
    return (
      <View style={styles.container}>
    
        <Text>Logout</Text>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
