import React, { useContext } from 'react';
import { Button, TextField, withWidth } from '@material-ui/core';
import { multiStepContext } from '../../StepContext';
import { Container, Paper, Box, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup} from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';


import { BiDollar } from 'react-icons/bi';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BiUserCircle } from 'react-icons/bi';
import { ImOffice } from 'react-icons/im';
import { FaSuitcase} from 'react-icons/fa';




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
        setStep(7);
      };
    
    return (
        <Container className="StepOne-Container">
            
            <form onSubmit={clickSubmit}>
            
            <Row className="tenancy-head">
                <Col><p className="info-head">Tenancy Details</p></Col>
            </Row>
            <Row className="pr-row-1">
                <Col  md={6} >
                    <div className="label-1 col-md-6">
                        <div>
                            <h4><BiUserCircle size="18px" color="#7063FF" /><span>    </span>Name</h4>
                        </div>

                        <div className="textfield">
                        <input border="none" type="text" placeholder="Name"></input>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div className="label-1 col-md-6">
                        <div>
                            <h4><FaSuitcase size="18px" color="#7063FF" /><span>    </span>Desigantion</h4>
                        </div>

                        <div className="textfield">
                            <input border="none" type="text" placeholder="Desigantion"></input>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="pr-row-2">
                <Col xs={6} md={4} >
                    <div className="label-1 col-md-4">
                        <div>
                            <h4><ImOffice size="18px" color="#7063FF" /><span>    </span>Company Name</h4>
                        </div>

                        <div className="textfield">
                        <input border="none" type="text" placeholder="Company Name"></input>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <div className="label-1 col-md-4">
                        <div>
                            <h4><BiDollar size="18px" color="#7063FF" /><span>    </span>Salary</h4>
                        </div>

                        <div className="textfield">
                        <input border="none" type="text" placeholder="Salary"></input>
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
        
    
                    <input required type="checkbox" name="terms" onChange={(e) => setUserData({ ...userData, "isNameAdded": e.target.value })}></input><span className="span">I , </span><span></span><TextField required type="text" label="Your Name" style={{width:100, fontSize:10 , display:'inline-block', marginTop:-20}} value={userData['Your Name']} onChange={(e) => setUserData({ ...userData, "userName": e.target.value })} margin="none" color="secondary" /><span></span><span className="span">do confirm these details are correct.</span>
                </div></Col>
    <Col></Col>
    <Col className="conf-btn"><div className="conf-dcl"></div> <span></span>
                <div className="conf-nxt"><button variant="contained" onClick={() => setStep(8)}   color="primary">Next</button></div></Col>
              
  </Row>
  </form>
        </Container>

    )
}
