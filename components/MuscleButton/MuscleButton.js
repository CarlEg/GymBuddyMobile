import React from 'react';
import { StyleSheet,Text,TouchableOpacity} from 'react-native';
import {useFonts} from '@use-expo/font';
import {AppLoading} from 'expo';

export default function MuscleButton(props){
    
    let [fontsLoaded] = useFonts({
        'Impact': require('../../assets/fonts/Impact.otf'),
    })

    if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return(
        
          <TouchableOpacity style={styles.muscleButton}
            onPress={props.muscleSelected} >
            <Text style={styles.muscleButtonText}>Choose{"\n"}Muscles</Text></TouchableOpacity>
    )};
};

const styles = StyleSheet.create({
    muscleButtonText:{
        color:'white',
        fontSize:30,
        fontFamily:'Impact',
        alignSelf:'center',
        top:35,
    },
    muscleButton:{
        backgroundColor:'#8C030E',
        borderStyle:'solid',
        borderRadius:50,
        borderWidth:5,
        borderColor:'#6F6F6F',
        width:175,
        height:150,
        shadowOffset:{width:100,height:100},
        shadowColor:'black',
        shadowOpacity:1.0,
      },
})