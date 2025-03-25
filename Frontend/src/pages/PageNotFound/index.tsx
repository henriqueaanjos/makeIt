import React from 'react';
import { useTheme } from 'styled-components';

import {
    Container,
    Content,
    Digits,
    FirstDigit,
    SecondDigit,
    ThirdDigit,
    Description,
    Footer
} from './styles';

import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    function handleGoBack(){
        navigate('/');
    }

    return(
        <Container>
            <Content>
                <Digits>
                    <FirstDigit>4</FirstDigit>
                    <SecondDigit>0</SecondDigit>
                    <ThirdDigit>4</ThirdDigit>
                
                    <Description>...OPS, An Error Ocurred, Page Not Found!</Description>
                </Digits>
                <Footer>
                    <Button onClick={handleGoBack} text='Voltar' color={theme.colors.tercenary} width="200px"/>
                </Footer>
            </Content>
        </Container>
    );
}
export default PageNotFound;