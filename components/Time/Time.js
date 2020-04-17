import React, {useState} from 'react';
import {View,Platform,StyleSheet,Text,TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useFonts} from '@use-expo/font';
import {AppLoading} from 'expo';


 export default function Time(){
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

//   const showDatepicker = () => {
//     showMode('date');
//   };

  const showTimepicker = () => {
    showMode('time');
  };

  let [fontsLoaded] = useFonts({
    'Impact': require('../../assets/fonts/Impact.otf'),
})

if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
        <View>
        <View >
        <TouchableOpacity onPress={showTimepicker} style={styles.timeButton}>
                <Text style={styles.text}>Workout time</Text>
                <Text style={styles.text}>{date.getHours() + ":" + date.getMinutes()}</Text>
        </TouchableOpacity>
            {/* <Button 
            onPress={showTimepicker} 
            color="#8C030E"
            style={styles.timeButton}
            ><Text>{"Time for workout: \n" + date.getHours() +":"+date.getMinutes()}</Text></Button> */}
        </View>
        {show && (
            <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            style={{}}
            />
        )}
        </View>
    );
    }
};

const styles = StyleSheet.create({
    timeButton:{
        backgroundColor:"#8C030E",
        height:58,
        width:150,
        borderStyle:'solid',
        borderRadius:50,
        borderWidth:5,
        borderColor:'#6F6F6F',
        alignItems:'center'
    },
    text:{
        color:'white',
        fontSize:22,
        fontFamily:'Impact',
    }
})
