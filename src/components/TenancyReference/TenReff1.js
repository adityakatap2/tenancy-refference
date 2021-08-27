import React, { useContext } from 'react';
import { Button, TextField, withWidth } from '@material-ui/core';
import { multiStepContext } from '../../StepContext';
import { Container, Paper, Box, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup} from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import { MdGpsFixed } from 'react-icons/md';
import { BiUserCheck } from 'react-icons/bi';
import { BiDollar } from 'react-icons/bi';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';




export default function TenReff1() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
          },
        },
      }));
      const clickSubmit = (e) => {
        e.preventDefault();
        setStep(1);
      };
    
    return (
        <Container className="StepOne-Container">
            
            <form onSubmit={clickSubmit}>
            
            <Row className="tenancy-head">
                <Col><p className="info-head">Tenancy Details</p></Col>
            </Row>
            <Row className="stepOne">
                <Col xs={6} md={4} >
                    <div className="label-1 col-md-4">
                        <div>
                            <h4><MdGpsFixed size="18px" color="#7063FF" /><span>    </span>Address</h4>
                        </div>

                        <div className="textfield">
                            <TextField label="" style={{width:300}} value={userData['Address']} onChange={(e) => setUserData({ ...userData, "Address": e.target.value })} color="Primary" />
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div className="label-1 col-md-4">
                        <div>
                            <h4><BiUserCheck size="18px" color="#7063FF" /><span>    </span>Duration</h4>
                        </div>

                        <div className="textfield">
                            <TextField label="" value={userData['Duration']} onChange={(e) => setUserData({ ...userData, "Duration": e.target.value })} color="Primary" />
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div className="label-1 col-md-4">
                        <div>
                            <h4><BiDollar size="18px" color="#7063FF" /><span>    </span>Rent Paid</h4>
                        </div>

                        <div className="textfield">
                            <TextField label="" value={userData['Rent-Paid']} onChange={(e) => setUserData({ ...userData, "Rent-Paid": e.target.value })} color="Primary" />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="content-grey">
                    <p className="content">Lorem Ipsume has requested for your reference for renting a property. Please can you confirm if the above mentioned details are correct.</p>
                </Col>
            </Row>
           

                <Row className="conf-1">
    <Col><div className="conf-text">
        
    
                    <input required type="checkbox" name="terms" ></input><span className="span">I , </span><span></span><TextField required type="text" label="Your Name" style={{width:100, fontSize:10 , display:'inline-block', marginTop:-20}} value={userData['Your Name']} onChange={(e) => setUserData({ ...userData, "userName": e.target.value })} margin="none" color="secondary" /><span></span><span className="span">do confirm these details are correct.</span>
                </div></Col>
    <Col></Col>
    <Col className="conf-btn"><div className="conf-dcl"></div> <span></span>
                <div className="conf-nxt"><button variant="contained" onClick={() => setStep(2)}  color="primary">Next</button></div></Col>
              
  </Row>
  </form>
        </Container>

    )
}
