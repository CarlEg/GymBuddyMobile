import React, { Component } from 'react';
import Buddy from '../Buddy/Buddy';
import { StyleSheet,View,Text,TouchableOpacity,Image,Alert} from 'react-native';

import Bruce from '../../assets/images/People/Bruce.jpg';
import Arthur from '../../assets/images/People/Arthur.png';
import Diana from '../../assets/images/People/Diana.jpg';
import Barry from '../../assets/images/People/Barry.jpeg';
import Clark from '../../assets/images/People/Clark.jpg';
import Victor from '../../assets/images/People/Victor.jpg';
import John from '../../assets/images/People/John.jpg';
import Mari from '../../assets/images/People/Mari.jpg';
import Shayera from '../../assets/images/People/Shayerya.jpeg';
import Billy from '../../assets/images/People/Billy.jpg';
import whiteArrow from '../../assets/images/navigation/whiteArrow.png';
import greenTick from '../../assets/images/navigation/greenTick.png';
import greyTick from '../../assets/images/navigation/greenTickGreyed.png';
import redCross from '../../assets/images/navigation/redCross.png';

export default class Buddies extends Component {
    state={ 
        data :[
        {name:"Bruce", muscles:["Abs"], likes:["Brooding", "Alfred"], yes:false, pic:Bruce},
        {name:"Arthur", muscles:["Lats"], likes:["Beer","Ocean"], yes:false, pic:Arthur},
        {name:"Diana", muscles:["Legs"], likes:["Tiaras","Honor"], yes:false, pic:Diana},
        {name:"Barry", muscles:["Legs","Abs"], likes:["Diana","Eating"], yes:false, pic:Barry},
        {name:"Clark", muscles:["Chest","Biceps"], likes:["Farms","America"], yes:false, pic:Clark},
        {name:"Victor", muscles:["Biceps","Lats"], likes:["Computers","Booyah"], yes:false, pic:Victor},
        {name:"John", muscles:["Chest","Abs","Lats"], likes:["Pizza","Duty"], yes:false, pic:John},
        {name:"Mari", muscles:["Legs","Biceps"], likes:["Nature","Activism"], yes:false, pic:Mari},
        {name:"Shayerya", muscles:["Legs","Abs","Biceps"], likes:["Hawks","Helmets"], yes:false, pic:Shayera},
        {name:"Billy", muscles:["Chest","Biceps","Lats"], likes:["Adulting","Superman"], yes:false, pic: Billy}],
        potentials: [],
        count: 0,
        backGrey: true,
        forwardGrey:false,
    }

    

    gatherPeople = () =>{
        let potentials = []
        let array = [];
        this.props.selected.forEach(element => {
            element = element.replace('\u2022 ','')
            array.push(element)
        });
        this.state.data.forEach(element => {

            if(element.muscles.some(item =>array.includes(item))){
                potentials.push(element)
            }
        });
        this.setState({
            potentials: potentials,
        })
        console.log(this.state.potentials)
    }

    nextPerson = () =>{
        let count = this.state.count;
        if(count === this.state.potentials.length -1){
            this.setState({
                forwardGrey:true,
            })
            return false;
        }else{
            count += 1;
        this.setState({
          count: count,
        })
            if(count === this.state.potentials.length -1){
                this.setState({
                    forwardGrey:true,
                })
            }
            if(count !== 0){
                this.setState({
                    backGrey:false,
                })
            }
        }
}

    backPerson = () =>{
        let count = this.state.count;
        if(count === 0){
            this.setState({
                backGrey:true,
            })
            return false
        }else{
            count -= 1;
        this.setState({
          count: count,
        })
        if(count !== this.state.potentials.length -1){
            this.setState({
                forwardGrey:false,
            })
        }
        if(count === 0){
            this.setState({
                backGrey:true,
            })
        }
        }
    }
    
    componentDidMount() {
        this.gatherPeople()
    }

    tickSelected = () =>{
        const person = this.state.potentials[this.state.count];
        let array = this.state.data;
        if(!person.yes){
            alert("Buddy request sent to " + person.name + "!" );
            const index = this.state.data.findIndex(element => element === person);
            let value = this.state.data[index];
            value.yes = true;
            array[index] = value
            this.setState({
                data : array,
            })
        }else{
            alert("Request to " + person.name + " cancelled");
            const index = this.state.data.findIndex(element => element === person);
            let value = this.state.data[index];
            value.yes = false;
            array[index] = value
            this.setState({
                data : array,
            })
        }
    }
    
    crossSelected = () =>{
        const person = this.state.potentials[this.state.count];
        let array = this.state.data;
        const index = this.state.data.findIndex(element => element === person);
        Alert.alert(
            'Remove', 
            'Are you sure you want to remove ' + person.name + '?',
            [
                {text: 'No', onPress: () => console.log('Remove cancelled')},
                {text: 'Yes', onPress: () =>{
                    if(this.state.count === this.state.potentials.length-1){
                        this.setState({
                            count: this.state.count-1,
                        })
                    }
                    array.splice(index,1);
                    this.setState({
                        data: array,
                    });
                    this.gatherPeople();
                }}
            ]
        )
        // if(window.confirm("Are you sure you want to remove " + person.name + "?")){
    }

    render(){
        if(this.state.potentials.length>0){
            return(
                <View>
                <Buddy key={this.state.count} buddies={this.state.potentials[this.state.count]}/>
                <Text>{"\n"}</Text>

                <View style={styles.arrows}>
                    <TouchableOpacity onPress={this.backPerson}>
                        <Image style={this.state.backGrey ? styles.backArrowGrey : styles.backArrow} 
                            source={whiteArrow}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.nextPerson}>
                        <Image style={this.state.forwardGrey ? styles.forwardArrowGrey : styles.forwardArrow} 
                            source={whiteArrow}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.boxes}>
                    <TouchableOpacity onPress={this.crossSelected}>
                        <Image source={redCross} style={styles.cross}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.tickSelected}>
                        {this.state.potentials[this.state.count].yes ? 
                        <Image source={greyTick} style={styles.tick}/> 
                        :<Image source={greenTick} style={styles.tick}/>}
                    </TouchableOpacity>
                </View>
                </View>
            )
        }else{
            return( <Text>No muscles chosen</Text>)
        }   
    }
}

const styles = StyleSheet.create({
    arrows:{
        flexDirection:'row',
        justifyContent:'center',
        bottom:25
    },
    backArrow:{
        height:40,
        width:75,
        backgroundColor:'#8C030E',
        resizeMode:'contain',
        marginRight:50
    },
    backArrowGrey:{
        height:40,
        width:75,
        backgroundColor:'#6F6F6F',
        resizeMode:'contain',
        marginRight:50
    },
    forwardArrow:{
        height:40,
        width:75,
        backgroundColor:'#8C030E',
        resizeMode:'contain',
        transform:[{rotate:'180deg'}]
    },
    forwardArrowGrey:{
        height:40,
        width:75,
        backgroundColor:'#6F6F6F',
        resizeMode:'contain',
        transform:[{rotate:'180deg'}]
    },
    cross:{
        height:75,
        width:75,
        borderWidth:2,
        borderColor:'#6F6F6F',
        marginRight:30
    },
    tick:{
        height:75,
        width:75,
        borderWidth:2,
        borderColor:'#6F6F6F',
    },
    boxes:{
        flexDirection:'row',
        justifyContent:'center',
        bottom:15
    }
})