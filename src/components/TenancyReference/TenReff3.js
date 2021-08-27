import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../../StepContext';
import { Container, Paper, Box, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';






export default function TenReff3() {
    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);
  
    const clickSubmit = (e) => {
        e.preventDefault();
        setStep(3);

    };


    return (
        <Container>
            <form onSubmit={clickSubmit}>
                <Row className="tenancy-head">
                    <Col><p className="info-head">Comments</p>
                        <p>Record Your Message Here Or Upload Pre-recorded file</p></Col>
                </Row>
                <Row className="qstn1">
                    <Col >
                        <div class="container radio">
                            <div className="row radio-row col-12">
                                <div className="col-md-4 r1">
                                    <div className="textfield">
                                        
                                        
                                       <textarea   style={{ borderRadius: 6, width: 400, height: 100, color: '#000000', }} label="Your message" value={userData['Your message']}  color="primary" placeholder="Write Your Message Here" />
                                       
                                       
                                    </div>
                                </div>
                                <div className="radio-btn1">
                                    <div className="col-md-4 r2">
                                        <div>
                                            <div className="App">
                                                {/* <audio src={audioURL} controls /> */}
                                                <div >
                                                    <input type="file" accept="audio/*" capture></input>
                                                </div>
                                                {/* <div className="radio-btn">

                                                <div className="conf-dcl"><button onClick={startRecording} disabled={isRecording}>start recording</button></div>
                                                <div className="conf-nxt"><button onClick={stopRecording} disabled={!isRecording}> stop recording </button></div>
                                            </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col >
                        <div class="container radio">
                            <div className="row radio-row col-12">
                                <div className="col-md-4 r1">
                                </div>
                                <div className="radio-btn1">
                                    <div className="col-md-4 dcl-right">
                                        <div className="conf-dcl"><Button variant="contained" onClick={() => setStep(2)} color="primary">Previous</Button></div>
                                    </div>
                                    <div className="col-md-4 dcl-right">
                                        <div className="conf-dcl"><Button variant="contained" onClick={() => setStep(4)} color="primary">Next</Button></div>
                                    </div>
                                    {/* <div className="col-md-4 nxt-right">
                                    <div className="conf-nxt"><Button variant="contained" onClick={(submitData)} color="primary">Submit</Button></div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </form>
        </Container>

    )
}
