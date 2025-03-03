import {styled} from "styled-components";

interface HeaderProps {
    subtitle: string;
}

const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #bcccdc;
    justify-content: center;
    align-items: center;
    padding: 1em 0;

    @media screen and (max-width: 900px) {
        align-items: center;
    }
`;

const Title = styled.h1`
    color: #1c1e26;
`;

const SubTitle = styled.p`
    font-size: 1.2em;
    color: #2D3250;
`;

export default function Header({ subtitle }: HeaderProps) {
    return (
        <StyledHeader>
            <Title>Jihye Lee</Title>
            <SubTitle>{subtitle}</SubTitle>
        </StyledHeader>
    );
}
