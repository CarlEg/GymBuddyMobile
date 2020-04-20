import React from 'react';
import classes from './PresetButton.module.css';

const PresetButton = (props) =>{
    const presets = props.presets
    if(presets !== undefined){
    const buttons = presets.map((preset,index)=>{
        return(
            <button key={index} 
            className={classes.pButton} onClick={() => props.clicked(index)}>
            {preset.join(" - ")}</button>)});
    return (
    <div className={classes.preset}>
        {props.isPresetEmpty ? <h2>No Muscles sets</h2>: <h2>Muscle Sets</h2>}
        {buttons}
    </div>)}
    return(
        null
    )
}

export default PresetButton;