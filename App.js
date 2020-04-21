import React, {Component} from 'react';
import { StyleSheet,View,Text} from 'react-native';
import Footer from './components/Footer/BottomButtons';
import Header from './components/header/header';
import MuscleButton from './components/MuscleButton/MuscleButton';
import Time from './components/Time/Time';
import Muscles from './components/Muscles/Muscles'
import Preset from './components/PresetButton/PresetButton'
import PresetHeading from './components/PresetHeading/PresetHeading'
import Buddies from './components/Buddies/Buddies'


export default class App extends Component {

  state = {
    homeSelected: true,
    muscleSelected: false,
    messageSelected: false,
    selectedDate: Date.now(),
    back: false,
    // chest: false,
    // abs:false,
    // legs: false,
    // biceps:false,
    // lats:false,
    muscles:{
      chest: false,
      abs: false,
      legs: false,
      biceps: false,
      lats: false,},
    selected:[],
    arrayIsEmpty:true,
    isPresetEmpty:true,
    presets:[],
  }

  homeSelected = () =>{
    if(this.state.homeSelected){
      console.log('Home already selected');
    }else{
      this.setState({
        homeSelected: true,
        muscleSelected: false,
        messageSelected: false,
      })
    }
  }

  muscleSelected = () =>{
    if(this.state.muscleSelected){
      console.log('Muscle already selected');
    }else{
      this.setState({
        homeSelected: false,
        muscleSelected: true,
        messageSelected: false,
      })
    }
  }

  messageSelected = () =>{
    if(this.state.messageSelected){
      console.log('Message already selected')
    }else{
      this.setState({
        homeSelected: false,
        muscleSelected: false,
        messageSelected: true,
      })
    }
  }

  chestSelected = () =>{
    let array = this.state.selected
    this.setState({
      muscles:{
        chest:!this.state.muscles.chest,
        abs: this.state.muscles.abs,
        legs: this.state.muscles.legs,
        biceps: this.state.muscles.biceps,
        lats: this.state.muscles.lats,
      }
    })
    if(!this.state.muscles.chest){
      array.push("Chest")
      this.setState({
        arrayIsEmpty: false,
        selected: array
      })
    }else{
      const target = array.indexOf("Chest")
      array.splice(target,1)
      this.checkSelected()
    }
  }

  absSelected = () =>{
    let array = this.state.selected
    this.setState({
      muscles:{
        chest:this.state.muscles.chest,
        abs: !this.state.muscles.abs,
        legs: this.state.muscles.legs,
        biceps: this.state.muscles.biceps,
        lats: this.state.muscles.lats,
      }
    })
    if(!this.state.muscles.abs){
      array.push("Abs")
      this.setState({
        arrayIsEmpty: false,
        selected: array
      })
    }else{
      const target = array.indexOf("Abs")
      array.splice(target,1)
      this.checkSelected()
    }
  }

  legsSelected = () =>{
    let array = this.state.selected
    this.setState({
      muscles:{
        chest:this.state.muscles.chest,
        abs: this.state.muscles.abs,
        legs: !this.state.muscles.legs,
        biceps: this.state.muscles.biceps,
        lats: this.state.muscles.lats,
      }
    })
    if(!this.state.muscles.legs){
      array.push("Legs")
      this.setState({
        arrayIsEmpty: false,
        selected: array
      })
    }else{
      const target = array.indexOf("Legs")
      array.splice(target,1)
      this.checkSelected()
    }
  }

  bicepsSelected = () =>{
    let array = this.state.selected;
    this.setState({
      muscles:{
        chest: this.state.muscles.chest,
        abs: this.state.muscles.abs,
        legs: this.state.muscles.legs,
        biceps: !this.state.muscles.biceps,
        lats: this.state.muscles.lats,
      }
    });
    if(!this.state.muscles.biceps){
      array.push("Biceps")
      this.setState({
        arrayIsEmpty: false,
        selected: array
      })
    }else{
      const target = array.indexOf("Biceps")
      array.splice(target,1)
      this.checkSelected()
    }
  }

  latsSelected = () =>{
    let array = this.state.selected;
    this.setState({
      muscles:{
        chest: this.state.muscles.chest,
        abs: this.state.muscles.abs,
        legs: this.state.muscles.legs,
        biceps: this.state.muscles.biceps,
        lats: !this.state.muscles.lats,
      }
    });
    if(!this.state.muscles.lats){
      array.push("Lats");
      this.setState({
        arrayIsEmpty: false,
        selected: array
      });
    }else{
      const target = array.indexOf("Lats");
      array.splice(target,1);
      this.checkSelected()
    }
  }

  backSelected = () =>{
    this.setState({
      back: true,
    })
  }

  frontSelected = () =>{
    this.setState({
      back:false,
    })
  }

  checkSelected = () =>{
    if(this.state.selected.length>0){
      this.setState({
        arrayIsEmpty:false,
      });
    }else{
      this.setState({
        arrayIsEmpty:true,
      });
    }
  }

  checkElement = () =>{
    const array = this.state.presets
    let i;
    for(i=0; i<=array.length; i++){
      if(array[i] === undefined){
        return i
      }
    }
  }

  

  savePreset = () =>{
    const muscles = this.state.muscles
    let preset = [];
    if(muscles.abs){
      preset.push("Abs")
    }
    if(muscles.biceps){
      preset.push("Biceps")
    }
    if(muscles.chest){
      preset.push("Chest")
    }
    if(muscles.lats){
      preset.push("Lats")
    }
    if(muscles.legs){
      preset.push("Legs")
    }
    let array = this.state.presets;
    let i;
    let flag = false;
    if(this.state.isPresetEmpty){
      array.push(preset)
      this.setState({
        presets: array
      });
      this.setState({isPresetEmpty:false})
    }else {
      for(i=0; flag===false && i<array.length; i++){
        if(JSON.stringify(array[i])===JSON.stringify(preset)){
          flag = true;
        }
       }
       if(!flag){
        array.push(preset)
        this.setState({
          presets: array
        });
      } 
    }
    
  }

  presetClicked = (index) =>{
    let i;
    const array = this.state.presets[index]
    let muscles = this.state.muscles
    let chosen =[];
    muscles.abs =false;
    muscles.biceps=false
    muscles.chest = false
    muscles.legs = false
    muscles.lats = false
    for(i=0; i<array.length; i++){
      if(array[i]==="Abs"){
        muscles.abs = true;
        chosen.push("Abs");
      }else if(array[i]==="Biceps"){
        muscles.biceps = true;
        chosen.push("Biceps");
      }else if(array[i]==="Chest"){
        muscles.chest = true;
        chosen.push("Chest")
      }else if(array[i]==="Legs"){
        muscles.legs = true;
        chosen.push("Legs")
      }else if(array[i]==="Lats"){
        muscles.lats = true;
        chosen.push("Lats")
      }
    }
    this.setState({
      selected:chosen,
    })
    this.setState({
      muscles:muscles,
      homeSelected: false,
      muscleSelected: true,
      messageSelected: false,
    })
    console.log(this.state.selected)
  }

  render(){
    if(this.state.homeSelected){
      return(
        <View style={styles.container}>
          <Header
            homeSelected={this.state.homeSelected} 
            goHome={this.homeSelected}/>

          <View style={styles.time}>
            <Time/>
          </View>
          <View style={styles.muscleButtonView}>
            <MuscleButton
            muscleSelected={this.muscleSelected}/>
          </View>
            <PresetHeading
            isPresetEmpty={this.state.isPresetEmpty}/>
          <View>
            
          </View>
          <View style={styles.presetSection}>
            <Preset
              presets={this.state.presets}
              isPresetEmpty={this.state.isPresetEmpty}
              clicked={this.presetClicked} />
          </View>  

          <View style={styles.navButtons}>
            <Footer
            homeTrue={this.state.homeSelected}
            muscleTrue={this.state.muscleSelected} 
            messageTrue={this.state.messageSelected}
            homePressed={this.homeSelected}
            musclePressed={this.muscleSelected}
            messagePressed={this.messageSelected}/>
          </View>
          </View>
        )
      }else if(this.state.muscleSelected){
        return(
          <View style={styles.container}>
            <Header
            homeSelected={this.state.homeSelected} 
            goHome={this.homeSelected}/>

            <Muscles muscles={this.state.muscles} 
            chestSelect={this.chestSelected} 
            absSelect={this.absSelected}
            legsSelect={this.legsSelected}
            bicepsSelect={this.bicepsSelected}
            latsSelect={this.latsSelected} 
            backSelect={this.backSelected} 
            back ={this.state.back} 
            frontSelect={this.frontSelected} 
            selected={this.state.selected} 
            checkEmpty={this.state.arrayIsEmpty}
            savePreset={this.savePreset} 
            findClicked={this.messageSelected}/>

            <View style={styles.navButtons}>
            <Footer
            homeTrue={this.state.homeSelected}
            muscleTrue={this.state.muscleSelected} 
            messageTrue={this.state.messageSelected}
            homePressed={this.homeSelected}
            musclePressed={this.muscleSelected}
            messagePressed={this.messageSelected}/>
            </View>
          </View>
        )
      }else if(this.state.messageSelected){
        return(
        <View style={styles.container}>
        <Header
        homeSelected={this.state.homeSelected} 
        goHome={this.homeSelected}/>

        <View style={styles.buddies}>
          <Buddies selected={this.state.selected}/>
        </View>

        <View style={styles.navButtons}>
        <Footer
        homeTrue={this.state.homeSelected}
        muscleTrue={this.state.muscleSelected} 
        messageTrue={this.state.messageSelected}
        homePressed={this.homeSelected}
        musclePressed={this.muscleSelected}
        messagePressed={this.messageSelected}/>
        </View>
      </View>
      )}
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F5EF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  navButtons:{
    flex:1,
    justifyContent:'flex-end',
  },
  muscleButtonView:{
    flex:1.75,
    top:50
  },
  time:{
    top:15,
  },
  presetSection:{
    flex:1,
  },
  buddies:{
    flex:1,
    top:30
  }
});