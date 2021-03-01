import React, { useState } from 'react'
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
 
export const ChatInput = ({ sendMessage }) => {

    const [text, setText] = useState('');

    const send = (e) => {
        e.preventDefault();
        if (!text) {
            return;
        }
        sendMessage(text);
        setText('');
    }

    return (
        <Container>
            <InputContainer>
                <form onSubmit={send}>
                    <input 
                        type="text" 
                        placeholder="message here..."
                        value={text}
                        onChange={(e) => setText(e.target.value)} />
                    <SendButton 
                        type="submit">
                        <Send />
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`;

const InputContainer = styled.div`
    border: 1px solid #8d8d8e;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;

        input {
            flex: 1;
            border: none;
            font-size: 13px;
        }

        input:focus {
            outline: none;
        }
    }
`;

const SendButton = styled.div`
    margin-right: 5px;
    background-color: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover {
        background-color: #148567;
    }
`;

const Send = styled(SendIcon)`
    color: #d9d9d9;
`;
