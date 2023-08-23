import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'cian',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texts:{
      color:'red',
      fontSize:'22'
    },
    tInputs:{
      backgroundColor:'#FFFFFF',
      padding:'10px 10px',
      borderColor:'yellow',
      borderRadius:'7px',
      fontColor:'black',            
    },
    wTittle:{
      fontSize:'20px',
      color:'#FFFFFF',
    }
     
  });

  const myimage = StyleSheet.create({
    images:{
        width:'100%',
        height:'100%'
    }
  })

  export {styles, myimage}