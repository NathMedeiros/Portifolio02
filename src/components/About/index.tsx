import React, { useState } from "react";
import { Container, Content, Paragraph } from "./style";
import vetorSeta from "../../public/static/img/vetor/vetor.png";

interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {
  aboutText: string;
}

export const About: React.FC<AboutProps> = ({ aboutText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageToggle = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <Container id="aboutMe" className="arrow">
      <div className="divImg" onClick={toggleAccordion}>
        <h2>About me</h2>
        <img src={vetorSeta} alt="" />
      </div>

      <div className={`accordion ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <Content className="content">
            {aboutText.split("\n\n").map((paragraph, index) => (
              <Paragraph key={index}>{paragraph}</Paragraph>
            ))}
          </Content>
        )}
      </div>
    </Container>
  );
};
