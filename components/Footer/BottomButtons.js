import React from 'react';
import { StyleSheet, View, Image,TouchableOpacity } from 'react-native';
import homeIcon from '../../assets/images/navigation/home.png'
import homeBlack from '../../assets/images/navigation/homeBlack.png'
import muscleIcon from '../../assets/images/navigation/muscleWhite.png'
import muscleBlack from '../../assets/images/navigation/muscle.png'
import messageIcon from '../../assets/images/navigation/messageWhite.png'
import messageBlack from '../../assets/images/navigation/messageFilled.png'
import { white } from 'ansi-colors';

export default function Footer(props){

    let btns

    if(props.homeTrue){
        btns =
            <View style={styles.container}>
                <View style={styles.bottomButtons}>
                    <TouchableOpacity style={styles.salmon}>
                        <Image style={styles.img} source={homeBlack}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={props.musclePressed}>
                        <Image style={styles.img} source={muscleIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={props.messagePressed}>
                        <Image style={styles.img} source={messageIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        
    }else if(props.muscleTrue){
        btns =
        <View style={styles.container}>
            <View style={styles.bottomButtons}>
                <TouchableOpacity onPress={props.homePressed}>
                    <Image style={styles.img} source={homeIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.salmon}>
                    <Image style={styles.img} source={muscleBlack}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={props.messagePressed}>
                    <Image style={styles.img} source={messageIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    }else if(props.messageTrue){
        btns =
        <View style={styles.container}>
            <View style={styles.bottomButtons}>
                <TouchableOpacity onPress={props.homePressed}>
                    <Image style={styles.img} source={homeIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={props.musclePressed}>
                    <Image style={styles.img} source={muscleIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.salmon}>
                    <Image style={styles.img} source={messageBlack}
                    />
                </TouchableOpacity>
            </View>
        </View>
    }
    return btns
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomButtons: {
        backgroundColor: '#8C030E',
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        
    },
    button:{
        width:50,
        height:50,
    },
    img:{
        width:50,
        height:50,
    },salmon:{
        width:50,
        height:50,
        backgroundColor:'#F25050',
    },
})