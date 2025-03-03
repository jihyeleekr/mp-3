import {useState} from "react";
import {styled} from "styled-components";

const JSCalculatorDiv = styled.div`
    margin: 2vh auto auto;
    width: 100%;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-image: url("/public/Calculator_bg.png");
    
    @media screen and (max-width: 900px) {
        width: 100%;
        max-width: 90vw;
        margin: auto;
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    font-size: calc(1em + 0.5vw);
    text-align: left;
    border: 2px solid #ccc;
    border-radius: 8px;
    
    @media screen and (max-width: 900px) {
        width: 100%;
        text-align: left;
    }
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 0.5em;
    
    @media screen and (max-width: 900px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5em;
    }
`;

const Results = styled.div<{color : string}>`
    p{
        display: flex;
        margin: auto;
        font-size: calc(1.5rem + 1.5vw);
        color: ${(props) => props.color};
    }
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: flex-start;
    
    @media screen and (max-width: 900px) {
        width: 90%;
        align-items: flex-start;
    }
`;

const Label = styled.label`
    font-size: calc(0.8em + 0.5vw);
    font-weight: bold;
    margin-bottom: 5px;
    text-align: center;
    width: 100%;
    
    @media screen and (max-width: 900px) {
        font-size: calc(0.8em + 1vw);
        text-align: center;
        width: 100%;
    }
`;

const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;

const Button = styled.button`
    padding: 15px 20px;
    font-size: calc(1em + 0.5vw);
    border: none;
    background-color: #049cfd;
    color: black;
    border-radius: 15px;

    &:hover {
        background-color: #133E87;
    }
`;

const StyledH3 = styled.h3`
    margin-top: 1em;
    font-size: calc(1.2em + 0.5vw);
    color: #4a4a4a;
`;

export default function JSCalculator(){
    const [firstNumber, setFirstNumber] = useState<number | "">("");
    const [secondNumber, setSecondNumber] = useState<number | "">("");
    const [result, setResult] = useState<number | null>(null);
    const [color, setColor] = useState("black");

    const calculate = (operation: string) => {
        if (firstNumber === "" || secondNumber === "") return;
        const first = Number(firstNumber);
        const second = Number(secondNumber);
        let output: number = 0;

        switch (operation) {
            case "add":
                output = first + second;
                break;
            case "subtract":
                output = first - second;
                break;
            case "multiply":
                output = first * second;
                break;
            case "divide":
                output = second !== 0 ? first / second : NaN;
                break;
            case "exponent":
                output = 1;
                if (second === 0) {
                    output = 1;
                } else if (second > 0) {
                    for (let i = 0; i < second; i++) {
                        output *= first;
                    }
                } else {
                    for (let i = 0; i < Math.abs(second); i++) {
                        output *= first;
                    }
                    output = 1 / output;
                }
                break;
            default:
                return;
        }

        setResult(output);
        setColor(output < 0 ? "red" : "black");
    };

    const clearFields = () => {
        setFirstNumber("");
        setSecondNumber("");
        setResult(null);
    };

    return(
        <JSCalculatorDiv>
            <StyledH3>Try My JS Calculator!</StyledH3>
            <Inputs>
                <InputGroup>
                    <Label htmlFor="first-number">First Number</Label>
                    <StyledInput
                        type="number"
                        id="first-number"
                        placeholder="First Number"
                        value={firstNumber}
                        onChange={(e) => setFirstNumber(e.target.value === "" ? "" : Number(e.target.value))}
                    />
                </InputGroup>
                <InputGroup>
                    <Label htmlFor="second-number">Second Number</Label>
                    <StyledInput
                        type="number"
                        id="second-number"
                        placeholder="Second Number"
                        value={secondNumber}
                        onChange={(e) => setSecondNumber(e.target.value === "" ? "" : Number(e.target.value))}
                    />
                </InputGroup>
            </Inputs>
            <Results color={color}>
                {result !== null ? <p>{result}</p> : <p> </p>}
            </Results>
            <Buttons>
                <Button onClick={() => calculate("add")}> + </Button>
                <Button onClick={() => calculate("subtract")}> - </Button>
                <Button onClick={() => calculate("multiply")}> * </Button>
                <Button onClick={() => calculate("divide")}> / </Button>
                <Button onClick={() => calculate("exponent")}> ^ </Button>
                <Button onClick={clearFields}> Clear </Button>
            </Buttons>
        </JSCalculatorDiv>
    );
}