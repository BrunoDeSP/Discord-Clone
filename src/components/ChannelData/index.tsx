import React from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';


const ChannelData: React.FC = () => {
    return (
        <Container>
            <Messages >
                <ChannelMessage
                    author="Bruno Barbosa"
                    date="22/05/2022"
                    content="Talitinha toma banho todo dia"
                />


                <ChannelMessage
                    author="Fulano Da Silva"
                    date="22/05/2022"
                    content="nao sei oq, nao sei oq, etc..."
                />

                <ChannelMessage
                    author="Fulano Da Silva"
                    date="22/05/2022"
                    content="nao sei oq, nao sei oq, etc..."
                />

                <ChannelMessage
                    author="Fulano Da Silva"
                    date="22/05/2022"
                    content="nao sei oq, nao sei oq, etc..."
                />

                <ChannelMessage
                    author="Fulano Da Silva"
                    date="22/05/2022"
                    content="nao sei oq, nao sei oq, etc..."
                />

                <ChannelMessage
                    author="Fulano Da Silva"
                    date="22/05/2022"
                    content="nao sei oq, nao sei oq, etc..."
                />

                <ChannelMessage
                    author="Fulano Da Silva"
                    date="22/05/2022"
                    content="nao sei oq, nao sei oq, etc..."
                />

                <ChannelMessage
                    author="Fulano Da Silva"
                    date="22/05/2022"
                    content="nao sei oq, nao sei oq, etc..."
                />

                <ChannelMessage
                    author="Fulano Da Silva"
                    date="22/05/2022"
                    content="nao sei oq, nao sei oq, etc..."
                />

                <ChannelMessage
                    author="Fulano Da Silva"
                    date="22/05/2022"
                    content="nao sei oq, nao sei oq, etc..."
                />

                <ChannelMessage
                    author="Fulano Da Silva"
                    date="22/05/2022"
                    content="nao sei oq, nao sei oq, etc..."
                />

                <ChannelMessage
                    author="Fulano Da Silva"
                    date="22/05/2022"
                    content="nao sei oq, nao sei oq, etc..."
                />

                <ChannelMessage
                    author="Fulano Da Silva"
                    date="22/05/2022"
                    content="nao sei oq, nao sei oq, etc..."
                />

                <ChannelMessage
                    author="Fulano Da Silva"
                    date="22/05/2022"
                    content="nao sei oq, nao sei oq, etc..."
                />

                <ChannelMessage
                    author="Talitinha Gamer"
                    date="22/05/2022"
                    content={
                        <>
                            <Mention>@Bruno Barbosa</Mention> n??o sou voc?? que toma banho so de sabado.
                        </>
                    }
                    hasMention
                    isBot

                />


            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>

    );
};

export default ChannelData;