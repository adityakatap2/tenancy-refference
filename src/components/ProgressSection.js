import TenReff1 from './TenancyReference/TenReff1';
import TenReff2 from './TenancyReference/TenReff2';
import TenReff3 from './TenancyReference/TenReff3';
import { Stepper , StepLabel , Step} from  '@material-ui/core'



const ProgressSection = () => {

    function showStep(step)
{
    switch(step){
        case 1 : 
        return <TenReff1 />
        case 2 :
            return <TenReff2 />
            case 3:
                return <TenReff3 />
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
