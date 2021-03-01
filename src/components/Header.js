import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export const Header = ({ user, signOut }) => {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="search..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"} alt="user" />
                </UserImage>
            </UserContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #350d36;
    color: #ffffff;
    z-index: 10;
    box-shadow: 0 1px 0 0 rgb(255, 255, 255 / 10%);
`;

const Main = styled.div`
    display: flex;
    align-items: center;
    margin-left: 16px;
    margin-right: 16px;
    position: relative;
`;

const SearchContainer = styled.div`
    display: flex;
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
`;

const Search = styled.div`
    width: 100%;
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    border-radius: 6px;
    input {
        background-color: transparent;
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
        width: 100%;
        color: #ffffff;
    }

    input:focus {
        outline: none;
    }
`;

const UserContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`;

const Name = styled.div`
    padding-right: 16px;
`;

const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 1px solid #ffffff;
    border-radius: 3px;
    cursor: pointer;
    
    img {
        width: 100%;
    }
`;