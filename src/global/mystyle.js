import { StyleSheet, Dimensions } from 'react-native'

import { colors,parameters } from './styles'

const SCREEN_WIDTH = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.black,
        paddingBottom:30,
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

    image1:{

      height:100,
      width:100,

    },

    image2:{height:60,width:60,
            borderRadius:30,
          },

    home:{
     backgroundColor: '#181818',
     paddingBottom:5,
     paddingHorizontal: 20,
     marginRight: 10,
     borderRadius:20,
     marginBottom: 10
    },

    text1:{
     color:'#00A7E3',
     fontSize:14,
     paddingBottom:20,
     paddingTop:20,
     flex: 1,
     textAlign: 'center',
    },

    text2:{
     color:colors.white,
     fontSize:12,
    },

    view1:{
     flex:1,
     paddingTop:10,
     paddingLeft:10
    },

    button1:{
      height:40,
      width:150,
      backgroundColor:colors.blue,
      borderRadius:20,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },

    button1Text:{
     color:colors.white,
     fontSize:17,
     marginTop:-2

    },
    card:{
     alignItems:"center",
     margin:SCREEN_WIDTH/22

    },

    view2:{marginBottom:5,
          borderRadius:15,
          backgroundColor:colors.grey6
        },

        title:{
          color:colors.black,
          fontSize:16
        },
    view3:{flexDirection:"row",
             marginTop :5,
             height:25,
             backgroundColor:'#181818',
             alignItems:"center",
            marginHorizontal:5

             },
    text3:{marginLeft:15,
            fontSize:20,
            color:colors.black
      },

    view4:{ flexDirection:"row",
            alignItems:"center",
            marginRight:15,
            backgroundColor:"white",
            paddingHorizontal:10,
            paddingVertical:2,
            borderRadius:20
            },

    view5:{ flexDirection:"row",
    alignItems:"center",
    backgroundColor:"white",
    paddingVertical:25,
    justifyContent:"space-between",
    marginHorizontal:15,
    borderBottomColor:colors.grey4,
    borderBottomWidth:1,
    flex:1
    },

    view6:{


    alignItems:"center",
    flex:5,
    flexDirection:"row"
    },
    view7:{
    backgroundColor:colors.grey6,
    height:40,
    width:40,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginRight:20

    },

    map:{

    height: 150,
     marginVertical: 0,
     width:SCREEN_WIDTH*0.92
    },

    text4:{ fontSize:13,
          color:'#5E5E5E',
        },

    icon1:  {marginLeft:10,
           marginTop:5
          },

    view8: {
          marginTop:-15,
          marginBottom:15
        } ,
    view9: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    } ,
    carsAround: {
    width: 28,
    height: 14,

    }, 

    location: {
      width: 16,
      height: 16,
      borderRadius:8,
      backgroundColor:colors.blue,
      alignItems:"center",
      justifyContent:"center"

      }, 

    view10:{width:4,
    height:4,
    borderRadius:2,
    backgroundColor:"white"
    },

    text5:{
        fontSize:14,
        color:colors.white,
        marginTop: 40,
        marginBottom: 20
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  text6:{
    color:colors.white,
    fontSize:12,
    marginBottom: 5
   },

})