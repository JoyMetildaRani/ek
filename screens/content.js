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
} from 'react-native';
import db from '../config';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: '',
      date_content: '',
      content_one: '',
      content_two: '',
      content_three: '',
      content_four: '',
      content_five: '',
    };
  }

  componentDidMount = async () => {
    this.getData();
  };

  getData = () => {
    db.collection('contentday')

      .get()
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          this.setState({
            week: doc.data().week,
            date_content: doc.data().date_content,
            content_one: doc.data().content_one,
            content_two: doc.data().content_two,
            content_three: doc.data().content_three,
            content_four: doc.data().content_four,
            content_five: doc.data().content_five,
          });
        });
      });
  };

  render() {
    const {
      week,
      date_content,
      content_one,
      content_two,
      content_three,
      content_four,
      content_five,
    } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidsafearea} />
        <Text style={styles.textTitle}>EuroJunior</Text>
        <View style={{ flexDirection: 'row' }}>
          <ImageBackground
            source={require('../assets/buddyone.png')}
            style={styles.imagestyle}
          />

          <TouchableOpacity style={styles.touch}>
            <Text style={styles.texttopic}>{week}</Text>
            <Text style={styles.texttopic}>---------------</Text>
            <Text style={styles.texttopic}>{date_content}</Text>

            <Text style={styles.text}>
              {'\u2022'} {content_one}
            </Text>
            <Text style={styles.text}>
              {'\u2022'} {content_two}
            </Text>
            <Text style={styles.text}>
              {'\u2022'} {content_three}
            </Text>
            <Text style={styles.text}>
              {'\u2022'} {content_four}
            </Text>
            <Text style={styles.text}>
              {'\u2022'} {content_five}
            </Text>
          </TouchableOpacity>
        </View>
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
    width: '55%',
    height: '80%',
    marginTop: '20%',
    borderRadius: 15,
    marginLeft: '2%',
  },
  imagestyle: { width: 150, height: 550 },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Rajdhani_600SemiBold',
    fontSize: 23,
    margin: 7,
  },
  texttopic: {
    color: '#FFFFFF',
    fontFamily: 'Rajdhani_600SemiBold',
    alignSelf: 'center',
    fontSize: 25,
    margin: 2,
  },
  droidsafearea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
