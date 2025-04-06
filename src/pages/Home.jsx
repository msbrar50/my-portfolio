import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (

    <div className="water-effect">
    <Container fluid className="animated-bg min-vh-100 d-flex flex-column justify-content-center align-items-center py-5 px-3">
      {/* Hero Section */}
      <Fade cascade duration={1200}>
        <Row className="text-center">
          <Col>
          <h1 className="display-6 fw-bold text-white bg-dark p-3 rounded code-style">
  ➜ ~ Hello, I'm <span className="text-success">Manpreet Singh</span> 👨‍💻
</h1>


<div className="game-text-wrapper">
  <p className="game-text">
  🚀 Professional Web & App Developer <br />
  ⚛️ React | PHP | Laravel | Android | Flutter 
</p></div>

          </Col>
        </Row>
      </Fade>

      {/* Tech Stack Section */}
      <Fade direction="up" duration={1000} delay={500}>
        <Row className="mt-5">
          <Col className="text-center">
            <h2 className="fw-bold text-dark mb-4">Tech Stack</h2>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              {[
                { icon: "file-earmark-code", color: "text-danger", label: "HTML" },
                { icon: "braces", color: "text-warning", label: "JavaScript" },
                { icon: "file-earmark-text", color: "text-info", label: "PHP" },
                { icon: "cpu", color: "text-danger", label: "Laravel" },
                { icon: "patch-check", color: "text-success", label: "Python" },
                { icon: "database", color: "text-primary", label: "MySQL" },
                { icon: "android2", color: "text-success", label: "Android" },
                { icon: "braces", color: "text-info", label: "Flutter" },
              ].map(({ icon, color, label }) => (
                <div key={label} className="text-center px-3">
                  <i className={`bi bi-${icon} ${color} display-5`}></i>
                  <p className="mt-2 mb-0">{label}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Fade>

      {/* Contact Section */}
      <Fade direction="up" duration={1000} delay={300}>
        <Row className="mt-5 text-center">
          <Col>
            <h2 className="fw-bold text-dark">Let's Connect!</h2>
            <p className="text-muted">Find me on:</p>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <a href="https://github.com/msbrar50" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github text-dark display-5"></i>
              </a>
              <a href="https://www.linkedin.com/in/manpreet-singh-7a1095326/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin text-primary display-5"></i>
              </a>
            </div>

            <Button variant="primary" size="lg" className="mt-4 shadow">
              Thank you for viewing my portfolio.
            </Button>
          </Col>
        </Row>
      </Fade>



      
    </Container></div>
  );
};

export default Home;
