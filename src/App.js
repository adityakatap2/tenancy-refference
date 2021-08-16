import React , { useContext} from 'react';
import Header from './components/Header';
import ProgressSection from './components/ProgressSection';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import { Stepper , StepLabel , Step} from  '@material-ui/core';
import { multiStepContext } from './StepContext';


function App() {
  const { currentStep , finalData } = useContext(multiStepContext);

    function showStep(step){

  console.log(step);
    switch(step){
        case 1 : 
        return <FirstStep />
        case 2 :
            return <SecondStep />
            case 3:
                return <ThirdStep />
    }
  }

  return (
 
    <div className="App">
      <div className="App-header">
     <Header></Header>
       <h2 style={{color:'#7063FF', textAlign:'center'}}>Tenancy Reffrence</h2>
       <div className="center-stepper"> </div>
       <div className="form-container"> 
      
       <Stepper style={{width:'80%', margin:"auto"}} activeStep={1} orienteation="horizontal">
        
               <Step >
                   <StepLabel>
Verify
                   </StepLabel>
               </Step>
               <br></br>
               <Step>
                   <StepLabel>
                       Rate
                   </StepLabel>
               </Step>
               <br></br>
               <Step>
                   <StepLabel>
                       Comment
                   </StepLabel>
               </Step>
               <br></br>
           </Stepper>
           {showStep(currentStep)}
           </div>
          
          
           </div>
    </div>
  );
}


export default App;
