
import React, { useContext, useState } from "react";
import {
    Container,
    Paper,
    Box,
    Radio,
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    FormHelperText,
} from "@material-ui/core";
import { multiStepContext } from "../../StepContext";
import { Button, TextField } from "@material-ui/core";
import { value } from "react";
import { RadioButton } from "react-radio-buttons";
import { Row, Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { FaStar } from "react-icons/fa";


export default function PersnReff2() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    const { register, handleSubmit, control, error } = useForm();
    const clickSubmit = (e) => {
        e.preventDefault();
        setStep(5);
    };

    return (
        <Container className="stepTwo-Container">
            <form onSubmit={clickSubmit}>
                <div className="body-padding">
                    <Row className="tenancy-head">
                        <Col>
                            <p className="info-head">Questions</p>
                        </Col>
                    </Row>
                    <Row className="qstn">
                        <Col>
                            <div class="container radio">
                                <div className="row radio-row col-12">
                                    <div className="col-md-4 r1">
                                        Q1. How Do You Know The Tenant?
                                    </div>
                                    <div className="radio-btn1">
                                        <div className="col-md-4 r5">

                                            <input
                                                required
                                                value={userData["Yes"]}
                                                onChange={(e) =>
                                                    setUserData({ ...userData, Occupied: e.target.value })
                                                }
                                                type="radio"
                                                name="c1"
                                                value="Yes"
                                            /> <label>Collegue</label>{" "}
                                        </div>
                                        <div className="col-md-4 r5">

                                            <input
                                                required
                                                value={userData["No"]}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        notOccupied: e.target.value,
                                                    })
                                                }
                                                type="radio"
                                                name="c1"
                                                value="No"
                                            /><label>Freind</label>{" "}
                                        </div>
                                        <div className="col-md-4 r5">

                                            <input
                                                required
                                                value={userData["Yes"]}
                                                onChange={(e) =>
                                                    setUserData({ ...userData, Occupied: e.target.value })
                                                }
                                                type="radio"
                                                name="c1"
                                                value="Yes"
                                            /> <label>Family</label>{" "}
                                        </div>
                                        <div className="col-md-4 r5">

                                            <input
                                                required
                                                value={userData["No"]}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        notOccupied: e.target.value,
                                                    })
                                                }
                                                type="radio"
                                                name="c1"
                                                value="No"
                                            /> <label>Other</label>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="qstn">
                        <Col>
                            <div class="container radio">
                                <div className="row radio-row col-12">
                                    <div className="col-md-4 r1">
                                        Q1.  How Long Have You Known Tenant (years)?
                                    </div>
                                    <div className="radio-btn1">
                                        <div className="col-md-4 r6">
                                            
                                            <input
                                                required
                                                value={userData["Yes"]}
                                                onChange={(e) =>
                                                    setUserData({ ...userData, onTime: e.target.value })
                                                }
                                                type="radio"
                                                name="y2"
                                                value="Yes"
                                            /><label className="radio-years">1</label>
                                        </div>
                                        <div className="col-md-4 r6">
                                            
                                            <input
                                                required
                                                value={userData["No"]}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        notOnTime: e.target.value,
                                                    })
                                                }
                                                type="radio"
                                                name="y2"
                                                value="No"
                                            /><label className="radio-years">2</label>
                                        </div>
                                        <div className="col-md-4 r6">
                                           
                                            <input
                                                required
                                                value={userData["No"]}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        notOnTime: e.target.value,
                                                    })
                                                }
                                                type="radio"
                                                name="y2"
                                                value="No"
                                            /> <label className="radio-years">3</label>
                                        </div>
                                        <div className="col-md-4 r6">
                                           
                                            <input
                                                required
                                                value={userData["No"]}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        notOnTime: e.target.value,
                                                    })
                                                }
                                                type="radio"
                                                name="y2"
                                                value="No"
                                            /> <label className="radio-years">4</label>
                                        </div>
                                        <div className="col-md-4 r6">
                                           
                                            <input
                                                required
                                                value={userData["No"]}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        notOnTime: e.target.value,
                                                    })
                                                }
                                                type="radio"
                                                name="y2"
                                                value="No"
                                            /> <label className="radio-years">5</label>
                                        </div>
                                        <div className="col-md-4 r6">
                                            
                                            <input
                                                required
                                                value={userData["No"]}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        notOnTime: e.target.value,
                                                    })
                                                }
                                                type="radio"
                                                name="y2"
                                                value="No"
                                            /><label className="radio-years">6</label>
                                        </div>
                                        <div className="col-md-4 r6">
                                            
                                            <input
                                                required
                                                value={userData["No"]}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        notOnTime: e.target.value,
                                                    })
                                                }
                                                type="radio"
                                                name="y2"
                                                value="No"
                                            /><label className="radio-years">7</label>
                                        </div>
                                        <div className="col-md-4 r6">
                                            
                                            <input
                                                required
                                                value={userData["No"]}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        notOnTime: e.target.value,
                                                    })
                                                }
                                                type="radio"
                                                name="y2"
                                                value="No"
                                            /><label className="radio-years">8</label>
                                        </div>
                                        <div className="col-md-4 r6">
                                            
                                            <input
                                                required
                                                value={userData["No"]}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        notOnTime: e.target.value,
                                                    })
                                                }
                                                type="radio"
                                                name="y2"
                                                value="No"
                                            /><label className="radio-years">9</label>
                                        </div>
                                        <div className="col-md-4 r6">
                                            
                                            <input
                                                required
                                                value={userData["No"]}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        notOnTime: e.target.value,
                                                    })
                                                }
                                                type="radio"
                                                name="y2"
                                                value="No"
                                            /><label className="radio-years">10</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="qstn">
                        <Col>
                            <div class="container radio">
                                <div className="row radio-row col-12">
                                    <div className="col-md-4 r1">
                                        Q1. Does He/She Smokes?
                                    </div>
                                    <div className="radio-btn1">
                                        <div className="col-md-4 r2">
                                            
                                            <input
                                                required
                                                value={userData["Yes"]}
                                                onChange={(e) =>
                                                    setUserData({ ...userData, onTime: e.target.value })
                                                }
                                                type="radio"
                                                name="y3"
                                                value="Yes"
                                            /><label>Yes</label>{" "}
                                        </div>
                                        <div className="col-md-4 r3">
                                            
                                            <input
                                                required
                                                value={userData["No"]}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        notOnTime: e.target.value,
                                                    })
                                                }
                                                type="radio"
                                                name="y3"
                                                value="No"
                                            /><label>No</label>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="qstn">
                        <Col>
                            <div class="container radio">
                                <div className="row radio-row col-12">
                                    <div className="col-md-4 r1">
                                        Q1. Does He/She Have Any Pets?
                                    </div>
                                    <div className="radio-btn1">
                                        <div className="col-md-4 r2">
                                           
                                            <input
                                                required
                                                value={userData["Yes"]}
                                                onChange={(e) =>
                                                    setUserData({ ...userData, onTime: e.target.value })
                                                }
                                                type="radio"
                                                name="y4"
                                                value="Yes"
                                            /> <label>Yes</label>{" "}
                                        </div>
                                        <div className="col-md-4 r3">
                                            
                                            <input
                                                required
                                                value={userData["No"]}
                                                onChange={(e) =>
                                                    setUserData({
                                                        ...userData,
                                                        notOnTime: e.target.value,
                                                    })
                                                }
                                                type="radio"
                                                name="y4"
                                                value="No"
                                            /><label>No</label>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                  
                   
                    <Row className="">
                        <Col>
                            <div class="container radio">
                                <div className="row radio-row col-12">
                                    <div className="col-md-4 r1"></div>
                                    <div className="radio-btn1">
                                        <div className="col-md-4 dcl-right">
                                            <div className="conf-dcl">
                                                <Button
                                                    variant="contained"
                                                    onClick={() => setStep(4)}
                                                    color="primary"
                                                >
                                                    Previous
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="col-md-4 nxt-right">

                                            <div className="conf-nxt">
                                                <button
                                                onClick={() => setStep(6)} 
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </form>
        </Container>
    );
}


