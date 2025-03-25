import React from 'react';

import Circles from '../../Components/Circles';
import Button from '../../Components/Button';
import Stripes from '../../Components/Stripes';

import logoImg  from '../../Assets/logo.svg';

import { 
    Container,
    Content,
    Logo,
    Linkin,
    Buttons,
    StripesTop,
    StripesDown
} from './styles';
import theme from '../../Global/styles/theme';
import { useNavigate } from 'react-router-dom';

const transition = { duration: 3, ease: [0.43, 0.13, 0.23, 0.96] };
const indexLeftVariants = {
    exit: {
        x: -1000,
        transition: { ...transition }
      }
}
const indexRightVariants = {
    exit: {
        x: 1000,
        transition: { ...transition }
      }
}
const indexTextVariants = {
    exit:{
        opacity: 0,
        transition: { ...transition }
    }
}
const indexLogoVariants = {
    exit:{
        x: -350,
        y: -260,
        transition: { ...transition }
    }
}

const Index = () => {
    const navigate = useNavigate();
    function handleGoTo(path: string){
        navigate(path);
    }
    return(
        <Container>
            <Circles type='up'/>
                <StripesTop variants={indexLeftVariants} exit="exit">
                    <Stripes
                        size={80}
                        type='left'
                        color='one'
                        text='Take Notes'
                        allVisible={false}
                    />
                    <Stripes
                        size={70}
                        type='left'
                        color='two'
                        text='Remeber'
                        allVisible={false}
                    />
                    <Stripes
                        size={60}
                        type='left'
                        color='three'
                        text='Make It'
                        allVisible={false}
                    />
                </StripesTop>
                <Content>
                    <Logo src={logoImg} variants={indexLogoVariants} exit='exit'/>
                    <Buttons variants={indexTextVariants} exit='exit'>
                        <Button text='Sign Up' onClick={() => handleGoTo('/signUp')} color={theme.colors.tercenary} width='200px'/>
                        <Linkin onClick={() => handleGoTo('/signIn')}>Or Sign In</Linkin>
                    </Buttons>
                </Content>
                <StripesDown variants={indexRightVariants} exit="exit">
                    <Stripes
                        size={60}
                        type='right'
                        color='three'
                        text='Register'
                        allVisible={false}
                    />
                    <Stripes
                        size={70}
                        type='right'
                        color='two'
                        text='Do All Your Tasks'
                        allVisible={false}
                    />      
                    <Stripes
                        size={80}
                        type='right'
                        color='one'
                        text='Never Miss Deadlines'
                        allVisible={false}
                    />
                </StripesDown>
            <Circles type='down'/>
        </Container>
    );
}
export default Index;