import React, {Component} from 'react';
import { StyleSheet,View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Footer from './components/Footer/BottomButtons';
import Header from './components/header/header';
import MuscleButton from './components/MuscleButton/MuscleButton';
import Time from './components/Time/Time';

const Stack = createStackNavigator();

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

  Home=() =>{
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
  }

  Muscles=() =>{
    return(
      <View style={styles.container}>
        <Header
          homeSelected={this.state.homeSelected} 
          goHome={this.homeSelected}/>
        
        <Text>Muscles Screen</Text>

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
  }

  render(){
    return (
      <NavigationContainer>
          <Stack.Navigator
           initialRouteName="Home"
           screenOptions={{
             headerShown:false
           }}>
            <Stack.Screen name="Home" component={this.Home}/>
            <Stack.Screen name="Muscles" component={this.Muscles}/>
          </Stack.Navigator>
          
      </NavigationContainer>
    );
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
    flex:1,
    justifyContent:'center',
  },
  time:{
    top:15
  }
});