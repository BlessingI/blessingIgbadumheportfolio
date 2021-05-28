import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience </h1> 
      </div>
      
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3> Dream Chase Technology - 2020</h3>
            <h4> Web Developer </h4>
            <ul>
              <li><p>Building sustainable coding that may be used in the future.</p></li>
              <li><p>Ensuring the feasibility of UI/UX designs.</p></li>
              <li><p>Enhancing performance of the main front-end website.</p></li>
              <li><p>Modifying designs and specifications of complex applications.</p></li>
              <li><p>Analyzing code, requirements, system risks, and software reliability</p></li>
              <li><p>Collaborating with front-end and back-end web developers</p></li>
           </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
          <h3>Texas Southern University - 2018</h3>
            <h4> Web Developer </h4>
            <ul>
              <li><p>Maintained, re-designed and resolved issues including broken links and improving 
              accessibility in the University websites using HTML, CSS and JavaScript on Omni Campus 
              and Cascade Content Management System (CMS)</p></li>
              <li><p>Worked with the Web team in creating program oriented websites for Student Recreation, 
              Student Services, Department of Public services at Texas Southern University and Office of 
              Information Technology</p></li>
              <li><p>Created GPA calculator page with JavaScript CSS and Html.</p></li>
              <li><p>Refactored source code and deleting temporary files for efficiency.</p></li>
           </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Consultant Developer - 2010</h3>
            <h4> Frontend Developer </h4>
            <ul>
              <li><p>Working with clients to develop the overall look and design of a website</p></li>
              <li><p>Writing website code with programming languages such as HTML, CSS and Javascript</p></li>
              <li><p>Producing, maintaining and modifying websites and user interfaces</p></li>
              <li><p>Incorporating applications, graphics, audio and video clips into client websites</p></li>
              <li><p>Ensuring websites are accessible across many platforms, including laptops and smartphones</p></li>
              <li><p>Routinely testing websites for ease of use, speed and other quality factors</p></li>
           </ul>
          </div>
        </div>
        {/* - */}
        {/* - */}
      </div>
    </div>
  )
}

export default Experience;
