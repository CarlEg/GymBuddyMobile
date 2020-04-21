import React from 'react';
import { StyleSheet,Text,View} from 'react-native';
import {useFonts} from '@use-expo/font';
import {AppLoading} from 'expo';

export default function PresetHeading(props){
    const presets = props.presets
    let [fontsLoaded] = useFonts({
        'Impact': require('../../assets/fonts/Impact.otf'),
    })

    if (!fontsLoaded) {
        return <AppLoading/>;
    }else{
        return(
            <View style={styles.presetTitle}>
            {props.isPresetEmpty ? <Text style={styles.heading}>No Muscles sets</Text>
            : <Text style={styles.heading}>Muscle Sets</Text>}
            </View>)
        }
}

const styles = StyleSheet.create({
    presetTitle:{
        alignItems:'center',
        backgroundColor:"#8C030E",
        borderStyle:'solid',
        borderRadius:50,
        borderWidth:5,
        borderColor:'#6F6F6F',
        width:150
    },
    heading:{
        fontFamily:'Impact',
        fontSize:22,
        color:'white',
      },
})