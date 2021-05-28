import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
                I have been developing websites for over 3 years. I make use of MERN(MongoDB, Express, ReactJS and NodeJS).

                I create responsive websites that are displayed on all devices, desktops and smartphones. I am a team player and a web developer, passionate to use frontend and Nodejs skills to build great web/mobile applications in creating great user experience.

                In striving to increase knowledge and contribute value, I have achieved a Masters degree in computer science and gained two years working experience in assisting content editors, developers and project managers/coordinators with maintenance and technical development of the university’s multiple websites at Texas Southern University. I have personally worked on multiple projects, to deepen my understanding on how things work, build up resilience to turn challenges into success and I strongly believe I can compete at any level.

                I consider myself forever a student, I'm always eager to strenghten my career in software engineering by staying in tune with the latest technology trends through hardwork and continued coursework.

                I believe that mindfulness plus great work ethics will always lead to success. A quality that was self-taught through mind exercising meditation and long distance jogging that i have embranced as hobby.

                I am currently seeking a job and interested in a challenge. Reach out to me on <br />
                <a href="mailto:" class="blessingemail">bigbadumhe@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
