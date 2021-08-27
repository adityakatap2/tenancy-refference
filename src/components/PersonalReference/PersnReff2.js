
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
import StarRating from "./StarRating";

export default function PersnReff2() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    const { register, handleSubmit, control, error } = useForm();
    const clickSubmit = (e) => {
        e.preventDefault();
        setStep(8);
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
                                            Q1. Is Property Currently Occupied?
                                        </div>
                                         <div className="radio-btn1">
                                            <div className="col-md-4 r2">
                                                <label>Yes</label>{" "}
                                                <input
                                                    required
                                                    value={userData["Yes"]}
                                                    onChange={(e) =>
                                                        setUserData({ ...userData, Occupied: e.target.value })
                                                    }
                                                    type="radio"
                                                    name="c1"
                                                    value="Yes"
                                                />
                                            </div>
                                            <div className="col-md-4 r3">
                                                <label>No</label>{" "}
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
                                                />
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
                                            Q1. Is Tenant Pays Rent On Time?
                                        </div>
                                        <div className="radio-btn1">
                                            <div className="col-md-4 r2">
                                                <label>Yes</label>{" "}
                                                <input
                                                    required
                                                    value={userData["Yes"]}
                                                    onChange={(e) =>
                                                        setUserData({ ...userData, onTime: e.target.value })
                                                    }
                                                    type="radio"
                                                    name="c2"
                                                    value="Yes"
                                                />
                                            </div>
                                            <div className="col-md-4 r3">
                                                <label>No</label>{" "}
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
                                                    name="c2"
                                                    value="No"
                                                />
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
                                            Q1.  Did You Enjoy Working With?
                                        </div>
                                        <div className="radio-btn1">
                                           
                                            <div className="col-md-4 star-spacing">
                                               <StarRating></StarRating>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="qstn">
                            <Col>
                                <div class="container radio">

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
                                                    onClick={() => setStep(7)}
                                                        variant="contained"
                                                        
                                                        color="primary"
                                                    >
                                                        Previous
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="col-md-4 nxt-right">
                                               
                                                <div className="conf-nxt">
                                                    <button
                                                    onClick={() => setStep(9)}
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


