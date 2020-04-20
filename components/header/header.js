import React from 'react';
import { StyleSheet,Image,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import logo from '../../assets/images/Logo.png';
import backArrow from '../../assets/images/whiteArrow.png'

export default function TopBar(props){

    let header = null;

    if(props.homeSelected){
        header =(
            <Header
                containerStyle={{
                    backgroundColor:"#8C030E",
                    height:45,
                }}
               
                centerComponent={<Image style={styles.icon} source={logo}/>}
            />
        )
    }else{
        header =(
            <Header
                containerStyle={{
                    backgroundColor:"#8C030E",
                    height:45,
                }}
                leftComponent={
                    <TouchableOpacity onPress={props.goHome}> 
                        <Image style={styles.arrow} 
                            source={backArrow}/> 
                    </TouchableOpacity>}
                centerComponent={<Image style={styles.icon} source={logo}/>}
            />
        )
    }
    return(
        header
    );
};

const styles = StyleSheet.create({
    icon:{
        height:40,
        width:35,
        bottom:13
    },
    arrow:{
        height:27,
        width:38,
        bottom:13
    }
})