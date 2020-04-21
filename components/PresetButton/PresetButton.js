import React from 'react';
import { StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import {useFonts} from '@use-expo/font';
import {AppLoading} from 'expo';
import { colors } from 'react-native-elements';

export default function PresetButton(props){
    const presets = props.presets
    let [fontsLoaded] = useFonts({
        'Impact': require('../../assets/fonts/Impact.otf'),
    })

    if (!fontsLoaded) {
        return <AppLoading/>;
      } else {
    if(presets !== undefined){
    const buttons = presets.map((preset,index)=>{
        return(
            <TouchableOpacity key={index} 
            style={styles.pButton} onPress={() => props.clicked(index)}>
            <Text style={styles.buttonText}>{preset.join(" - ")}</Text>
            </TouchableOpacity>)});
    return (
        <View >
            <View style={styles.buttonList}>
                {buttons}
            </View>
        </View>)}
    return(
        null
    )}
}

const styles = StyleSheet.create({
    buttonText:{
        fontFamily:'Impact',
        fontSize:18,
        color:'white',
    },
    pButton:{
        alignItems:'center',
        backgroundColor:"#8C030E",
        borderStyle:'solid',
        borderRadius:50,
        borderWidth:5,
        borderColor:'#6F6F6F',
        height:30,
        marginRight:5,
        marginTop:5,
        marginLeft:10
    },
    buttonList:{
        flexDirection:'row',
        flexWrap:'wrap',
        // width:500
    }
})