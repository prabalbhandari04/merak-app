import { StyleSheet, Dimensions } from 'react-native'

import { colors,parameters } from './styles'

const SCREEN_WIDTH = Dimensions.get('window').width

export const styles = StyleSheet.create({
  
  // General view

  container:{
      flex:1,
      backgroundColor:colors.black,
      paddingBottom:30,
      paddingLeft: 10,
      paddingTop:parameters.statusBarHeight,
      marginLeft: 70
  },

  header:{
    backgroundColor:colors.black,
    height:parameters.headerHeight,
    width: SCREEN_WIDTH,
    alignItems:"flex-start",
    marginBottom: 10,
    paddingTop: 20

  },

  home:{
    backgroundColor: '#181818',
    paddingBottom:5,
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius:20,
    marginBottom: 10
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

login_view: {
  flex: 1,
  justifyContent: "center",
  padding: 20,
},

content_view: {
  minHeight: 60,
  marginBottom: 25,
  justifyContent: 'space-between'
},

  // Text Style

  text_title:{
    fontSize:14,
    color:colors.white,
    marginTop: 40,
    marginBottom: 20
  },

  task_title_text:{
    color:'#00A7E3',
    fontSize:14,
    paddingBottom:20,
    paddingTop:20,
    flex: 1,
    textAlign: 'center',
  },

  task_key:{ fontSize:13,
    color:'#5E5E5E',
  },

  task_value:{
    color:colors.white,
    fontSize:12,
   },

  modal_text:{
    color:colors.white,
    fontSize:12,
    marginBottom: 5
  },

  login_title: {
    fontSize:20,
    color:colors.grey,
  },

  login_key:{
    color: '#00CFC8',
    fontSize:14,

  },

  info_text: {
   color: '#00A7E3',
   fontSize: 18
  },

  the_info: {
    color: colors.white,
    fontSize: 18
  },


  // Other Views
  
  task_detail:{
    flex:1,
    paddingTop:10,
    paddingLeft:10,
    marginTop:-15,
    marginBottom:15
  },

  task_top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  } ,

  task_each:{
    flexDirection:"row",
    marginTop :5,
    height:25,
    backgroundColor:'#181818',
    alignItems:"center",
    marginHorizontal:5
  },

  attend_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },

  dash_info: {
    flexDirection: 'row',
    backgroundColor: '#181818',
    margin: 10,
    padding: 10,
    height: 70,
    justifyContent: 'space-between',
    borderRadius: 20,
    alignItems: 'center'
  },


  // Textfield

  email_field:{
    height: 40,
    width: SCREEN_WIDTH/1.2,
    borderColor: colors.blue,
    color: colors.white,
    borderWidth: 1,
    paddingHorizontal: 5,
    
  },

  password_field:{
    height: 40,
    width: SCREEN_WIDTH/1.2,
    borderColor: colors.blue,
    color: colors.white,
    borderWidth: 1,
    paddingHorizontal: 5,
  },

  login_button:{
    maxWidth: 100,
  },

  attend_button:{
    marginHorizontal: 20,
    backgroundColor: colors.blue,
    padding: 10,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  }

})