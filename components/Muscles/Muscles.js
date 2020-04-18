import React from 'react';
import {View,Button,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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
    const navigation = useNavigation()

    const goToBack = () =>{
        props.backSelect();
        navigation.navigate('Muscles')
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

    // if(props.back){
    //     screen =(
    //         <div >
    //         <button className={classes.latsR} onClick={props.latsSelect} />
    //         <button className={classes.latsL} onClick={props.latsSelect} />
    //         </div>
    //     )
    // }else{
    //     screen=(
    //         <div >
    //         <button className={classes.chest} onClick={props.chestSelect} />
    //         <button className={classes.abs} onClick={props.absSelect} />
    //         <button className={classes.legsL} onClick={props.legsSelect} />
    //         <button className={classes.legsR} onClick={props.legsSelect} />
    //         <button className={classes.bicepsL} onClick={props.bicepsSelect} />
    //         <button className={classes.bicepsR} onClick={props.bicepsSelect} />
    // </div>
    // )
    // }

    return(
        <View >
            <View style={styles.topButtons}>
                <TouchableOpacity style={props.back ? styles.front : styles.frontClicked} 
                    onPress={props.frontSelect}>
                    <Text>Front Muscles</Text>
                </TouchableOpacity>
                <TouchableOpacity style={props.back ? styles.backClicked : styles.back} 
                    onPress={props.backSelect}>
                    <Text>Back Muscles</Text>
                </TouchableOpacity>
            </View>
            {props.checkEmpty ? null: <Text>{array.join(" ")}</Text>}
            <Image style={styles.image}
            source={image} 
            alt="Front facing person muscles" />
            {/* {screen} */}
            {<TouchableOpacity style={props.checkEmpty ? styles.presetGrey: styles.preset} 
            onClick={props.checkEmpty ? null : props.savePreset} >
            <Text>Save Muscles</Text>
            </TouchableOpacity>}
            {<TouchableOpacity style={props.checkEmpty ? styles.findGrey: styles.find} 
            onClick={props.checkEmpty ? null : props.findClicked} >
            <Text>Find buddy</Text>
            </TouchableOpacity>}
        </View>
        )
}

const styles = StyleSheet.create({
    topButtons:{
        top:10,
        flexDirection:'row',
    },
    front:{
        backgroundColor:'#8C030E',
       
    },
    frontClicked:{
        backgroundColor:'salmon',
        width:100,
        right:40,
        top:20
    },
    back:{
        backgroundColor:'#8C030E',
        width: 100,
        flexDirection:'row'
    },
    image:{
        height:400,
        width:190,
    }
})