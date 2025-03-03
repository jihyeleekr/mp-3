import {styled} from "styled-components";
import {useEffect} from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useParams} from "react-router";
import JSCalculator from "./JSCalculator.tsx";


const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    
    @media screen and (max-width: 900px){
        width: 100%;
        flex-direction: column;
        height: auto;
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
    
    @media screen and (max-width: 900px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        background-color: #f9f9f9;
        
        p{
            margin: 2% 2%;
            font-size: calc(2px + 3vw);
        }
    }
`;

const MainTitle = styled.h3`
    margin: 10px 0 5px 0;
    text-align: center;
    font-size: calc(2px + 2vw);
    color: #003366;
    
    @media screen and (max-width: 900px){
        font-size: calc(1.5em + 0.5vw);
        text-align: center;
        color: #003366;
    }
`;

const MainDiv   = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 1vw;
    padding-top: 0;
    align-items: flex-start;
    
    @media screen and (max-width: 900px){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
`;

const ProjectContainer = styled.div`
    a{
        margin: auto;
        text-decoration: none;
        color: black;
    }
`;

const Bitcoin = styled.div`
    margin: 0 0 2vh 0;
    padding: 0.3em 1em 1em 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    @media screen and (max-width: 900px){
        width: 100%;
        max-width: 90vw;
        margin: 1em auto;
        padding: 1em;
        text-align: left;
    }
`;

const Covid19 = styled.div`
    margin: 2vh 0;
    padding: 0.3em 1em 1em 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 900px){
        width: 100%;
        max-width: 90vw;
        margin: 1em auto;
        padding: 1em;
        text-align: left;
    }
`;


const StyledH3 = styled.h3`
    margin-top: 1em;
    font-size: calc(1.2em + 0.5vw);
    color: #4a4a4a;
`;

const StyledList = styled.ul`
    margin-top: 0.5em;
    padding-left: 1.5em;
    list-style: disc;
`;

const StyledListItem = styled.li`
    margin-bottom: 0.5em;
`;

export default function Project() {
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
              <Header subtitle="Explore My Creative Projects!"/>
              <Container>
                  <Nav />
                  <Main>
                      <MainTitle>Projects</MainTitle>
                      <MainDiv>
                          <ProjectContainer>
                              <Bitcoin>
                                  <StyledH3><a href="https://github.com/jihyeleekr/aibitcoin" >AI Bitcoin Trader</a></StyledH3>
                                  <StyledList>
                                      <StyledListItem>Built a Bitcoin trading bot in <strong>Python</strong> with Alpaca’s API for real-time data analysis and execution</StyledListItem>
                                      <StyledListItem>Utilized the <strong>ChatGPT-4 API</strong> for sentiment analysis of social media and news, enabling informed
                                      buy/sell decisions based on the Fear and Greed Index</StyledListItem>
                                      <StyledListItem>Visualized data with <strong>Streamlit</strong> and Plotly to track trading performance and market trends</StyledListItem>
                                      <StyledListItem>Logged trades and metrics in <strong>SQLite</strong> for strategy optimization and evaluation</StyledListItem>
                                  </StyledList>
                              </Bitcoin>
                              <Covid19>
                                  <StyledH3><a href="https://github.com/jihyeleekr/COVID-19-2D-Grid-Spread-Simulation-An-Agent-Based-Model">COVID-19 2D Grid Spread Simulation: An Agent-Based Model </a></StyledH3>
                                  <StyledList>
                                      <StyledListItem>Engineered a 2D grid-based agent model in <strong>MATLAB</strong> to simulate the spread of COVID-19,
                                          focusing on the effects of varying movement speeds on transmission dynamics</StyledListItem>
                                      <StyledListItem>Strategically designed agents to move <em>randomly</em> with subtle directional changes</StyledListItem>
                                      <StyledListItem><em><strong>Conducted 1,000 simulations</strong></em> with different movement speeds, analyzing the impact on virus
                                      spread by collecting data on the statuses of susceptible, infected, quarantined, and immune agents</StyledListItem>
                                  </StyledList>
                              </Covid19>
                              <JSCalculator />
                          </ProjectContainer>
                      </MainDiv>
                  </Main>
              </Container>
          </PageWrapper>
          <Footer />
      </>
    );
}
