import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>  
        <Row>
         <Col md={4} className="project-card">
           <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Smart Agriculture"
              description="The post page & news page from our project.On the post page ,we can see any post regarding agriculture things & we can add any post regarding agriculture and it is similar to instagram & facebook.On the News button , we can see any news regarding agriculture things.the chatbot button page from our project . On the chatbot button page , we can ask any question and get answers based on agriculture & we can ask questions in both Tamil & English language and get answers in both Tamil & English."
              ghLink="https://github.com/sadham1999/Smart-Agriculture"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
