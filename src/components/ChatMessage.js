import React from 'react';
import styled from 'styled-components';

export const ChatMessage = () => {
    return (
        <Container>
            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/women/11.jpg" alt="" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    Kirill Moshonskiy
                    <span>2/23/2021 11:13:55 AM</span>
                </Name>
                <Text>This is a challenge</Text>
            </MessageContent>
        </Container>
    )
}

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
`;

const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 8px;

    img {
        width: 100%;
    }
`;

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;

    span {
        margin-left: 8px;
        font-weight: 400;
        font-size: 13px;
        color: rgb(97,96,97);
    }
`;

const Text = styled.span``;