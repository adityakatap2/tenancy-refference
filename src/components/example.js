<div className="row col-12">
<div className="onestep">
    <div className="label-1 col-md-4"><h3>Address</h3><TextField label="Address" value={userData['Address']} onChange={(e)=>setUserData({...userData,"Address": e.target.value})} margin="normal" variant="outlined" color="secondary"/></div>
    <div className="label-2 col-md-4"><h3>Duration</h3><TextField label="Duration" value={userData['Duration']} onChange={(e)=>setUserData({...userData,"Duration": e.target.value})} margin="normal" variant="outlined" color="secondary"/></div>
    <div className="label-3 col-md-4"><h3>Rent Paid</h3><TextField label="Rent-Paid" value={userData['Rent-Paid']} onChange={(e)=>setUserData({...userData,"Rent-Paid": e.target.value})} margin="normal" variant="outlined" color="secondary"/></div>
    
       
</div>
<div className="content-grey">
<p class="content">Lorem Ipsume has requested for your reference for renting a property. Please can you confirm if the above mentioned details are correct.</p>
</div>
<div className="confirmation col-12">
    <div className="conf-1 col-md-6">
    <input type="checkbox"></input><span className="span">I , </span><span></span><TextField label="Your Name" value={userData['Your Name']} onChange={(e)=>setUserData({...userData,"Your Name": e.target.value})} margin="none"color="secondary"/><span></span><span className="span">do confirm these details are correct.</span>

    </div>
    <div className=" conf-2 col-md-6">
    <div className="conf-dcl"><Button variant="contained" onClick={()=>setStep(2)} color="primary">Decline</Button></div> <span></span>     
   <div className="conf-nxt"><Button variant="contained" onClick={()=>setStep(2)} color="primary">Next</Button></div>

    </div>

    


</div>
<Row className="qstn">
          <Col >
            <div class="container radio">
              <div className="row radio-row col-12">
                <div className="col-md-4 r1">
                  Q1. Is Property Currently Occupied?
                </div>

              </div>
            </div>
          </Col>
          <Col xs={6}></Col>
          <Col className="radio-btn"><div className="col-md-4 r2">
            <form>
              <label>Yes</label> <input type="radio" name="fruit" value="Yes" />
            </form>
          </div>
            <div className="col-md-4 r3">
              <form>
                <label>No</label> <input type="radio" name="fruit" value="No" />
              </form>
            </div></Col>
        </Row>
        <Row className="qstn">
          <Col >
            <div class="container radio">
              <div className="row radio-row col-12">
                <div className="col-md-4 r1">
                  Q1. Is Property Currently Occupied?
                </div>

              </div>
            </div>
          </Col>
          <Col xs={6}></Col>
          <Col className="radio-btn"><div className="col-md-4 r2">
            <form>
              <label>Yes</label> <input type="radio" name="fruit" value="Yes" />
            </form>
          </div>
            <div className="col-md-4 r3">
              <form>
                <label>No</label> <input type="radio" name="fruit" value="No" />
              </form>
            </div></Col>
        </Row>
        <Row className="qstn">
          <Col >
            <div class="container radio">
              <div className="row radio-row col-12">
                <div className="col-md-4 r1">
                  Q1. Is Property Currently Occupied?
                </div>

              </div>
            </div>
          </Col>
          <Col xs={6}></Col>
          <Col className="radio-btn"><div className="col-md-4 r2">
            <form>
              <label>Yes</label> <input type="radio" name="fruit" value="Yes" />
            </form>
          </div>
            <div className="col-md-4 r3">
              <form>
                <label>No</label> <input type="radio" name="fruit" value="No" />
              </form>
            </div></Col>
        </Row>
        <Row className="conf-1">
          <Col><div className="conf-text1">
                    <input type="checkbox"></input><span className="span">I , </span><span></span><TextField label="Your Name" value={userData['Your Name']} onChange={(e) => setUserData({ ...userData, "Your Name": e.target.value })} margin="none" color="secondary" /><span></span><span className="span">do confirm these details are correct.</span>
                </div></Col>
          <Col></Col>
          <Col className="conf-btn"><div className="conf-dcl"><Button variant="contained" onClick={() => setStep(2)} color="primary">Decline</Button></div> <span></span>
            <div className="conf-nxt"><Button variant="contained" onClick={() => setStep(2)} color="primary">Next</Button></div></Col>
            </Row>
</div>




