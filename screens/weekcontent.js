import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  ToastAndroid,
  Alert,
  Modal,
  Button,
} from 'react-native';
import db from '../config';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
      dayone: '',
      daytwo: '',
      daythree: '',
      dayfour: '',
      dayfive: '',
      onedate: '',
      twodate: '',
      threedate: '',
      fourdate: '',
      fivedate: '',
      detail_d1c1: '',
      detail_d1c2: '',
      detail_d1c3: '',
      detail_d1c4: '',
      detail_d1c5: '',
      detail_d2c1: '',
      detail_d2c2: '',
      detail_d2c3: '',
      detail_d2c4: '',
      detail_d2c5: '',
      detail_d3c1: '',
      detail_d3c2: '',
      detail_d3c3: '',
      detail_d3c4: '',
      detail_d3c5: '',
      detail_d4c1: '',
      detail_d4c2: '',
      detail_d4c3: '',
      detail_d4c4: '',
      detail_d4c5: '',
      detail_d5c1: '',
      detail_d5c2: '',
      detail_d5c3: '',
      detail_d5c4: '',
      detail_d5c5: '',
      isVisible1: false,
      isVisible2:false,
      isVisible3:false,
      isVisible4:false,
      isVisible5:false,
      detail: '',
    };
  }

  componentDidMount = async () => {
    this.getData();
    this.popupdata();
  };

  popupdata = () => {
    db.collection('contentweekModal')
      .get()
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          this.setState({
            detail_d1c1: doc.data().detail_d1c1,
            detail_d1c2: doc.data().detail_d1c2,
            detail_d1c3: doc.data().detail_d1c3,
            detail_d1c4: doc.data().detail_d1c4,
            detail_d1c5: doc.data().detail_d1c5,
            detail_d2c1: doc.data().detail_d2c1,
            detail_d2c2: doc.data().detail_d2c2,
            detail_d2c3: doc.data().detail_d2c3,
            detail_d2c4: doc.data().detail_d2c4,
            detail_d2c5: doc.data().detail_d2c5,
            detail_d3c1: doc.data().detail_d3c1,
            detail_d3c2: doc.data().detail_d3c2,
            detail_d3c3: doc.data().detail_d3c3,
            detail_d3c4: doc.data().detail_d3c4,
            detail_d3c5: doc.data().detail_d3c5,
            detail_d4c1: doc.data().detail_d4c1,
            detail_d4c2: doc.data().detail_d4c2,
            detail_d4c3: doc.data().detail_d4c3,
            detail_d4c4: doc.data().detail_d4c4,
            detail_d4c5: doc.data().detail_d4c5,
            detail_d5c1: doc.data().detail_d5c1,
            detail_d5c2: doc.data().detail_d5c2,
            detail_d5c3: doc.data().detail_d5c3,
            detail_d5c4: doc.data().detail_d5c4,
            detail_d5c5: doc.data().detail_d5c5,
          });
          console.log(doc);
          console.log(doc.data().detail_d1c1);
          console.log(this.state.detail_d1c1);
          console.log(this.state.detail_d1c2);
        });
      });

    console.log('hello');
  };

  getData = () => {
    db.collection('content')

      .get()
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          this.setState({
            one: doc.data().one,
            two: doc.data().two,
            three: doc.data().three,
            four: doc.data().four,
            five: doc.data().five,
            dayone: doc.data().dayone,
            daytwo: doc.data().daytwo,
            daythree: doc.data().daythree,
            dayfour: doc.data().dayfour,
            dayfive: doc.data().dayfive,
            onedate: doc.data().onedate,
            twodate: doc.data().twodate,
            threedate: doc.data().threedate,
            fourdate: doc.data().fourdate,
            fivedate: doc.data().fivedate,
          });
        });
      });
  };

  render() {
    const {
      one,
      two,
      three,
      four,
      five,
      dayone,
      daytwo,
      daythree,
      dayfour,
      dayfive,
      onedate,
      twodate,
      threedate,
      fourdate,
      fivedate,
    } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidsafearea} />

        <Text style={styles.textTitle}>EuroJunior</Text>

        <Modal
          animationType={'fade'}
          transparent={false}
          visible={this.state.isVisible1}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          {/*All views of Modal*/}
          <View style={styles.modal}>
          <Text style={styles.textmodal}>{one}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d1c1}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d1c2}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d1c3}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d1c4}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d1c5}</Text>

            <Button
              title="Close X"
              onPress={() => {
                this.setState({ isVisible1: !this.state.isVisible1 });
              }}
            />
          </View>
        </Modal>
        

        <TouchableOpacity
          style={styles.touch}
          onPress={() => {
            this.setState({ isVisible1: true });
          }}>
          <Text style={styles.text}>{one}</Text>
        </TouchableOpacity>

        <Text style={styles.textcontent}>{dayone}</Text>
        <TouchableOpacity style={styles.datetouch}>
          <Text style={styles.text}>{onedate}</Text>
        </TouchableOpacity>

        <Modal
          animationType={'fade'}
          transparent={false}
          visible={this.state.isVisible2}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          {/*All views of Modal*/}
          <View style={styles.modal}>
          <Text style={styles.textmodal}>{two}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d2c1}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d2c2}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d2c3}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d2c4}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d2c5}</Text>

            <Button
              title="Close X"
              onPress={() => {
                this.setState({ isVisible2: !this.state.isVisible2 });
              }}
            />
          </View>
        </Modal>

        <TouchableOpacity
          style={[styles.touch, { marginTop: 50 }]}
          onPress={() => {
            this.setState({ isVisible2: true });
          }}>
          <Text style={styles.text}>{two}</Text>
        </TouchableOpacity>
        <Text style={styles.textcontent}>{daytwo}</Text>
        <TouchableOpacity style={styles.datetouch}>
          <Text style={styles.text}>{twodate}</Text>
        </TouchableOpacity>

        <Modal
          animationType={'fade'}
          transparent={false}
          visible={this.state.isVisible3}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          {/*All views of Modal*/}
          <View style={styles.modal}>
          <Text style={styles.textmodal}>{three}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d3c1}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d3c2}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d3c3}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d3c4}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d3c5}</Text>

            <Button
              title="Close X"
              onPress={() => {
                this.setState({ isVisible3: !this.state.isVisible3 });
              }}
            />
          </View>
        </Modal>

        <TouchableOpacity
          style={[styles.touch, { marginTop: 50 }]}
          onPress={() => {
            this.setState({ isVisible3: true });
          }}>
          <Text style={styles.text}>{three}</Text>
        </TouchableOpacity>
        <Text style={styles.textcontent}>{daythree}</Text>
        <TouchableOpacity style={styles.datetouch}>
          <Text style={styles.text}>{threedate}</Text>
        </TouchableOpacity>

        <Modal
          animationType={'fade'}
          transparent={false}
          visible={this.state.isVisible4}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          {/*All views of Modal*/}
          <View style={styles.modal}>
          <Text style={styles.textmodal}>{four}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d4c1}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d4c2}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d4c3}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d4c4}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d4c5}</Text>

            <Button
              title="Close X"
              onPress={() => {
                this.setState({ isVisible4: !this.state.isVisible4 });
              }}
            />
          </View>
        </Modal>

        <TouchableOpacity
          style={[styles.touch, { marginTop: 50 }]}
          onPress={() => {
            this.setState({ isVisible4: true });
          }}>
          <Text style={styles.text}>{four}</Text>
        </TouchableOpacity>
        <Text style={styles.textcontent}>{dayfour}</Text>
        <TouchableOpacity style={styles.datetouch}>
          <Text style={styles.text}>{fourdate}</Text>
        </TouchableOpacity>

        <Modal
          animationType={'fade'}
          transparent={false}
          visible={this.state.isVisible5}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          {/*All views of Modal*/}
          <View style={styles.modal}>
          <Text style={styles.textmodal}>{five}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d5c1}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d5c2}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d5c3}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d5c4}</Text>
            <Text style={styles.textmodal}>{this.state.detail_d5c5}</Text>

            <Button
              title="Close X"
              onPress={() => {
                this.setState({ isVisible5: !this.state.isVisible5 });
              }}
            />
          </View>
        </Modal>

        <TouchableOpacity
          style={[styles.touch, { marginTop: 50 }]}
          onPress={() => {
            this.setState({ isVisible5: true });
          }}>
          <Text style={styles.text}>{five}</Text>
        </TouchableOpacity>
        <Text style={styles.textcontent}>{dayfive}</Text>
        <TouchableOpacity style={styles.datetouch}>
          <Text style={styles.text}>{fivedate}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00cdff',
  },
  textTitle: {
    color: '#FFFFFF',
   fontFamily: 'Rajdhani_600SemiBold',
    fontWeight: 'bold',
    marginLeft: '28%',
    fontSize: 28,
    marginTop: 20,
    marginBottom: 30,
  },
  touch: {
    backgroundColor: '#c35ec3',
    width: '26%',
    height: '10%',
    marginTop: '2%',
    borderRadius: 15,
    marginLeft: '2%',
  },

  text: {
    color: '#FFFFFF',
   fontFamily: 'Rajdhani_600SemiBold',
    fontSize: 20,
    margin: 7,
    alignSelf: 'center',
  },
  textmodal: {
    color: '#FFFFFF',
    fontFamily: 'Rajdhani_600SemiBold',
    fontSize: 20,
    margin: 7,
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  textcontent: {
    fontSize: 18,
    color: '#FFFFFF',
    alignSelf: 'center',

    marginTop: '-15%',
  },
  datetouch: {
    backgroundColor: '#c35ec3',
    width: '26%',
    height: '10%',
    marginTop: '-11%',
    borderRadius: 15,
    marginLeft: '72%',
  },
  droidsafearea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    height: 300,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 80,
    marginLeft: 40,
  },
});
