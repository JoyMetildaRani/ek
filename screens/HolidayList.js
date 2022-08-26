import * as React from "react";
import {View,Text,Image,StyleSheet,Dimensions,Modal} from 'react-native';


const holidayimg = require('../assets/holidaylist.png')
   
export default class HolidayList extends React.Component{

  
  render(){
  return (
    
           <View style = {styles.container}>
            
                <Image source={holidayimg} style = {styles.holidayimg} />
               
           </View>

           
  )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
   
  },
holidayimg:{
   width: Dimensions.get('window').width,
    height: Dimensions.get('window').width+100,
    resizeMode: "cover",
    marginTop: 80,
    alignItems:"center",
    justifyContent:"center"
},
 
})