import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  RefreshControl,
  Image,
  Dimensions
} from "react-native";
import { Avatar, ListItem, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import db from "../config";

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTransactions: [],
      lastVisibleTransaction: null,
      email: this.props.email,
   
    };
  }
  componentDidMount = async () => {
    this.getTransactions();
  
  };



  getTransactions = () => {

    db.collection("leaveforms")
    .where("email", "==", this.state.email)
      .limit(10)
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          this.setState({
            allTransactions: [...this.state.allTransactions, doc.data()],
            lastVisibleTransaction: doc,
           
          });
        });
      });
  

  };

 
 


  fetchMoreTransactions = async () => {


    const { lastVisibleTransaction, allTransactions } = this.state;
   
      const query = await db
        .collection("leaveforms")
        .where("email", "==", this.state.email)
        .startAfter(lastVisibleTransaction)
        .limit(10)
        .get();
      query.docs.map(doc => {
        this.setState({
          allTransactions: [...this.state.allTransactions, doc.data()],
          lastVisibleTransaction: doc,
          
        });
      });
        

 //this.props.setUpdateToFalse();


  };

  renderItem = ({ item, i }) => {
    var date = item.todaysdate
      .toDate()
      .toString()
      .split(" ")
      .splice(0, 4)
      .join(" ");

    
    return (

   
      <View style={{ borderWidth: 1, backgroundColor:"#f3c761", borderColor:"#FFFFFF"}}>
  
      <TouchableOpacity style ={{ flexDirection:"row"}}>
      <Icon type={"antdesign"} name={"rightcircle"} size={40} />
     
        
      <Text style = {styles.title}>   {item.reason}</Text>
        <Text style = {styles.title}>   {item.date_of_leave}</Text>
        
        
       
      </TouchableOpacity>
        <ListItem key={i} bottomDivider>
          <Icon type={"antdesign"} name={"book"} size={40} />
          <ListItem.Content>
            <ListItem.Title style={styles.title}>
              {`${item.student_name} ( ${item.class_name} )`}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.subtitle}>
              {`Date of Leave ${item.date_of_leave}`}
            </ListItem.Subtitle>
            <View style={styles.lowerLeftContaiiner}>
              <View style={styles.transactionContainer}>
                
                <Icon
                  type={"ionicon"}
                  name={
                    "book"
                    
                  }
                  color={
                     "#0364F4"
                  }
                />
              </View>
              <Text style={styles.date}>{date}</Text>
            </View>
          </ListItem.Content>
        </ListItem>
      </View>
    );
  };

  render() {
    const { allTransactions } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.textinputContainer}>

         <Image source = {require("../assets/lehi.png")} style={styles.image}></Image>
          
         
          </View>
        </View>
        <View style={styles.lowerContainer}>


       
           <FlatList
            data={allTransactions}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
                   
            onEndReached={() => this.fetchMoreTransactions()}
            onEndReachedThreshold={0.7}
          /> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5653D4"
  },
  upperContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  textinputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#9DFD24",
    borderColor: "#FFFFFF"
  },
  image:{
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').width+100,
    resizeMode:"cover"
  },
  textinput: {
    width: "57%",
    height: 50,
    padding: 10,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#5653D4",
    fontFamily: "Rajdhani_600SemiBold",
    color: "#FFFFFF"
  },
  scanbutton: {
    width: 100,
    height: 50,
    backgroundColor: "#9DFD24",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  scanbuttonText: {
    fontSize: 24,
    color: "#0A0101",
    fontFamily: "Rajdhani_600SemiBold"
  },
  lowerContainer: {
    flex: 0.8,
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: 20,
    marginTop:"3%",
    marginBottom:"3%",
    color:"#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold"
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Rajdhani_600SemiBold"
  },
  lowerLeftContaiiner: {
    alignSelf: "flex-end",
    marginTop: -40
  },
  transactionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  transactionText: {
    fontSize: 20,

    fontFamily: "Rajdhani_600SemiBold"
  },
  date: {
    fontSize: 12,
    fontFamily: "Rajdhani_600SemiBold",
    paddingTop: 5
  }
});
