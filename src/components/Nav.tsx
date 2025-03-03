import {styled} from 'styled-components'
import { Link } from "react-router";

const StyledNav = styled.nav`
    width: 25%;
    background-color: #d9eafd;
    
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #d9eafd;
    font-size: calc(1px + 21.5vw);
    text-align: center;
    list-style: none;
    padding-left: 0;
    margin: 0;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #d9eafd;
        list-style: none;
        padding-left: 0;
    }
`;

const StyledNavItem = styled.li`
    font-size: calc(2px + 2vw);
    width: 90%;
    background-color: #6699cc;
    padding: 2vh 0;
    margin: 5vh auto;
    border-radius: 10px;

    &:hover {
        background-color: #4a89d1;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
    
    @media screen and (max-width: 900px) {
        font-size: calc(2px + 1.5vw);
        background-color: #6699cc;
        padding: 1% 0.5%;
        margin: 1% 0.5%;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: bold;
    display: block;
    width: 100%;
    height: 100%;
`;

export default function Nav(){
    return(
        <StyledNav>
            <StyledList>
                <StyledNavItem>
                    <StyledLink to={"/"}>Home</StyledLink>
                </StyledNavItem>
                <StyledNavItem>
                    <StyledLink to={"/education"}>Education</StyledLink>
                </StyledNavItem>
                <StyledNavItem>
                    <StyledLink to={"/projects"}>Projects</StyledLink>
                </StyledNavItem>
                <StyledNavItem>
                    <StyledLink to={"/experience"}>Experience</StyledLink>
                </StyledNavItem>
                <StyledNavItem>
                    <StyledLink to={"/skills"}>Technical Skills</StyledLink>
                </StyledNavItem>
                <StyledNavItem><
                    StyledLink to={"/extracurricular"}>Extracurriculars</StyledLink>
                </StyledNavItem>
            </StyledList>
        </StyledNav>
    );
}
