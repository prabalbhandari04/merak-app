import React from 'react'
import { StyleSheet,Text,View } from 'react-native-web'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const App = () => {
  return (
    <View>
      <Text>Yes</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:Colors.white,
    paddingBottom:30,
  },
  header : {

    backgroundColor : Colors.blue,
    paddingTop : parameters.statusBarHeight,
    height : parameters.headerHeight,
    alignItems : 'flex-start',
  },
  
  image1 : {
    width : '100',
    height : '100',
  },

  image2 : {
    width : '60',
    height : '60',
    borderRadius : '30',
  },

  home : {
    backgroundColor : Colors.blue,
    paddingLeft : '20',
  },

  text1 : {
    color : Colors.white,
    fontSize : 21,
    paddingBottom : 20,
    paddingTop : 20
  },

  text2 : {
    color : Colors.white,
    fontSize : 16
  },

  view1 : {
    flexDirection : "row",
    flex : 1,
    paddingTop : 30,
  },

  button1 : {
    height : 40,
    width : 150,
    backgroundColor : Colors.black,
    borderRadius : 20,
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 30
  },

 button1Text : {
  color:Colors.white,
  fontSize : 16,
  marginTop : -2
 },

 card : {
  alignItems : "center",
  margin : SCREEN_WIDTH/22
 },

 view2 : {
  marginBottom : 5,
  borderRadius : 15,
  backgroundColor : Colors.grey6
  },

  title:{
    color : Colors.black,
    fontSize : 18
  },

  
 }
