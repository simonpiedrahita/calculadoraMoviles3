import { View, Text, Image} from "react-native";
import {styles, myimage} from '../assets/styles/styles1'


function Banner(props) {
    return (
     <Image 
        style={ {width:'500px' ,height:'700px' ,resizeMode:'stretch'}}
        source={require(`../assets/images/${props.imagename}`)}
      />
    );
}

export default Banner;
  