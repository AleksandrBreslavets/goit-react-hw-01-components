import styled from "styled-components";
import { getRandomHexColor } from "helpers/getRandomColor";
export const Section = styled.section`
    background-color: white;
    margin: 0 auto;
    max-width: 500px;
    margin-bottom: 40px;
    height: auto;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    border-radius: 10px;
`;
export const Header = styled.h2`
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
`;
export const Stats = styled.ul`
    display: flex;
`;
export const Item = styled.li`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: ${getRandomHexColor};
    span{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: white;
    }
`;
export const Value = styled.span`
    font-size: 24px;
`
