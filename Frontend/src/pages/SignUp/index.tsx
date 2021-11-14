import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../Hooks/useAuth';
import { useAnimation } from 'framer-motion';
import { useTheme } from 'styled-components';

import { 
  Container,
  Logo,
  Form,
  FormContent,
  FormTitle,
  InputGroup,
  DivInput,
  FormInfo, 
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
import { errors }  from '../../Utils/errors';

interface Error{
    id: number, 
    title: string, 
    description: string
}

const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };
const signUpRightVariants = {
    exit: {
        x: 1000,
        transition: { ...transition }
      }
}
const signUpFadeOutVariants = {
    exit: {
        opacity: 0,
        transition: { ...transition }
      }
}
let signUpLogoVariants = {};

const variantsInput = {
    animationOne: {
        x: [-20, 20],
        transition: {
            x: {
                repeat: Infinity,
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

const SignUp = () => {
    const history = useHistory();
    const { signUp } = useAuth();
    const controls_1 = useAnimation();
    const controls_2 = useAnimation();
    const controls_3 = useAnimation();
    const controls_4 = useAnimation();
    const theme = useTheme();

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(10);

    function handleGoTo(path: string){
        if(path === '/'){
            signUpLogoVariants = {
                exit: {
                    opacity: 0,
                    transition: { ...transition }
                  }
            }
        }else{
            signUpLogoVariants = {}
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
        console.log({
            fname,
            lname,
            email,
            password
        })
        const vai = await signUp(fname, lname, email, password);
        setStatus(vai);
        console.log(status);
        switch(vai){
            case 42:
                history.push('/');
                break; 
            case 11:
                console.log('Aqui entrou!');
                controls_1.start("animationOne");
                setTimeout(() => {controls_1.stop(); controls_1.set("reset")}, 200);
                break;
            case 22:
                controls_2.start("animationOne");
                setTimeout(() => {controls_2.stop(); controls_2.set("reset")}, 200);
                break;
            case 42:
                history.push('/');
                break;
            case 101:
                controls_3.start("animationOne");
                setTimeout(() => {controls_3.stop(); controls_3.set("reset")}, 200);
                break;
            case 202:
                controls_4.start("animationOne");
                setTimeout(() => {controls_4.stop(); controls_4.set("reset")}, 200);
                break;
            default:
                controls_1.start("animationOne");
                setTimeout(() => {controls_1.stop(); controls_1.set("reset")}, 200);
                break;
        }
    }
    return(
        <Container>
            <Form>
                <Logo src={logoImg} variants={signUpLogoVariants} exit='exit' />
                <FormContent variants={signUpFadeOutVariants} exit="exit">
                    <FormTitle>Sign Up</FormTitle>
                    <InputGroup>
                        <DivInput
                            variants={variantsInput}
                            animate={controls_1}
                        >
                            <Input placeholder='First Name' width='96%' value={fname}  onSubmit={handleSubmit} setValue={setFName} isInvalid={status === 11} popUpTitle={getError().title} popUpDescription={getError().description}/>
                        </DivInput>
                        <DivInput
                            variants={variantsInput}
                            animate={controls_2}
                        >
                            <Input placeholder='Last Name' width='100%'  value={lname} onSubmit={handleSubmit} setValue={setLName} isInvalid={status === 22} popUpTitle={getError().title} popUpDescription={getError().description}/>
                        </DivInput>
                    </InputGroup>
                    <DivInput
                        variants={variantsInput}
                        animate={controls_3}
                    >
                        <Input placeholder='E-mail' onSubmit={handleSubmit} value={email} setValue={setEmail} isInvalid={status === 101} popUpTitle={getError().title} popUpDescription={getError().description}/>
                    </DivInput>
                    <DivInput
                        variants={variantsInput}
                        animate={controls_4}
                    >
                        <Input placeholder='Password' type='password'value={password} onSubmit={handleSubmit} setValue={setPassword} isInvalid={status === 202} popUpTitle={getError().title} popUpDescription={getError().description}/>
                    </DivInput>
                    <ButtonForm>
                        <Button text='Sign Up' onClick={handleSubmit} color={theme.colors.tercenary} width='100%'/>
                        <FormInfo>
                            <FormText>Already Member?</FormText>
                            <FormLink onClick={() => handleGoTo('/signIn')}> Sign In</FormLink>
                        </FormInfo>
                    </ButtonForm>
                </FormContent>
            </Form>
            <Content variants={signUpRightVariants} exit="exit">
                <StripesTop >
                    <Stripes
                        size={550}
                        type='right'
                        color='one'
                        allVisible={true}
                    />
                    <Stripes
                        size={450}
                        type='right'
                        color='two'
                        allVisible={true}
                    />
                    <Stripes
                        size={350}
                        type='right'
                        color='three'
                        allVisible={true}
                    />
                </StripesTop>
                <Info>
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
export default SignUp;