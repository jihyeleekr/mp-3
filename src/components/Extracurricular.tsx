import {styled} from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Nav from "./Nav.tsx";
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
    flex-direction: column;
    align-items: center;
    width: 70%;
    color: #1c1c1c;
    
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 80vh;
        background-color: #f9f9f9;
        
        p{
            margin: 2% 2%;
            font-size: calc(2px + 2vh);
        }
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
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    padding: 2vh 0;
    
    @media screen and (max-width: 900px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const VideoContainer = styled.div`
    position: relative;
    width: 80%;
    max-width: 800px;
    padding-bottom: 56%;
    height: 0;
    
    iframe{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 10px;
    }
    
    @media screen and (max-width: 900px) {
        width: 90%;
        max-width: 600px;
        padding-bottom: 56%;
        height: 0;
        
        iframe{
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
        }
        
    }
`;

const Content = styled.div`
    width: 80%;
    max-width: 800px;
    padding-top: 1.5vh;
    
    @media screen and (max-width: 900px) {
        width: 90%;
        max-width: 600px;
        padding-top: 1.5vh;
    }
`;

const StyledP = styled.p`
    margin: 1em 0;
    font-size: calc(1em + 0.2vw);
    text-align: justify;
`;

export default function Extracurricular() {
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
    return (
        <>
            <PageWrapper>
                <Header subtitle="Explore My Extracurricular Experience!" />
                <Container>
                    <Nav />
                    <Main>
                        <MainTitle>Extracurricular</MainTitle>
                        <MainDiv>
                            <VideoContainer>
                                <iframe src="https://www.youtube.com/embed/aDW-8RtUYy4"
                                        title="2018 Women's Baseball World Cup - South Korea vs. Puerto Rico"
                                        allowFullScreen
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        > </iframe>
                            </VideoContainer>
                            <Content>
                                <StyledP>
                                    In this video from the 2018 Women’s Baseball World Cup held in Florida, I had the honor of representing South Korea as the youngest pitcher on the national women’s baseball team. This game was against Puerto Rico, and it was an incredible experience competing at an international level. Being part of this tournament not only tested my skills but also strengthened my passion for the sport. It was a moment of growth, resilience, and teamwork, and I am proud to have played alongside such talented athletes on the world stage.
                                </StyledP>
                            </Content>
                        </MainDiv>
                    </Main>
                </Container>
                <Footer />
            </PageWrapper>
        </>
    );
}