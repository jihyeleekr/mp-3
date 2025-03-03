import {styled} from 'styled-components';

const StyledFooter = styled.footer`
    text-align: center;
    background-color: #bcccdc;
    padding: 1em 0;
    font-size: calc(1em + 0.2vw);
    color: black;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 900px) {
        width: 100%;
        text-align: center;
        background-color: #bcccdc;
        padding: 1em 0;
        font-size: calc(1em + 0.5vw);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 6vh;
    }
`;

export default function Footer() {
    return(
        <StyledFooter>
            All Rights Reserved by Jihye Lee Credits &copy;
        </StyledFooter>
    );
}