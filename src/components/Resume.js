import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.college}</h3>
                          <p className="info">
                          {item.UniversityName}
                          <br/>
                          {item.specialization}
                          <br/>
                          CGPA : {item.CGPA}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p className="achievement">
                          {item.Achievements}
                         <br/> <a>Technologies Used</a>
                          </p>
                             <p style={{color:"black"}}>
                             {item.tech.map((tex)=>{
                              return(
                            <li>{tex}</li>
                             ) })}
                          
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
         
         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Certifications</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                
                  
                    <div className="row item">
                       <div className="info">
                          <p>Java Business Application</p>
                          <p>Postgres database certificate </p>

                           
                       </div>
                    </div>
                
               
              }
            </div>
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>
 

            <div className="nine columns main-col">

               

   				<div className="bars">
           <div id="skills" style={{alignItems:'center', fornSize:"15px" }}>    

                        <a > &nbsp;  Java  &nbsp; </a>
                        &nbsp; 
                        <a  > &nbsp;  Spring  &nbsp; </a>

                        <a   > &nbsp;  ReactJs  &nbsp; </a>

                        <a   > &nbsp;  NodeJS  &nbsp; </a>
                        <a     > &nbsp;  JavaScript  &nbsp; </a>
                        <br/>
                        <a > &nbsp;  MongoDb  &nbsp; </a>
                        &nbsp; 
                        <a  > &nbsp;  Oracle  &nbsp; </a>

                        <a   > &nbsp;  MySql  &nbsp; </a>

                        <a   > &nbsp;  HTML  &nbsp; </a>
                     
                        <a     > &nbsp;  CSS  &nbsp; </a>
                        <br/>
                        <a     > &nbsp;  Amazone Web Services  &nbsp; </a>
                        <a     > &nbsp;  MongoDb  &nbsp; </a>
                        <a     > &nbsp;  ExpressJS  &nbsp; </a>
                        <a     > &nbsp;  Hibernate  &nbsp; </a>
                      </div>
   				   
                {/* {
                  resumeData.skills && resumeData.skills.map((item,index) => {
                    return(
                      
                      <div style={{  display: "inline"}}>    
                        <a  style={{  display: "inline"}}id="skillset"> &nbsp;   {    item.skillname} &nbsp; </a>
                        &nbsp; 
                      </div>
                      
                    )
                  })
                } */}


 
  

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}