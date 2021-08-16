import React, {useContext } from 'react';
import { Button , TextField } from '@material-ui/core';
import { multiStepContext  } from '../StepContext';

export default function FirstStep() {
    const { setStep , userData , setUserData} = useContext(multiStepContext);
    return (
        <div className="row col-12">
        <div className="onestep">
            <div className="label-1 col-md-3"><h3>Address</h3><TextField label="Address" value={userData['Address']} onChange={(e)=>setUserData({...userData,"Address": e.target.value})} margin="normal" variant="outlined" color="secondary"/></div>
            <div className="label-2 col-md-4"><h3>Duration</h3><TextField label="Duration" value={userData['Duration']} onChange={(e)=>setUserData({...userData,"Duration": e.target.value})} margin="normal" variant="outlined" color="secondary"/></div>
            <div className="label-3 col-md-4"><h3>Rent Paid</h3><TextField label="Rent-Paid" value={userData['Rent-Paid']} onChange={(e)=>setUserData({...userData,"Rent-Paid": e.target.value})} margin="normal" variant="outlined" color="secondary"/></div>
            <br></br>
            <div className="nxt-btn"><Button variant="contained" onClick={()=>setStep(2)} color="primary">Next</Button></div>   
        </div>
        </div>
    )
}
