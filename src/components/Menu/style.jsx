import styled from 'styled-components'

export const MenuBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: #e9f1f1;
    box-shadow: 2px 2px 2px #00000039;
`

export const LogoImage = styled.img`
    height: 60px;
    width: 150px;
`

export const MenuItems = styled.div`
    display: flex;
    
`

export const Items = styled.button`
    align-items: center;
    background: transparent;
    border: none;
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    display: flex;
    font-size: 20px;
    font-weight: 700;
    border-radius: 5px;
    margin: 0 5px 5px 20px;
    padding: 2px;
    transition: .15s transform ease;
    transform: scale(1);
    &:hover {
        background-color: #cacaca;
        color: #310094;
        transform: scale(1.1);
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    color: #fff;
    margin-right: 5px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 5px;
    
    transition: .15s transform ease;
    transform: scale(1);
    &:hover {
        background-color: #cacaca;
        transform: scale(1.1);
    }

    & a{
        display: flex;
        align-items: center;
    }
`

export const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 50px;
`
export const LoggedUserContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-right: 10px;
`

export const LoggedUser = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #310094;
    margin: 0 50px 0 0;
`

export const LogoutButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 13px;
    cursor: pointer;
`