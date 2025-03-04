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

const StyledMain = styled.main`
    margin: auto;
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
    }
`;

const StyledMainTitle = styled.h3`
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    padding: 2vh 0;
    
    @media screen and (max-width: 900px) {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 5vh;
    }
`;

const StyledProfile = styled.img`
    max-width: 90%;
    height: auto;
    border-radius: 10px;

    @media screen and (max-width: 900px) {
        max-width: 50%;
        height: auto;
    }
`;

const StyledMainText = styled.div`
    width: 80%;
    max-width: 800px;
    padding-top: 1.5vh;
    text-align: justify;
    
    @media screen and (max-width: 900px) {
        align-self: center;
        width: 100%;
        margin: auto;
    }
`;

const StyledText = styled.p`
    margin: 1em 0;
    font-size: calc(1em + 0.2vw);
    text-align: justify;

    @media screen and (max-width: 900px) {
        margin: 2% 2%;
        font-size: calc(2px + 3vw);
    }
`;
export default function Home(){
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
                <Header subtitle="Online Resume"/>
                <Container>
                    <Nav />
                    <StyledMain>
                        <StyledMainTitle>Home</StyledMainTitle>
                        <MainContent>
                            <StyledProfile src="/profile.png" alt="Profile Picture" />
                            <StyledMainText>
                                <StyledText>
                                    My name is Jihye Lee, a highly motivated and technically skilled junior pursuing a degree in Computer Science at Boston University, set to graduate in May 2026. With a strong GPA of 3.90, I have built a solid foundation in core computer science principles through coursework in Algorithms, Data Structures, Machine Learning, and Distributed Systems.
                                </StyledText>
                            </StyledMainText>
                        </MainContent>
                    </StyledMain>
                </Container>
            </PageWrapper>
            <Footer />
        </>
        );
}

