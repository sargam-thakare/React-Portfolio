import React, { Component } from 'react';
 
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
     
      <section id="portfolio">
         <h2 style={{textAlign:'center'}}>Personal Projects</h2>
        <div className=" tab1cards"  >
          <div className="  row col-md-5 " >
              
            <div className="card" style={{ width: "80rem" }}>
              <img className="card-img-top" src="images/portfolio/studentinfo.PNG" alt="Card image cap"></img>
              <div className="card-body">
                <h5 className="card-title">Student Information System</h5>
                <p className="card-text"> It is a web application which is based on MERN full stack which helps in managing student information effectively .
                <b>Language</b>: JavaScript.
Description: Web Application was a single page application developed using MERN Full Stack.
State Management was done using <b>React Redux</b> . <b>JWT token</b> generator was used for transmitting data.
Application has modules like student and faculty which are performing different operations.
                </p>

                <a target="_blank" href='https://github.com/sargam-thakare/student-information-management/tree/master' className="btn btn-primary"><button className="btn-btn-primary">Click Here</button></a>
             
                
         </div>
            </div>
            


          </div>


          {/* <div className="  row col-md-5" >
<br/><br/>
            <div className="card" style={{ width: "40rem" }}>
               <div className="card-body">
                <h5 className="card-title"><a target="_blank" href='https://github.com/sargam-thakare/student-information-management/tree/master'>About Student Information System</a></h5>
                <p className="card-text" style={{textAlign:'left',color:"black"}}> <b>Language</b>: JavaScript.
Description: Web Application was a single page application developed using MERN Full Stack.
State Management was done using <b>React Redux</b> . <b>JWT token</b> generator was used for transmitting data.
Application has modules like student and faculty which are performing different operations.</p>

               </div>
            </div>

          </div> */}


        </div>
      </section>
    );
  }
}