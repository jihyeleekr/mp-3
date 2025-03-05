import {styled} from 'styled-components';
import {useParams} from "react-router";
import {useEffect} from "react";
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';



const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    
    @media screen and (max-width: 900px) {
        width: 100%;
        height: auto;
        flex-direction: column;
    }
`;

const Main = styled.main`
    display: flex;
    padding-left: 0.5vw;
    flex-direction: column;
    width: 70%;
    color: #1c1c1c;

    p{
        margin: 0 1vw;
        font-size: calc(2px + 2vw);
    }
    
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        background-color: #f9f9f9;
    }
`;

const MainTitle = styled.h3`
    margin: 10px 0 5px 0;
    text-align: center;
    font-size: calc(2px + 2vw);
    color: #003366;

    @media screen and (max-width: 900px) {
        font-size: calc(1.5em + 0.5vw);
        text-align: center;
        color: #003366;
    }
`;

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 1vw;
    padding-top: 0;
    align-items: flex-start;
`;

const HCILab = styled.div`
    margin: auto;
    padding: 1em 1.5em 1.5em;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StemTutor = styled.div`
    margin: 2vh auto;
    padding: 1em 1.5em 1.5em;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DSIntern = styled.div`
    margin: 2vh auto;
    padding: 1em 1.5em 1.5em;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ExperienceDiv = styled.div`
    width: 100%;
    margin-bottom: 2vh;
    padding: 1.5em;
    
    ul{
        padding-left: 1.5em;
        margin-top: 0.5em;
        list-style-type: disc;
    }
`;

const ExperienceHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
    margin-bottom: 0.5em;
`;

const ExperienceLeft = styled.div`
    flex: 1;

    h3 {
        font-size: calc(14px + 0.7vw);
        font-weight: bold;

        a {
            text-decoration: none;
            color: black;
            font-weight: bold;
        }
    }

    p {
        font-size: calc(10px + 0.6vw);
        font-style: italic;
    }
`;

const ExperienceRight = styled.div`
    flex-shrink: 0;
    text-align: right;
    min-width: 180px;
    
    p{
        font-size: calc(10px + 0.5vw);
        margin: 0;
    }
`;


export default function Experience() {
    const currentPath=useParams();
    let lastValue=Object.values(currentPath).pop() || "";
    lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);
    useEffect(()=>{
        if(lastValue===""){
            document.title="Home | Resume";
        }else {
            document.title=lastValue+" | Resume";
        }
    },[lastValue])
    return(
      <>
          <PageWrapper>
              <Header subtitle="Explore My Career Journey!"/>
              <Container>
                  <Nav />
                  <Main>
                      <MainTitle>Experience</MainTitle>
                  <MainDiv>
                      <ExperienceDiv>
                          <HCILab>
                              <ExperienceHeader>
                                  <ExperienceLeft>
                                      <h3><a href="https://github.com/gutbash/lmm-graph-vision">ML Research intern</a></h3>
                                      <p><em>Human-computer Interaction Lab at Temple University</em></p>
                                  </ExperienceLeft>
                                  <ExperienceRight>
                                      <p><strong>October 2023 - Present</strong></p>
                                      <p><em>Philadelphia, PA</em></p>
                                  </ExperienceRight>
                              </ExperienceHeader>
                              <ul>
                                  <li><strong>Lmm-Graph-Tree-Vqa</strong>: Evaluated and compared the zero-shot Visual Question Answering
                                      (VQA) performance of GPT-4V and Gemini Pro Vision models on complex data structures,
                                      focusing on graphs and trees</li>
                                  <li><strong>Image Generator</strong>: Developed a dynamic image generator for graphs and trees using Python,
                                      NetworkX, and Matplotlib, enabling the creation of diverse, randomized data structure visuals</li>
                                  <li><strong>Model Comparison</strong>: Conducted a head-to-head comparison of GPT-4V and Gemini Pro Vision
                                    models, measuring their zero-shot accuracy in solving graph and tree data structure challenges,
                                    and visualized the competitive results with Matplotlib</li>
                              </ul>
                          </HCILab>

                          <StemTutor>
                              <ExperienceHeader>
                                  <ExperienceLeft>
                                      <h3>STEM Tutor</h3>
                                      <p><em>Temple University</em></p>
                                  </ExperienceLeft>
                                  <ExperienceRight>
                                      <p><strong>January 2023 - May 2024</strong></p>
                                      <p><em>Philadelphia, PA</em></p>
                                  </ExperienceRight>
                              </ExperienceHeader>
                              <ul>
                                  <li>Successfully mentored and guided <strong>over 100 students</strong> in Calculus I, II, III, Python, Java, Data Structures, and Discrete Math</li>
                              </ul>
                          </StemTutor>

                          <DSIntern>
                              <ExperienceHeader>
                                  <ExperienceLeft>
                                      <h3><a href="https://docs.google.com/presentation/d/10cY6Ya7i7KwIVrcWWAbP2yZawjbmens5eV0Mq1pcYSE/edit?usp=sharing">Data Science Intern</a></h3>
                                      <p><em>Lee Lab at Harvard Medical School</em></p>
                                  </ExperienceLeft>
                                  <ExperienceRight>
                                      <p><strong>June 2021 – September 2021</strong></p>
                                      <p><em>Boston, MA</em></p>
                                  </ExperienceRight>
                              </ExperienceHeader>
                                  <ul>
                                      <li><strong>Workflow Development</strong>: Engineered a robust computational workflow for scA TAC-seq data
                                          analysis using R/R Studio, optimizing the process for efficiency and accuracy</li>
                                      <li><strong>Issue Resolution</strong>: Proactively identified and resolved three critical dependency issues with R
                                          packages, ensuring seamless operation and stability of the workflow</li>
                                      <li><strong>Data Visualization</strong>: Visualized complex datasets from publicly available “Adult Mouse Brain”
                                          and “10X PBMC” studies, transforming raw data into insightful, interpretable visuals</li>
                                  </ul>
                          </DSIntern>
                      </ExperienceDiv>
                  </MainDiv>
                  </Main>
              </Container>
              <Footer />
          </PageWrapper>

      </>
    );
}








