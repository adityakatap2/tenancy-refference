import React , {useContext} from 'react';
import { Button , TextField } from '@material-ui/core';
import { multiStepContext} from '../StepContext';

export default function ThirdStep() {
    const { setStep , userData , setUserData , submitData } = useContext (multiStepContext);
    return (
        <div>
              <TextField label="Address" margin="normal" variant="outlined" color="secondary"/>
              <div>
              <Button variant="contained" onClick={()=>setStep(2)} color="primary">Previous</Button><span>  </span>
                  <Button variant="contained" onclick={submitData} color="primary">Sumbit</Button>
              </div>
        </div>
    )
}
