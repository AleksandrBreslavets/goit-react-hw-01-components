import styled from "styled-components";
export const Table = styled.table`
    margin: 40px auto;
    table-layout: fixed;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;

    th{
        width: 250px;
        background-color: #5c4763;
        color: white;
        padding: 15px;
    }
    td{
        width: 250px;
        text-align: center;
        padding: 12px;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 600;

    }
    tr{
        background-color: white;
    }
    tr:nth-child(odd) {
        background-color: #e5bdf2;
    }
`