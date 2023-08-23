import { View, Text, Image} from "react-native";
import {styles, myimage} from '../assets/styles/styles1'


function Banner(props) {
    return (
     <Image 
        style={ {width:'300px' ,height:'100px' ,resizeMode:'stretch', background:'black',padding:'0 10px 0 10px',margin:'10%',borderWidth:'2px',borderColor:'green'} }
        source={require(`../assets/images/${props.imagename}`)}
      />
    );
}

export default Banner;
  