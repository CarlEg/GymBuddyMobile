import React from 'react';
import { StyleSheet,Text,View,Image} from 'react-native';
import {useFonts} from '@use-expo/font';
import {AppLoading} from 'expo';


export default function Buddy(props){
    const data = [props.buddies];

    // const muscles = data[0].muscles.map((muscle, index)=>{
    //     return(
    //         <div className={classes.muscleList1}>
    //         <h2 key={index}>{muscle}</h2>
    //         </div>
    //     )
    // })

    const presets = props.presets
    let [fontsLoaded] = useFonts({
        'Impact': require('../../assets/fonts/Impact.otf'),
    })

    if (!fontsLoaded) {
        return <AppLoading/>;
      } else {
    const buddy = data.map((person,index) =>{
        const likes = person.likes.map((like, index) =>{
            return(
                <Text style={styles.likes} key={index}>{'\u2022 ' + like}</Text>
            )
        })
        
        const muscles = person.muscles.map((muscles, index) =>{
            return(
                <Text style={styles.muscles} key={index}>{muscles}</Text>
            )
        })

        const buddy =(
            <View style={styles.Buddy} key={index}>
            <Image style={styles.image} source={data[0].pic}/>
            <View styles={styles.textBackground}/>
            <Text style={styles.name}>{data[0].name}</Text>
            <View style={styles.musclesList}>
                {muscles}
            </View>
            <Text style={styles.likeTitle}>Likes</Text>
            <View>
                {likes}
            </View>
            </View>
        )
        return(buddy)
        
       
    })
    return buddy
}}

const styles = StyleSheet.create({
    Buddy:{
        alignSelf:'center',
        height:350,
        width:260,
        backgroundColor:'white',
        borderColor:'#8C030E',
        borderWidth:5,
        borderStyle:'solid',
        borderRadius:15
    },
    image:{
        height:250,
        width:250,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    textBackground:{
        height:50,
        width:50
    },
    name:{
        position:'absolute',
        top:216,
        fontFamily:'Impact',
        fontSize:30,
        color:'white',
        backgroundColor:'rgba(52, 52, 52, 0.8)',
        paddingLeft:3,
        width:250
    },
    muscles:{
        marginRight:5,
        backgroundColor: "#8C030E",
        borderRadius:5,
        fontFamily:'Impact',
        color:'white',
        fontSize:20,
        paddingLeft:5,
        paddingRight:5,
        left:2,
        top:2
    },
    musclesList:{
        flexDirection:'row'
    },
    likeTitle:{
        marginLeft:2,
        fontSize:19
    },
    likes:{
        marginLeft:4,
        fontSize:15
    }
}) 

// if(person.name === "Diana"){
        //     return(
        //         <div key={index} className={classes.Buddy}>
        //         <img src={person.pic} alt={person.name}/>
        //         <div className={classes.textBackground}/>
        //         <p className={classes.name}>{person.name}</p>
        //         <div className={classes.Diana}>
        //         {muscles}
        //         </div>
        //         <h4>Likes</h4>
        //         <ul>
        //             {likes}
        //         </ul>
        //         </div>
        //     )
        // }else if(person.muscles.length ===1){
        //     return(
        //     <div key={index} className={classes.Buddy}>
        //     <img src={person.pic} alt={person.name}/>
        //     <div className={classes.textBackground}/>
        //     <p className={classes.name}>{person.name}</p>
        //     <div className={classes.muscleList1}>
        //     {muscles}
        //     </div>
        //     <h4>Likes</h4>
        //     <ul>
        //         {likes}
        //     </ul>
        //     </div>
        //         )
        // }else if(person.name === "Barry"){
        //     return(
        //     <div key={index} className={classes.Buddy}>
        //     <img src={person.pic} alt={person.name}/>
        //     <div className={classes.textBackground}/>
        //     <p className={classes.name}>{person.name}</p>
        //     <div className={classes.Barry}>
        //     {muscles}
        //     </div>
        //     <h4>Likes</h4>
        //     <ul>
        //         {likes}
        //     </ul>
        //     </div>)
        // }else if(person.name === "Clark"){
        //     return(
        //     <div key={index} className={classes.Buddy}>
        //     <img src={person.pic} alt={person.name}/>
        //     <div className={classes.textBackground}/>
        //     <p className={classes.name}>{person.name}</p>
        //     <div className={classes.Clark}>
        //     {muscles}
        //     </div>
        //     <h4>Likes</h4>
        //     <ul>
        //         {likes}
        //     </ul>
        //     </div>)
        // }
        // else if(person.name === "Victor"){
        //     return(
        //     <div key={index} className={classes.Buddy}>
        //     <img src={person.pic} alt={person.name}/>
        //     <div className={classes.textBackground}/>
        //     <p className={classes.name}>{person.name}</p>
        //     <div className={classes.Victor}>
        //     {muscles}
        //     </div>
        //     <h4>Likes</h4>
        //     <ul>
        //         {likes}
        //     </ul>
        //     </div>)
        // }else if(person.name === "Mari"){
        //     return(
        //     <div key={index} className={classes.Buddy}>
        //     <img src={person.pic} alt={person.name}/>
        //     <div className={classes.textBackground}/>
        //     <p className={classes.name}>{person.name}</p>
        //     <div className={classes.Mari}>
        //     {muscles}
        //     </div>
        //     <h4>Likes</h4>
        //     <ul>
        //         {likes}
        //     </ul>
        //     </div>)
        // }else if(person.muscles.length ===2){
        //     return(
        //         <div key={index} className={classes.Buddy}>
        //         <img src={person.pic} alt={person.name}/>
        //         <div className={classes.textBackground}/>
        //         <p className={classes.name}>{person.name}</p>
        //         <div className={classes.muscleList2}>
        //         {muscles}
        //          </div>
        //         <h4>Likes</h4>
        //         <ul>
        //             {likes}
        //         </ul>
        //         </div>)
        // }else if(person.name === "John"){
        //     return(
        //     <div key={index} className={classes.Buddy}>
        //     <img src={person.pic} alt={person.name}/>
        //     <div className={classes.textBackground}/>
        //     <p className={classes.name}>{person.name}</p>
        //     <div className={classes.John}>
        //     {muscles}
        //     </div>
        //     <h4>Likes</h4>
        //     <ul>
        //         {likes}
        //     </ul>
        //     </div>)
        // }else if(person.name === "Shayerya"){
        //     return(
        //     <div key={index} className={classes.Buddy}>
        //     <img src={person.pic} alt={person.name}/>
        //     <div className={classes.textBackground}/>
        //     <p className={classes.name}>{person.name}</p>
        //     <div className={classes.Shayera}>
        //     {muscles}
        //     </div>
        //     <h4>Likes</h4>
        //     <ul>
        //         {likes}
        //     </ul>
        //     </div>)
        // }else if(person.name === "Billy"){
        //     return(
        //     <div key={index} className={classes.Buddy}>
        //     <img src={person.pic} alt={person.name}/>
        //     <div className={classes.textBackground}/>
        //     <p className={classes.name}>{person.name}</p>
        //     <div className={classes.Billy}>
        //     {muscles}
        //     </div>
        //     <h4>Likes</h4>
        //     <ul>
        //         {likes}
        //     </ul>
        //     </div>)
        // }else if(person.muscles.length === 3){
        //     return(
        //         <div key={index} className={classes.Buddy}>
        //         <img src={person.pic} alt={person.name}/>
        //         <div className={classes.textBackground}/>
        //         <p className={classes.name}>{person.name}</p>
        //         <div className={classes.muscleList3}>
        //         {muscles}
        //          </div>
        //         <h4>Likes</h4>
        //         <ul>
        //             {likes}
        //         </ul>
        //         </div>)
        // }