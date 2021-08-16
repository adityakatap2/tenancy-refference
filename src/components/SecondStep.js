import React, {useContext } from 'react';
import { Container , Paper , Box , Radio , FormControl , FormControlLabel , FormLabel, RadioGroup } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import { Button , TextField } from '@material-ui/core';




export default function SecondStep() {
    const { setStep , userData , setUserData } = useContext(multiStepContext);
    return (
        <div>
            <FormControl>
                <FormLabel>Q1. Is Property Currently Occupied?</FormLabel>
                <RadioGroup>
                    <FormControlLabel lable="yes" value="yes" control={<Radio />}/>
                </RadioGroup>
                <RadioGroup>
                    <FormControlLabel lable="NO" control={<Radio />}  value="NO"/>
                </RadioGroup>
            </FormControl>
            <div className="nxt-btn">
            <Button variant="contained" onClick={()=>setStep(1)} color="primary">Previous</Button><span>  </span>
                <Button variant="contained" onClick={()=>setStep(3)} color="primary">Next</Button>
                </div>
            
        </div>
    )
}
