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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal AI Chat Assistant built with React.js, Material-UI, and Firebase. Features include real-time AI-powered conversations, smart suggestions, and context-aware replies. Users can chat seamlessly with the AI, store past conversations, and enjoy a modern, responsive interface."
              ghLink="https://github.com/selatinhaliti/simpledialog"
              demoLink="https://simplediaolog.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="PromptSale"
              description="My personal Prompt Sale platform built with Next.js and Tailwind CSS where users can create, list, and purchase AI prompts. Supports dark mode, category-based browsing, secure transactions, and an easy-to-use interface for managing and selling prompts."
              ghLink="https://github.com/selatinhaliti/PromptSale"
              demoLink="https://prompsale.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Crypto trander"
              description="Online Crypto Trading platform built with React.js. The app supports real-time cryptocurrency price tracking, portfolio management, and instant trade execution. Users can view live market charts, track their holdings, and analyze trends with interactive dashboards. The platform also supports secure login, auto-save of user preferences using Local Storage, and a smooth responsive experience."
              ghLink="https://github.com/selatinhaliti/crypto-trander"
              demoLink="https://cryptotrademiner.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Space crypto miner"
              description="Built a Space Crypto Miner simulation using React.js and Web3 integration to demonstrate mining and transaction validation on a blockchain network. Implemented real-time mining statistics, wallet connectivity, and smart contract interactions. The system successfully simulates block rewards, transaction confirmations, and energy usage. Achieved smooth performance and high accuracy in tracking mining activities with responsive dashboards."
              ghLink="https://github.com/selatinhaliti/space-crypto-miner"
              demoLink="https://spacecrypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="E commerce cloths"
              description="Developed an online Clothes Web E-commerce platform built with React.js and Firebase. The platform allows users to browse and purchase clothing items with features like product search, category filters, shopping cart, and secure checkout. Implemented responsive design, user authentication, and real-time inventory management to ensure a smooth shopping experience."
              ghLink="https://startling-shortbread-0ae9d1.netlify.app/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/SelatinHaliti/facedetacted"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
