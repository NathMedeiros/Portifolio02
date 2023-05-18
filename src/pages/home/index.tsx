// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";
import Typist from "react-typist";
import { TypeAnimation } from "react-type-animation";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  DivButton,
} from "./style";
import { About } from "@/components/About";
import { useState } from "react";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/Portifolio02`;

  const englishAboutText = `I am a certified front-end developer from Kenzie Academy with solid experience in building web projects. Currently, I am completing the back-end development course, expanding my knowledge and skills in this area.\n\nI have expertise in agile methodology, HTML5, CSS3, Figma, JavaScript (ES6+), React, TypeScript, SQL, TypeORM, and Data-source, with an emphasis on search methods like findOne and findOneBy. Additionally, I have knowledge in Python and Postgres, which I have been using in project development.\n\nI constantly strive to improve my skills and knowledge, aiming to deliver clean and well-organized code. I have experience working with teams using GitHub, and I have served as a Scrum Master on a project, where I used Trello for better planning and organization. This experience was incredible and challenging, representing a significant milestone in my learning.\n\nI am committed to delivering high-quality solutions, applying best development practices, and seeking innovation. I am passionate about technology and always seek to face new challenges, keeping myself updated with the latest market trends.\n\nCertifications:\n\n- Front-end Development: Kenzie Academy\n- In progress: Back-end Development`;

  const portugueseAboutText = `Sou desenvolvedora front-end certificada pela Kenzie Academy, com sólida experiência na construção de projetos web. Atualmente, estou concluindo o curso de desenvolvimento back-end, ampliando meu conhecimento e habilidades nessa área.\n\nPossuo expertise em metodologia ágil, HTML5, CSS3, Figma, JavaScript (ES6+), React, TypeScript, SQL, TypeORM e Data-source, com ênfase em métodos de busca como findOne e findOneBy. Além disso, tenho conhecimentos em Python e Postgres, os quais tenho utilizado no desenvolvimento de projetos.\n\nBusco constantemente aprimorar minhas habilidades e conhecimentos, visando a entrega de código limpo e bem organizado. Tenho experiência em trabalhar com equipes utilizando o GitHub, e já exerci a função de Scrum Master em um projeto, onde utilizei o Trello para um melhor planejamento e organização. Essa experiência foi incrível e desafiadora, representando um importante marco no meu aprendizado.\n\nEstou comprometida em entregar soluções de alta qualidade, aplicando as melhores práticas de desenvolvimento e buscando inovação. Sou apaixonada por tecnologia e sempre busco enfrentar novos desafios, mantendo-me atualizada com as últimas tendências do mercado.\n\nCertificações:\n\n- Desenvolvimento Front-end: Kenzie Academy\n- Em andamento: Desenvolvimento Back-end`;

  const [isEnglish, setIsEnglish] = useState(false);

  const handleLanguageToggle = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <Text color="grey4">Hello, my name is {userData.nameUser}</Text>
            </Flex>

            <Text as="h1" type="heading1" color="grey5">
              I'm a{" "}
              <TypeAnimation
                sequence={["Front-end", 1000, "Back-end", 2000]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
                style={{
                  // fontSize: "1.5rem",
                  display: "inline-block",
                  color: "#560bad",
                  width: "38%",
                }}
              />
              <Text as="span" type="heading1" color="grey5">
                Developer
              </Text>{" "}
            </Text>
            <Text type="body1" color="grey2">
              Discover here in this environment, created especially for you, all
              my projects and technologies
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                See Projects
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                See my portfolio source code
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <DivButton>
        <Button type="language" onClick={handleLanguageToggle}>
          {isEnglish ? "Switch to Portuguese" : "Switch to English"}
        </Button>
      </DivButton>
      <About aboutText={isEnglish ? englishAboutText : portugueseAboutText} />

      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                My projects
              </Text>
              <Text as="p" type="body1" color="grey2">
                Some of my{" "}
                <Text as="span" color="brand5">
                  side projects
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
