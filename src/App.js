import React, { useContext } from 'react';
import Header from './components/Header';
import ProgressSection from './components/ProgressSection';
import TenReff1 from './components/TenancyReference/TenReff1';
import TenReff2 from './components/TenancyReference/TenReff2';
import TenReff3 from './components/TenancyReference/TenReff3';
import { Stepper, StepLabel, Step } from '@material-ui/core';
import { multiStepContext } from './StepContext';
import places from './components/places';
import { Recorder } from 'react-voice-recorder';

import PersnReff1 from './components/PersonalReference/PersnReff1';
import PersnReff2 from './components/PersonalReference/PersnReff2';
import PersnReff3 from './components/PersonalReference/PersnReff3';
import EmplReff1 from './components/EmployeeReference/EmplReff1';
import EmplReff2 from './components/EmployeeReference/EmplReff2';
import EmplReff3 from './components/EmployeeReference/EmplReff3';





function App() {
  const { currentStep, finalData } = useContext(multiStepContext);

  function showStep(step) {

    console.log(step);
    switch (step) {
      case 1:
        return <TenReff1 />
      case 2:
        return <TenReff2 />
      case 3:
        return <TenReff3 />
      case 4:
        return <EmplReff1 />
      case 5:
        return <EmplReff2/>
      case 6:
        return <EmplReff3 />
      case 7:
        return <PersnReff1 />
      case 8:
        return <PersnReff2  />
      case 9:
        return <PersnReff3 />
    }
  }

  return (

    <div className="App">
      <div className="App-header">
        <Header></Header>
        <h4 style={{ color: '#7063FF', textAlign: 'center' }}>Tenancy Refrence</h4>
        <div className="center-stepper"> </div>
        <div className="form-container col-12">

          <Stepper style={{ width: '90%', margin: "auto" }} activeStep={currentStep - 1} orienteation="horizontal">

            <Step >
              <StepLabel>

              </StepLabel>
              <div className="step-head">Verify</div>
            </Step>

            <Step>
              <StepLabel>

              </StepLabel>
              <div className="step-head">Rate</div>
            </Step>

            <Step>
              <StepLabel>

              </StepLabel>
              <div className="step-head">Comment</div>
            </Step>

          </Stepper>
          {showStep(currentStep)}
        </div>


      </div>
    </div>
  );
}


export default App;
