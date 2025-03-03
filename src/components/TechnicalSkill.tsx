import {styled} from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer.tsx";
import {useParams} from "react-router";
import {useEffect} from "react";

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
        height: 100vh;
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
    }
    
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 80vh;
        background-color: #f9f9f9;
        
        p{
            margin: 2% 2%;
            font-size: calc(2px + 3vw);
        }
    }
`;

const MainDiv = styled.div`
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
        justify-content: center;
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

const TechSkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2vw;
    width: 100%;
    align-items: stretch;
`;

const Skills = styled.div`
    flex: 1;
    min-width: 45%;
    background-color: #ffffff;
    padding: 1.5em;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const StyledList = styled.ul`
    margin-top: 0.5em;
    padding-left: 1.5em;
    list-style: disc;
`;

const StyledH3 = styled.h3`
    margin-top: 1em;
    font-size: calc(1.2em + 0.5vw);
    color: #4a4a4a;
`;

const StyledItems = styled.li`
    margin-bottom: 0.5em;
`;

export default function TechnicalSkill() {
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
            <Header subtitle="Explore my Technical Skills!" />
            <Container>
                <Nav />

                    <Main>
                        <MainTitle>Technical Skills</MainTitle>
                        <MainDiv>
                            <TechSkillContainer>
                                <Skills>
                                    <StyledH3>Programming Language</StyledH3>
                                    <StyledList>
                                        <StyledItems>Python, Java</StyledItems>
                                        <StyledItems>C/C++, Go, OCaml</StyledItems>
                                        <StyledItems>MATLAB, R, SQL</StyledItems>
                                        <StyledItems>React, HTML, CSS, JavaScript</StyledItems>
                                    </StyledList>
                                </Skills>
                                <Skills>
                                    <StyledH3>Technologies</StyledH3>
                                    <StyledList>
                                        <StyledItems>SciPy, Numpy, Pandas, Matplotlib</StyledItems>
                                        <StyledItems>MySQL, R Studio</StyledItems>
                                        <StyledItems>Jupyter Notebook, Git, VSCode, API, WebStorm</StyledItems>
                                    </StyledList>
                                </Skills>
                            </TechSkillContainer>
                        </MainDiv>
                    </Main>

            </Container>
                <Footer />
            </PageWrapper>

        </>
    );
}
