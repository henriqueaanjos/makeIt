import React, {FormEvent, useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAnimation, useCycle } from 'framer-motion';
import { useAuth } from '../../Hooks/useAuth';
import { useTheme } from 'styled-components';

import { 
  Container,
  Logo,
  Form,
  FormContent,
  FormTitle,
  FormInfo, 
  DivInput,
  FormText,
  FormLink,
  ButtonForm,
  Content,
  StripesTop,
  Info,
  Title,
  Description
} from './styles';

import Input from '../../Components/Input';
import Stripes from '../../Components/Stripes';
import Button from '../../Components/Button';
import logoImg  from '../../Assets/logo.svg';
import { errors } from '../../Utils/errors';

interface Error{
    id: number, 
    title: string, 
    description: string
}

const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };
const signInRightVariants = {
    exit: {
        x: 1000,
        transition: { ...transition }
      }
}
const signInFadeOutVariants = {
    exit: {
        opacity: 0,
        transition: { ...transition }
      }
}
let signInLogoVariants = {}

const variantsInput = {
    animationOne: {
        x: [-20, 20],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.05,
                type: "spring",
                stiffness: 1500,
                damping: 20
            },
        },
    },
    reset: {
        x: 0,
        y: 0,
    }
} 

const SignIn = () => {
    const history = useHistory();

    const controls_1 = useAnimation();
    const controls_2 = useAnimation();

    const { signIn } = useAuth();

    const theme = useTheme();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(0);

    function handleGoTo(path: string){

        if(path === '/'){
            signInLogoVariants = {
                exit: {
                    opacity: 0,
                    transition: { ...transition }
                  }
            }
        }else{
            signInLogoVariants = {}
        }
        history.push(path);
    }
    function getError(){
        const error = errors.find(item => item.id === status);
        if(error){
            return error;
        }else{
            return {} as Error;
        }
    }

    async function handleSubmit(e: FormEvent){
        e.preventDefault();
        const vai = await signIn(email, password);
        setStatus(vai);
        console.log(status);
        switch(vai){
            case 42:
                history.push('/');
                break; 
            case 100:
                setEmail('');
                controls_1.start("animationOne");
                setTimeout(() => {controls_1.stop(); controls_1.set("reset")}, 200);
                break;
            case 200:
                setPassword('');
                controls_2.start("animationOne");
                setTimeout(() => {controls_2.stop(); controls_2.set("reset")}, 200);
                break;
        }
    }
    
    return(
        <Container>
            <Form>
                <Logo src={logoImg} variants={signInLogoVariants} exit='exit'/>
                <FormContent variants={signInFadeOutVariants} exit="exit">
                    <FormTitle>Sign In</FormTitle>
                    <DivInput
                        variants={variantsInput}
                        animate={controls_1}
                    >
                        <Input placeholder='Email'  onSubmit={handleSubmit} setValue={setEmail} isInvalid={status === 100} popUpTitle={getError().title} popUpDescription={getError().description}/>
                    </DivInput>
                    
                    <DivInput
                        variants={variantsInput}
                        animate={controls_2}
                    >
                        <Input placeholder='Password' onSubmit={handleSubmit}  type='password' setValue={setPassword}isInvalid={status === 200} popUpTitle={getError().title} popUpDescription={getError().description}/>
                    </DivInput>
                    <FormInfo>
                        <FormText>Forgot your Password?</FormText>
                        <FormLink onClick={() => handleGoTo('/')}>Click Here</FormLink>
                    </FormInfo>
                    <ButtonForm>
                        <Button text='Sign In' onClick={handleSubmit} color={theme.colors.secundary} width='100%'/>
                        <FormInfo>
                            <FormText>It's New Here?</FormText>
                            <FormLink onClick={() => handleGoTo('/signUp')}>SIGN Up</FormLink>
                        </FormInfo>
                    </ButtonForm>
                </FormContent>
            </Form>
            <Content variants={signInRightVariants} exit="exit">
                <StripesTop >
                    <Stripes
                        size={550}
                        type='left'
                        color='one'
                        allVisible={true}
                    />
                    <Stripes
                        size={450}
                        type='left'
                        color='two'
                        allVisible={true}
                    />
                    <Stripes
                        size={350}
                        type='left'
                        color='three'
                        allVisible={true}
                    />
                </StripesTop>
                <Info >
                    <Title>Do your Tasks</Title>
                    <Description>
                        Keep your tasks up to date,<br/>
                        create routines<br/>
                        and never miss deadlines again<br/>
                    </Description>
                </Info>
            </Content>
        </Container>
    );
}
export default SignIn;