import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary fw-bold mb-4" data-aos="fade-down">
        My Journey 🚀
      </h1>
      
      <div className="row">
        {/* Education Section */}
        <div className="col-md-6" data-aos="fade-right">
          <div className="card shadow-lg p-4">
            <h3 className="text-success fw-bold">🎓 Education</h3>
            <p>
              I completed my <strong>M.Sc. in Computer Science</strong> from
              <span className="text-primary"> Birmingham City University</span>.
              I have also completed B.Tech. and Diploma in Information Technology  from  <span className="text-primary">Punjab Technical University, India</span> .
              <strong> I have completed industrial training in core and Advance Java during my graduation.</strong>
            </p>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="col-md-6" data-aos="fade-left">
          <div className="card shadow-lg p-4">
            <h3 className="text-info fw-bold">💼 Work Experience</h3>
            <p>
              I started working as web designer and developer. Later I learned Android mobile app developement and developed many projects.I have worked in 2 IT companies based in Chandigarh, India. I am having 5 years of experience in Developing web sites and mobile applications. Now, I specialize in creating full-stack applications using
              <strong> ReactJS, MERN Stack, and Android development.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="row mt-4">
        <div className="col-md-6" data-aos="zoom-in">
          <div className="card shadow-lg p-4">
            <h3 className="text-danger fw-bold">🚀 Skills</h3>
            <p>
              Skilled in <strong>HTML, CSS ,ReactJS, NodeJS, MySQL, Python, Android app Development</strong> and
              more. Constantly learning and growing as a full-stack developer.
            </p>
          </div>
        </div>

        {/* Future Goals Section */}
        <div className="col-md-6" data-aos="zoom-in">
          <div className="card shadow-lg p-4">
            <h3 className="text-warning fw-bold">🎯 Future Goals</h3>
            <p>
              My goal is to become an expert in <strong>React, MERN Stack, and AI-driven applications</strong>. 
              I aspire to build innovative projects that have a real-world impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
