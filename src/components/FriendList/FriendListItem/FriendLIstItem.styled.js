import styled from "styled-components";
export const Container = styled.li`
    margin: 0 auto;
    padding: 10px;
    max-width: 400px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
    height: 70px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    border-radius: 10px;
    &:not(:last-child){
        margin-bottom: 20px;
    }
    
    p{
        font-family:'Courier New', Courier, monospace;
        font-weight: 600;
        font-size:18px;
    }
`;
export const Status = styled.span`
    display: block;
    padding: 10px;
    border-radius: 50%;
    background-color: ${({isOnline})=>isOnline? 'green': 'red'};

`