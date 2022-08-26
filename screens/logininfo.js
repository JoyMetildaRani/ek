import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';



const kid1 = 'https://firebasestorage.googleapis.com/v0/b/mypro-461be.appspot.com/o/kid1.png?alt=media&token=c3433d2a-3169-493e-bdf2-10c211e5b5dd'

const kid2 = 'https://firebasestorage.googleapis.com/v0/b/mypro-461be.appspot.com/o/kid2.png?alt=media&token=a3af67b9-536c-46fe-8f93-c48f58457ada'

export default class logininfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: this.props.email,
      details_name: '',
      details_class: '',
      details_leave_taken: '',
      details_dob: '',
     kidimage :''
    };
  }

  componentDidMount = async () => {
    this.getDetails();
    this.valueofimage();
  };

  componentDidUpdate = async () => {
    this.getDetails();
  };


valueofimage = async () =>{
  if (this.state.info === "metilda.rani@gmail.com") {
      this.setState({kidimage : kid1})
  }
  else{
    this.setState({kidimage : kid2})
  }
}
 


  getDetails = async () => {
    db.collection('students')
      .where('email_id', '==', this.state.info)
      .get()
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          this.setState({
            details_name: doc.data().student_name,
            details_class: doc.data().class_name,
            details_leave_taken: doc.data().number_of_days_leave,
            details_dob: doc.data().dob,
          });
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.uppercontainer}>
          <Text style={styles.hello}>Hello {this.state.details_name}</Text>
        </View>
        <View style={styles.lowercontainer}>
          <Image
            source={{ uri: this.state.kidimage }}
            style={{ width: 150, height: 150,borderRadius:35,alignSelf:"center" }}></Image>

          <Text style={styles.textstyle}>
            Class : {this.state.details_class}
          </Text>
          <Text style={styles.textstyle}>DOB : {this.state.details_dob}</Text>
          <Text style={styles.textstyle}>
            Leave Forms Submitted : {this.state.details_leave_taken}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e31945',
    borderColor: '#FFFFFF',
    borderRadius: 25,
  },
  hello: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: '30%',
   fontFamily: 'Rajdhani_600SemiBold',
  },

  uppercontainer: {
    flex: 0.3,
  },
  lowercontainer: {
    flex: 0.7,
  },

  textstyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Rajdhani_600SemiBold',
  },
});
