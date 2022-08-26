import React, { Component } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Logout from "../screens/Logout";
import Logininfo from "../screens/logininfo";
import Holiday from "../screens/HolidayList";
import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";
import History from "../screens/history";
import Content from '../screens/content';
const Drawer = createDrawerNavigator();
import Ionicons from "react-native-vector-icons/Ionicons";
import Contentoftheweek from '../screens/weekcontent';
import Announcements from '../screens/Announcements';






export default class DrawerNavigator extends Component {




//  changeUpdated = () => {
//     console.log('31')
//     this.setState({ isUpdated: true });
//   };

//   removeUpdated = () => {
//     console.log('35')
//     this.setState({ isUpdated: false });
//   };

renderfeed = props => {
  return <TransactionScreen email={this.props.navigation.getParam("email")}/>



}

renderfe = props => {
  return <History email={this.props.navigation.getParam("email")}/>
}


ren = props =>{
  return <Logininfo email = {this.props.navigation.getParam("email")}/>
}

logo = props =>{
  return <Logout navigation = {this.props.navigation.navigate("LoginScreen")}/>
}





  render() {
    let props = this.props;
    return (

      <NavigationContainer>
      <Drawer.Navigator screenOptions = {{headerShown:true,headerTintColor:"#792d8f",
      
       drawerActiveBackgroundColor:"#e11584",
      drawerActiveTintColor:"#FFFFFF"}} 
       
      >
    


    
        <Drawer.Screen
          name="Home"
          component={this.ren} options={{
            unmountOnBlur:true,
           title: 'Home',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="md-home"
                 size={size}
                 color={focused ? '#FFFFFF' : '#f699cd'}
                       />
           ),
        }}
        />

        <Drawer.Screen
          name="Content"
          component={Content}  options={{
            unmountOnBlur:true,
           title: 'My Day at EuroKids',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="book"
                 size={size}
                 color={focused ? '#FFFFFF' : '#f699cd'}
                       />
           ),
        }}
     
        />

        <Drawer.Screen
          name="Leave Form"
          component={this.renderfeed} options={{
            unmountOnBlur:true,
           title: 'Leave Form',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="send"
                 size={size}
                 color={focused ? '#FFFFFF' : '#f699cd'}
                       />
           ),
        }}
     
        />
    


     <Drawer.Screen
          name="Week Content"
          component={Contentoftheweek}  options={{
            unmountOnBlur:true,
           title: 'Content of the Week',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="book"
                 size={size}
                 color={focused ? '#FFFFFF' : '#f699cd'}
                       />
           ),
        }}
     
        />




        <Drawer.Screen
          name="Leave History"
          component={this.renderfe} options={{
            unmountOnBlur:true,
           title: 'Leave History',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="archive"
                 size={size}
                 color={focused ? '#FFFFFF' : '#f699cd'}
                       />
           ),
        }}
     
        />
          <Drawer.Screen
          name="Holiday List"
          component={Holiday} options={{
            unmountOnBlur:true,
           title: 'Holiday List',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="bookmark"
                 size={size}
                 color={focused ? '#FFFFFF' : '#f699cd'}
                       />
           ),
        }}
     
        />


         <Drawer.Screen
          name="Annoucements"
          component={Announcements} options={{
            unmountOnBlur:true,
           title: 'Announcements',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="megaphone-outline"
                 size={size}
                 color={focused ? '#FFFFFF' : '#f699cd'}
                       />
           ),
        }}
     
        />


  <Drawer.Screen
          name="Logout"
          component={this.logo} options={{
            unmountOnBlur:true,
           title: 'Logout',
           drawerIcon: ({focused, size}) => (
            
              <Ionicons
                 name="log-out-outline"
                 size={size}
                 color={focused ? '#FFFFFF' : '#f699cd'}
                       />
           ),
        }}
     
        />

        
      </Drawer.Navigator>

      </NavigationContainer>
    );
  }
}
