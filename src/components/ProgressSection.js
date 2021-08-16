import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import { Stepper , StepLabel , Step} from  '@material-ui/core'



const ProgressSection = () => {

    function showStep(step)
{
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
       <div className="form-container">
           <Stepper style={{width:'60%', margin:"auto"}} activeStep="1" orienteation="horizontal">
               <Step>
                   <StepLabel>

                   </StepLabel>
               </Step>
               <Step>
                   <StepLabel>
                       
                   </StepLabel>
               </Step>
               <Step>
                   <StepLabel>
                       
                   </StepLabel>
               </Step>
           </Stepper>
           {showStep(1)}


       </div>
    )
}

export default ProgressSection
