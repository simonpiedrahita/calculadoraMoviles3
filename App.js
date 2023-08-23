import { useState,useEffect } from 'react';
import { StyleSheet, Text, View ,TextInput,Button,TouchableOpacity } from 'react-native';
import Banner from './components/Banner';
import Footer from './components/Footer';
import {styles, myimage} from './assets/styles/styles1'

export default function App() {
  //states
  const [value1,setValue1] = useState('');
  const [value2,setValue2] = useState('');
  const [result,setResult]= useState('');
  

  let mymess = "Este es el pie de la GUI";
  let mimage= "calc2.jpg";
  return (
    /* pendiente organizar los css en el archivo y no quemado */
    <View style={styles.container}>
        <Banner imagename={mimage}></Banner>
        <View style={{flex:4,/* borderWidth:2,borderColor:'red', */backgroundColor:'gray',justifyContent:'center',alignItems:'center',width:'100%',margin:'10px  10px'}}>
          <text>Calculadora</text>
          <Text style={styles.wTittle} >valor 1</Text>
          <TextInput /* style={{backgroundColor:'#FFFFFF',padding:'10px 10px',borderColor:'yellow',borderRadius:'7px',fontColor:'black'}} */
            placeholder='Ingrese Valor 1'
            onChangeText={value1 => setValue1(value1)}
            value={value1}
            style={styles.tInputs}
          />
          <Text style={styles.wTittle} >valor 2</Text>
          <TextInput /* style={{backgroundColor:'#FFFFFF',padding:'10px 10px',borderColor:'yellow',borderRadius:'7px',fontColor:'black'}} */
            placeholder='Ingrese Valor 1'
            onChangeText={value2 => setValue2(value2)}
            value={value2}
            style={styles.tInputs}
          />
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{borderWidth:'1px',padding:'5px 5px',margin:'5px'}} >
              <Text style={{fontWeight:'bold',fontSize:'22px'}} >+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth:'1px',padding:'5px 5px',margin:'5px'}} >
              <Text style={{fontWeight:'bold',fontSize:'22px'}} >-</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={{flex:1}}>
        <Footer message ="este es el footer "></Footer>
      </View>
      {/*  <Text style={[styles.texts,{fontWeight:'bold',color:'blue'}]}>Mi Calculadora Básica</Text>
      <Text style={{color:'gray',backgroundColor:'black'}}>Calculando...</Text> */}
      <Footer message={mymess}/>
    </View>
  );
}





