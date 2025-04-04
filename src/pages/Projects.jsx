import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { Modal, Carousel } from "react-bootstrap";

const projectList = [
  {
    title: "AI-Stock Market Forecasting System",
    description: "An AI-powered stock forecasting web app using LLaMA 3, ARIMAX models and Stock Apis.",
    technologies: ["ReactJS", "Flask", "Ollama", "Web Sockets"],
    date: "July 2024",
    images: ["images/stock_1.png", "images/stock_2.png", "images/stock_3.png"],
  },
  {
    title: "Bookshop -E-commerce Platform",
    description: "User can see and buy Fiction and Non Fiction Books",
    technologies: ["MERN Stack", "Node JS", "ReactJS"],
    date: "January 2025",
    images: ["/images/ecom1.png", "/images/ecom2.png", "/images/ecom3.png"],
  },
  {
    title: "Banking System",
    description: "Banking System software to handle all the operations related to account management",
    technologies: ["Python", "Tkinter Library"],
    date: "December 2023",
    images: ["images/bank_1.png", "images/bank_2.png", "images/bank_3.png"],
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [modalShow, setModalShow] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (images, index) => {
    setSelectedImages(images);
    setCurrentIndex(index);
    setModalShow(true);
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-dark fw-bold" data-aos="fade-right">📁 My Projects</h1>
        <h3 className="text-primary fw-bold" data-aos="fade-left">Total Projects: {projectList.length}</h3>
      </div>

     

      <div className="row mt-4">
        {projectList.map((project, index) => (
          <div key={index} className="col-md-6 mb-4" data-aos="zoom-in">
            <div className="card shadow-lg project-card"
             onClick={() => handleImageClick(project.images, 0)}
            style={{
              border: "5px solid #007bff", 
              borderRadius: "10px",
            }}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="card-img-top project-img"
                onClick={() => handleImageClick(project.images, 0)}
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p className="fw-bold">Tech Used: <span className="text-primary">{project.technologies.join(", ")}</span></p>
                <p className="text-muted">📅 {project.date}</p>

                <div className="hover-text">Click to view images</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      <Modal show={modalShow} onHide={() => setModalShow(false)} centered size="lg">
        <Modal.Body>
          <Carousel activeIndex={currentIndex} onSelect={(selectedIndex) => setCurrentIndex(selectedIndex)}>
            {selectedImages.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img className="d-block w-100" src={img} alt="Project Screenshot" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Projects;
