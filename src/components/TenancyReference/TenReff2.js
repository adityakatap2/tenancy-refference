 
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

export default function TenReff2() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const { register, handleSubmit, control, error } = useForm();
  const clickSubmit = (e) => {
    e.preventDefault();
    setStep(2);
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
                    Q1. Any Breaches In Rental Agreement?
                  </div>
                  <div className="radio-btn1">
                    <div className="col-md-4 r2">
                      <label>Yes</label>{" "}
                      <input
                        required
                        value={userData["Yes"]}
                        onChange={(e) =>
                          setUserData({ ...userData, breach: e.target.value })
                        }
                        type="radio"
                        name="c3"
                        value="Yes"
                      />
                    </div>
                    <div className="col-md-4 r3">
                      <label>No</label>{" "}
                      <input
                        reqiured
                        value={userData["No"]}
                        onChange={(e) =>
                          setUserData({ ...userData, noBreach: e.target.value })
                        }
                        type="radio"
                        name="c3"
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
                    Q1. Was Any Amiunt Of Bond Withheld?
                  </div>
                  <div className="radio-btn1">
                    <div className="col-md-4 r2">
                      <label>Yes</label>{" "}
                      <input
                        required
                        value={userData["Yes"]}
                        onChange={(e) =>
                          setUserData({ ...userData, bond: e.target.value })
                        }
                        type="radio"
                        name="c4"
                        value="Yes"
                      />
                    </div>
                    <div className="col-md-4 r3">
                      <label>No</label>{" "}
                      <input
                        required
                        value={userData["No"]}
                        onChange={(e) =>
                          setUserData({ ...userData, noBond: e.target.value })
                        }
                        type="radio"
                        name="c4"
                        value="No"
                      />
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
                          onClick={() => setStep(1)}
                          color="primary"
                        >
                          prevoius
                        </Button>
                      </div>
                    </div>
                    <div className="col-md-4 nxt-right">
                      {/* <div className="conf-nxt"><Button variant="contained" onClick={() =>  { if(userData.Occupied || userData.notOccupied && userData.onTime || userData.notOnTime &&
                  userData.breach || userData.noBreach && userData.bond || userData.noBond ) setStep(3)}} color="primary">Next</Button></div> */}
                      <div className="conf-nxt">
                        <button
                        onClick={() => setStep(3)}
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
