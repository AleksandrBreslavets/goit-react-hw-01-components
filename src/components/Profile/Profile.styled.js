import styled from "styled-components";

export const Container = styled.div`
background-color: white;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 70px;
    max-width: 300px;
    height: auto;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    border-radius: 10px;
    `;
export const Avatar = styled.img`
    margin-top: 40px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
`;
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;
export const Header = styled.p`
    font-weight: 500;
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
`;
export const Tag = styled.p`
    color: #5e5c5c;
    font-size: 15px;
    font-style: italic;
    margin-top: 12px;
`;
export const Location = styled.p`
    font-weight: 500;
    color: #5e5c5c;
    font-size: 16px;
    margin-top: 12px;
`;
export const Stats = styled.ul`
    margin-top: 40px;
    display: flex;
    background-color: #abf1f5;
    border-top: 3px dotted #465a70;
    
`;
export const Item = styled.li`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    &:not(:last-child){
        border-right: 1px solid #88a6c2;
    }
    span{
        display: block;
        margin-bottom: 7px;
        color: #5e5c5c;
        font-weight: 500;
        font-size: 14px;
    }
`;
export const Value = styled.span`
&&{
    color: #0b2745;
    font-weight: 700;
    font-size: 16px;
}
`;