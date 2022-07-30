import styled from "styled-components";

export const Container = styled.div`
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HeaderContainer = styled.div`

`

export const Title = styled.h1`
    color: #310094;
    margin: 0 0 0 15px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export const Text = styled.p`
    color: #310094;
    margin: 0 0 0 20px;
    
    font-size: 20px;
    font-weight: 600;
`

export const CardContainer = styled.div`
    margin: 20px;
    padding: 20px;
    width: 90vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
`