import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";


const Home = () => {

  const [modalShow, setModalShow] = useState(false);
  return (
    <Container fluid className="bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
      {/* Hero Section */}
      <Fade cascade duration={1200}>
        <Row className="text-center">
          <Col>
            <h1 className="display-4 fw-bold text-primary">Hi, I'm Manpreet Singh 👋</h1>
            <p className="lead text-muted">Professional Web & App Developer | React | PHP (Laraval) | Android | Flutter</p>
           
          </Col>
        </Row>
      </Fade>

      {/* Technologies Section */}
      <Fade direction="up" duration={1000} delay={500}>
      <Row className="mt-5">
        <Col className="text-center">
          <h2 className="fw-bold text-dark">Tech Stack</h2>
          <div className="d-flex justify-content-center gap-5 mt-3">
            {/* HTML */}
            <div className="tech-icon">
              <i className="bi bi-file-earmark-code text-danger display-4" title="HTML"></i>
              <p className="mt-2">HTML</p>
            </div>

            

            {/* JavaScript */}
            <div className="tech-icon">
              <i className="bi bi-braces text-warning display-4" title="JavaScript"></i>
              <p className="mt-2">JavaScript</p>
            </div>

            {/* PHP */}
            <div className="tech-icon">
              <i className="bi bi-file-earmark-text text-info display-4" title="PHP"></i>
              <p className="mt-2">PHP</p>
            </div>

            {/* Laravel */}
            <div className="tech-icon">
              <i className="bi bi-cpu text-danger display-4" title="Laravel"></i>
              <p className="mt-2">Laravel</p>
            </div>

            {/* Python */}
            <div className="tech-icon">
              <i className="bi bi-patch-check text-success display-4" title="Python"></i>
              <p className="mt-2">Python</p>
            </div>

            {/* MySQL */}
            <div className="tech-icon">
              <i className="bi bi-database text-primary display-4" title="MySQL"></i>
              <p className="mt-2">MySQL</p>
            </div>


            
            {/* Android */}
            <div className="tech-icon">
              <i className="bi bi-android2 text-success display-4" title="Android"></i>
              <p className="mt-2">Android</p>
            </div>

            {/* Flutter */}
            <div className="tech-icon">
              <i className="bi bi-braces text-info display-4" title="Flutter"></i>
              <p className="mt-2">Flutter</p>
            </div>
          </div>
        </Col>
      </Row>
    </Fade>

      {/* Contact Section */}
      <Fade direction="up" duration={1000} delay={700}>
        <Row className="mt-5 text-center">
          <Col>
            <h2 className="fw-bold text-dark">Let's Connect!</h2>
            <p className="text-muted">Find me on:</p>
            <div className="d-flex justify-content-center gap-4">
              <a href="https://github.com/msbrar50" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github text-dark display-5"></i>
              </a>
              <a href="https://www.linkedin.com/in/manpreet-singh-7a1095326/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin text-primary display-5"></i>
              </a>
            </div>


            <Button variant="primary" size="lg" className="mt-3 shadow-lg" >
            Thank you for viewing my portfolio.
            </Button>
          </Col>

        </Row>
      </Fade>

      

    </Container>
  );
};

export default Home;
