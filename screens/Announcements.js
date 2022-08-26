import React, { Component } from "react";
import { StyleSheet, Text, View,TouchableOpacity,Alert,Image,ImageBackground,ScrollView,SafeAreaView,StatusBar,Platform,FlatList } from "react-native";
import firebase from "firebase";
import db from '../config';


export default class Announcements extends Component {

  constructor(props) {
    super(props);
    this.state = {
      all: [],
      lastVisible: null,
   
   
    };
  }



   componentDidMount = async () => {

    this.getannouncement();
  }



  getannouncement = () => {

 

    db.collection("announcements")
    
     
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          this.setState({
            all: [...this.state.all, doc.data()],
            lastVisible: doc,
           
          });
        });
      });



  };

 
 


  fetchMore = async () => {


    const { lastVisible, all } = this.state;
   
      const query = await db
        .collection("announcements")
      
        .startAfter(lastVisible)
     
        .get();
      query.docs.map(doc => {
        this.setState({
          all: [...this.state.all, doc.data()],
          lastVisible: doc,
          
        });
      });


};




 renderItem = ({ item,i }) => {
   return(
     
     <Text style = {styles.text}>{'\u2022'} {item.a1}</Text>
   )
 };

  render() {
    return (
      <View style={styles.container}>
      <SafeAreaView style ={styles.droidsafearea}/>
      <ScrollView>
      <Text style = {styles.titleText}>EuroJunior</Text>
        <FlatList data={this.state.all}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
         

           
            onEndReached={() => this.fetchMore()}
            onEndReachedThreshold={0.7} />
  </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#c35ec3",
    
  },
  text:{
    color:"#FFFFFF",
    fontFamily:"Rajdhani_600SemiBold",
    fontSize:20,
    margin:"2%"
  },
  droidsafearea:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight :0
  },
  titleText:{
    color:"#FFFFFF",
    fontFamily:"Rajdhani_600SemiBold",
    fontSize:25,
    margin:"2%",
    alignSelf:"center"
  }
});
