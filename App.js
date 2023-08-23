import { StyleSheet, Text, View } from 'react-native';
import Banner from './components/Banner';
import Footer from './components/Footer';
import {styles, myimage} from './assets/styles/styles1'

export default function App() {
  let mymess = "Este es el pie de la GUI";
  let mimage= "calc2.jpg";
  return (
    <View style={styles.container}>
        <Banner imagename={mimage}></Banner>
       <Text style={[styles.texts,{fontWeight:'bold',color:'blue'}]}>Mi Calculadora Básica</Text>
      <Text style={{color:'gray',backgroundColor:'black'}}>Calculando...</Text>
      <Footer message={mymess}/>
    </View>
  );
}





