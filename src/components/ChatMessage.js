import React from 'react';
import styled from 'styled-components';

export const ChatMessage = ({ text, timestamp, user, image }) => {
    return (
        <Container>
            <UserAvatar>
                <img src={image} alt="user" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    {user}
                    <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>{text}</Text>
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