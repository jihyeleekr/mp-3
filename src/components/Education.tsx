import styled from "styled-components";
import Header from "./Header.tsx";
import Footer from "./Footer";
import Nav from "./Nav";
import {useParams} from "react-router";
import {useEffect} from "react";


const PageWrapper = styled.div`
    width: 100%;
    max-width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    //position: relative;

    @media screen and (max-width: 900px) {
        width: 100%;
        height: auto;
        flex-direction: column;
    }
`;

const MainContainer = styled.main`
    display: flex;
    padding-left: 0.5vw;
    flex-direction: column;
    width: 70%;
    color: #1c1c1c;

  @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      background-color: #f9f9f9;  }
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

const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 1vw;
    padding-top: 0;
    align-items: flex-start;
    gap: 2vw;

  @media screen and (max-width: 900px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;  }
`;

const EducationBlock = styled.div`
    flex: 1; /* source: https://www.w3schools.com/cssref/css3_pr_flex.php */
    min-width: 45%;
    background-color: #ffffff;
    padding: 1.5em;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const BUImage = styled.img`
    display: block;
    margin: 0 auto 1em auto;
    width: auto;
    max-width: 150px;
    height: auto;
    
    @media screen and (max-width: 900px) {
        margin: 1em auto;
    }
`;

const TUImage = styled.img`
    display: block;
    margin: 1em auto 1em auto;
    width: auto;
    max-width: 150px;
    height: auto;
    
    @media screen and (max-width: 900px) {
        margin: 1em auto;
    }
`;

const TUTitle = styled.h2`
    margin-top: 0.8em;
`;

const Subtitle = styled.h2`
    font-size: 1.8em;
    color: #1c1e26;
    margin: 1em 0;
    line-height: 1.2;
    text-align: center;
`;

const Text = styled.p`
    margin: 0.5em 1vw;
    font-size: calc(1em + 0.2vw);
`;

const StyledH3 = styled.h3`
    margin-top: 16px;
    font-size: calc(1.2em + 0.5vw);
    color: #4a4a4a;
`;


const CourseList = styled.ul`
    margin-top: 8px;
    padding-left: 24px;
    list-style: disc;
`;

const CourseItem = styled.li`
    margin-bottom: 8px;
`;

export default function Education(){
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
                <Header subtitle="Explore My Academic Journey"/>
                <Container>
                    <Nav />
                    <MainContainer>
                        <MainTitle>Education</MainTitle>
                        <MainContent>
                            <EducationBlock>
                                <BUImage src="/public/Boston_University.png" alt="Boston University" />
                                <h2>Boston University</h2>
                                <Text><strong>Duration:</strong> September 2024 - May 2026</Text>
                                <Text><strong>Degree:</strong> Bachelor of Science in Computer Science</Text>
                                <Text><strong>GPA:</strong> 3.90</Text>
                                <StyledH3>Relevant Coursework:</StyledH3>
                                <Subtitle>Fall 2024</Subtitle>
                                <CourseList>
                                    <CourseItem>Intro to DS with Python</CourseItem>
                                    <CourseItem>Probability in Computing</CourseItem>
                                    <CourseItem>Concepts of Programming Languages</CourseItem>
                                </CourseList>

                                <Subtitle>Spring 2025</Subtitle>
                                <CourseList>
                                    <CourseItem>Foundation of Data Science</CourseItem>
                                    <CourseItem>Topics in Computer Science</CourseItem>
                                    <CourseItem>Intro to Artificial Intelligence</CourseItem>
                                    <CourseItem>First-Semester Japanese</CourseItem>
                                    <CourseItem>Class Civ Rome</CourseItem>
                                </CourseList>
                            </EducationBlock>

                            <EducationBlock>
                                <TUImage src="/public/Temple_University.png" alt="Temple University" />
                                <TUTitle>Temple University</TUTitle>
                                <Text><strong>Duration:</strong> August 2022 - May 2024</Text>
                                <Text><strong>Degree:</strong> Bachelor of Science in Computer Science</Text>
                                <Text><strong>GPA:</strong> 3.94</Text>
                                <StyledH3>Relevant Coursework:</StyledH3>
                                <Subtitle>Fall 2022</Subtitle>
                                <CourseList>
                                    <CourseItem>Intro to Problem-Solving and Programming - Python</CourseItem>
                                    <CourseItem>Calculus I</CourseItem>
                                    <CourseItem>Analytical Reading and Writing</CourseItem>
                                    <CourseItem>CST First Year Seminar</CourseItem>
                                    <CourseItem>Introduction to Academics in Computer Science</CourseItem>
                                </CourseList>

                                <Subtitle>Spring 2023</Subtitle>
                                <CourseList>
                                    <CourseItem>Mathematical Concepts in Computing I</CourseItem>
                                    <CourseItem>Design and Abstraction - Java</CourseItem>
                                    <CourseItem>Calculus II</CourseItem>
                                    <CourseItem>Intellectual Heritage I</CourseItem>
                                </CourseList>

                                <Subtitle>Fall 2023</Subtitle>
                                <CourseList>
                                    <CourseItem>Mathematical Concepts in Computing II</CourseItem>
                                    <CourseItem>Data Structure</CourseItem>
                                    <CourseItem>Calculus III</CourseItem>
                                    <CourseItem>Independent Research</CourseItem>
                                </CourseList>

                                <Subtitle>Spring 2024</Subtitle>
                                <CourseList>
                                    <CourseItem>Foundation of Machine Learning</CourseItem>
                                    <CourseItem>Data Structure and Algorithm</CourseItem>
                                    <CourseItem>Computer Systems and Low-Level Programming - C#</CourseItem>
                                    <CourseItem>Linear Algebra</CourseItem>
                                    <CourseItem>Mathematical Modeling and Simulation - MATLAB</CourseItem>
                                </CourseList>
                            </EducationBlock>
                        </MainContent>
                    </MainContainer>
                </Container>
            </PageWrapper>

            <Footer />
        </>


    );

}