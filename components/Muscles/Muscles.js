import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import {useFonts} from '@use-expo/font';
import {AppLoading} from 'expo';
import Unorderedlist from 'react-native-unordered-list';

import personFront from '../../assets/images/muscles/front_of_person.png';
import chest from '../../assets/images/muscles/chest.png';
import abs from '../../assets/images/muscles/abs.png';
import legs from '../../assets/images/muscles/legs.png';
import biceps from '../../assets/images/muscles/biceps.png';
import wholeBody from '../../assets/images/muscles/wholeFrontBody.png';
import back from '../../assets/images/muscles/back.png';

import chestAbs from '../../assets/images/muscles/absAndChest.png';
import chestBiceps from '../../assets/images/muscles/chestAndBiceps.png';
import chestLegs from '../../assets/images/muscles/chestAndLegs.png';
import chestAbsBiceps from '../../assets/images/muscles/absBicepsChest.png';
import chestAbsLegs from '../../assets/images/muscles/absChestLegs.png';
import chestBicepsLegs from '../../assets/images/muscles/chestBicepsLegs.png';

import absBicepsLegs from '../../assets/images/muscles/absBicepsLegs.png';
import absBiceps from '../../assets/images/muscles/absBiceps.png';
import absLegs from '../../assets/images/muscles/absLegs.png';

import bicepsLegs from '../../assets/images/muscles/bicepsLegs.png';

import lats from '../../assets/images/muscles/lats.png';

export default function Muscles(props){
    const selectedMuscles = props.muscles;
    let image = personFront;
    let screen = null;
    let array = props.selected.sort()
    let i;
    for(i=0; i<array.length; i++){
        if(!array[i].includes('\u2022')){
            array[i] = '\u2022 ' + array[i];
            array.sort();
        }
    }

    switch (true) {
        case props.back:
        image = back
        break;
        case selectedMuscles.chest:
        //if chest is true
            if(selectedMuscles.abs && selectedMuscles.biceps && selectedMuscles.legs){
                //whole front body
                image = wholeBody;
                break;
            }else if(selectedMuscles.abs && selectedMuscles.biceps){
                //chest,abs,biceps
                image = chestAbsBiceps;
                break;
            }else if(selectedMuscles.abs && selectedMuscles.legs){
                //chest,abs,legs
                image = chestAbsLegs;
                break;
            }else if(selectedMuscles.biceps && selectedMuscles.legs){
                //chest,abs,legs
                image = chestBicepsLegs;
                break;
            }else if(selectedMuscles.abs){
                //chest,abs
                image = chestAbs;
                break;
            }else if(selectedMuscles.biceps){
                //chest,biceps
                image = chestBiceps;
                break;
            }else if(selectedMuscles.legs){
                //chest,legs
                image = chestLegs;
                break;
            }
            else{
                //chest
                image = chest;
                break;
            }
        case selectedMuscles.abs:
            if(selectedMuscles.biceps && selectedMuscles.legs){
                //abs,biceps,legs
                image = absBicepsLegs;
                break;
            }
            else if(selectedMuscles.biceps){
                //abs,biceps
                image = absBiceps;
                break;
            }else if(selectedMuscles.legs){
                //abs,legs
                image = absLegs;
                break;
            }
            else{
                //abs
                image = abs;
                break;
            }
        case selectedMuscles.biceps:
        //if biceps true
            if(selectedMuscles.legs){
                //biceps,legs
                image = bicepsLegs;
                break;
            }else{
                //biceps
                image = biceps;
                break;
            }
        case selectedMuscles.legs:
            //legs
            image = legs;
            break;
        default:
            break;
    }
    
    switch (true) {
        case props.back:
            //lats
            if(selectedMuscles.lats){
                image = lats
            }
            
            break;
    
        default:
            break;
    }

    if(props.back){
        screen =(
            <View >
            <TouchableOpacity style={styles.lLat} onPress={props.latsSelect} />
            <TouchableOpacity style={styles.rLat} onPress={props.latsSelect} />
            </View>
        )
    }else{
        screen=(
            <View >
            <TouchableOpacity style={styles.chest} onPress={props.chestSelect} />
            <TouchableOpacity style={styles.abs} onPress={props.absSelect} />
            <TouchableOpacity style={styles.lLeg} onPress={props.legsSelect} />
            <TouchableOpacity style={styles.rLeg} onPress={props.legsSelect} />
            <TouchableOpacity style={styles.lBicep} onPress={props.bicepsSelect} />
            <TouchableOpacity style={styles.rBicep} onPress={props.bicepsSelect} />
    </View>
    )
    }

    let [fontsLoaded] = useFonts({
        'Impact': require('../../assets/fonts/Impact.otf'),
    })

    if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return(
        <View >
            <View style={styles.topButtons}>
                <TouchableOpacity style={props.back ? styles.front : styles.frontClicked} 
                    onPress={props.frontSelect}>
                    <Text style={props.back ? styles.buttonTextWhite : styles.buttonTextBlack}>Front</Text>
                    <Text style={props.back ? styles.buttonTextWhite : styles.buttonTextBlack}>Muscles</Text>
                </TouchableOpacity>
                <TouchableOpacity style={props.back ? styles.backClicked : styles.back} 
                    onPress={props.backSelect}>
                    <Text style={props.back ? styles.buttonTextBlack : styles.buttonTextWhite}>Back</Text>
                    <Text style={props.back ? styles.buttonTextBlack : styles.buttonTextWhite}>Muscles</Text>
                </TouchableOpacity>
            </View>
            {props.checkEmpty ? null: <Text style={styles.list}>{array.join("\n")}</Text>}
            <Image style={styles.image}
            source={image} 
            alt="Front facing person muscles" />
            {screen}
            <View style={styles.bottomButtons}>
            {<TouchableOpacity style={props.checkEmpty ? styles.presetGrey: styles.preset} 
            onClick={props.checkEmpty ? null : props.savePreset} >
            <Text style={props.checkEmpty ? styles.buttonTextGrey: styles.buttonTextWhite}>Save</Text>
            <Text style={props.checkEmpty ? styles.buttonTextGrey: styles.buttonTextWhite}>Muscles</Text>
            </TouchableOpacity>}
            {<TouchableOpacity style={props.checkEmpty ? styles.findGrey: styles.find} 
            onClick={props.checkEmpty ? null : props.findClicked} >
            <Text style={props.checkEmpty ? styles.buttonTextGrey: styles.buttonTextWhite}>Find</Text>
            <Text style={props.checkEmpty ? styles.buttonTextGrey: styles.buttonTextWhite}>Buddy</Text>
            </TouchableOpacity>}
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    topButtons:{
        top:10,
        flexDirection:'row',
    },
    bottomButtons:{
        flexDirection:'row',
    },
    front:{
        backgroundColor:'#8C030E',
        width:100,
        right:40,
        top:20,
        borderStyle:'solid',
        borderRadius:10,
        borderWidth:5,
        borderColor:'#6F6F6F',
        alignItems:'center'
    },
    frontClicked:{
        backgroundColor:'salmon',
        width:100,
        right:40,
        top:20,
        borderStyle:'solid',
        borderRadius:10,
        borderWidth:5,
        borderColor:'#6F6F6F',
        alignItems:'center'
    },
    back:{
        backgroundColor:'#8C030E',
        width: 100,
        left:40,
        top:20,
        borderStyle:'solid',
        borderRadius:10,
        borderWidth:5,
        borderColor:'#6F6F6F',
        alignItems:'center'
    },
    backClicked:{
        backgroundColor:'salmon',
        width: 100,
        left:40,
        top:20,
        borderStyle:'solid',
        borderRadius:10,
        borderWidth:5,
        borderColor:'#6F6F6F',
        alignItems:'center'
    },
    preset:{
        backgroundColor:'#8C030E',
        borderStyle:'solid',
        right:40,
        bottom:10,
        width: 100,
        borderRadius:10,
        borderWidth:5,
        borderColor:'#6F6F6F',
        alignItems:'center'
    },
    presetGrey:{
        backgroundColor:'#6F6F6F',
        borderStyle:'solid',
        right:40,
        bottom:10,
        width: 100,
        borderRadius:10,
        borderWidth:5,
        borderColor:'#6F6F6F',
        alignItems:'center'
    },
    find:{
        backgroundColor:'#8C030E',
        borderStyle:'solid',
        left:40,
        bottom:10,
        width: 100,
        borderRadius:10,
        borderWidth:5,
        borderColor:'#6F6F6F',
        alignItems:'center'
    },
    findGrey:{
        backgroundColor:'#6F6F6F',
        borderStyle:'solid',
        left:40,
        bottom:10,
        width: 100,
        borderRadius:10,
        borderWidth:5,
        borderColor:'#6F6F6F',
        alignItems:'center'
    },
    image:{
        top:10,
        height:400,
        width:190,
    },
    buttonTextWhite:{
        color:'white',
        fontFamily:'Impact',
        fontSize:20,
    },
    buttonTextBlack:{
        color:'black',
        fontFamily:'Impact',
        fontSize:20,
    },
    buttonTextGrey:{
        color:'grey',
        fontFamily:'Impact',
        fontSize:20,
    },
    list:{
        position:'absolute',
        color:'white',
        top:100,
        left:185,
        fontFamily:'Impact',
        fontSize:20,
        backgroundColor:'#8C030E',
    },
    chest:{
        position:'absolute',
        bottom:290,
        left:60,
        width:73,
        height:35,
        borderRadius:10,
    },
    abs:{
        position:'absolute',
        bottom:240,
        left:78,
        width:35,
        height:50,
        borderRadius:10,
    },
    lBicep:{
        position:'absolute',
        bottom:250,
        left:35,
        width:20,
        height:50,
        borderRadius:10,
        transform:[{rotate:'20deg'}]
    },
    rBicep:{
        position:'absolute',
        bottom:250,
        right:45,
        width:20,
        height:50,
        borderRadius:10,
        transform:[{rotate:'-20deg'}]
    },
    lLeg:{
        position:'absolute',
        bottom:110,
        left:65,
        width:28,
        height:100,
        borderRadius:10,
    },
    rLeg:{
        position:'absolute',
        bottom:110,
        right:75,
        width:28,
        height:100,
        borderRadius:10,
    },
    lLat:{
        position:'absolute',
        bottom:250,
        left:60,
        width:28,
        height:60,
        borderRadius:10,
    },
    rLat:{
        position:'absolute',
        bottom:250,
        right:70,
        width:28,
        height:60,
        borderRadius:10,
    },
})