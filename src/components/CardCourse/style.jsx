import styled from "styled-components";

export const CardArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 300px;
    height: 140px;
    background-color: #3c62f8;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000000;
    align-items: center;
    margin: 10px 0;
    padding: 5px 10px;
  
`

export const Photo = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 15px 15px 0 15px;
    border: 1px solid white;
    padding: 3px;
`

export const NameTitle = styled.p`
    color: white;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 5px;
`

export const ButtonsArea = styled.div`
    display: flex;
    flex-direction: row;
`

export const Buttons = styled.button`
    background-color: #01c1c6;
    color: #231f3a;
    border: none;
    border-radius: 5px;
    width: 80px;
    height: 30px;
    margin: 2px;
    cursor: pointer;
    outline: none;
    font-size: 14px;
    font-weight: 700;
    opacity: 1;
    transition: 0.15s opacity ease;
  
    &:hover {
        opacity: 0.75;
    }

`