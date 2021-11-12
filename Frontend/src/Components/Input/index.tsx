import { AnimatePresence } from 'framer-motion';
import React, { InputHTMLAttributes, useState } from 'react';
import { 
    Container,
    Inputt,
    Button,
    Icon,
    IconPressed,
    PopUp,
    PopUpTriangle,
    PopUpTitle,
    PopUpDescription,
 } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder?: string,
    width?: string;
    type?: string,
    isInvalid?: boolean,
    popUpTitle?: string,
    popUpDescription?: string,
    setValue: (value: string) => void
}
const popUpVariants = {
    start: {
        opacity: 0,
        transition: {
            delay: 0.3,
            duration: 0.2,
        },
    },
    show:{
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.2,
        },
    }
}
const Input = ({placeholder, width, type, isInvalid, popUpTitle, popUpDescription, setValue, ...rest}: InputProps) => {
    const [typeState, setTypeState] = useState(type);
    const [isDigit, setIsDigit] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [popUpIsVisible, setPopUpIsVisible] = useState(isInvalid);
    const [inputValue, setInputValue] = useState('');


    function handleChangeType(){
        if(typeState === 'password'){
            setTypeState('text');
            setIsPressed(true);
        }else{
            setTypeState('password');
            setIsPressed(false);
        }
    }
    function handleChange(value: string){
        setInputValue(value);
        setValue(value);
    }
    
    return(
        <Container type={type} width={width} >
            <Inputt  {...rest}  placeholder={placeholder} isInvalid={isInvalid} type={typeState ? typeState : 'text'} onFocus={() => setIsDigit(true)}  onBlur={() => setIsDigit(false)} value={inputValue} onChange={e => handleChange(e.target.value)}/>
            {type === 'password' ?(
                <Button onClick={handleChangeType} isDigit={isDigit} isInvalid={isInvalid}>
                    {isPressed ? <Icon/> : <IconPressed/>}
                </Button>
            ): null}
            {
            isInvalid && inputValue === ''? (
                <AnimatePresence>
                    <PopUp variants={popUpVariants} animate="show" initial="start" exit="start"  type={type}>
                        <PopUpTriangle/>
                        <PopUpTitle>{popUpTitle}</PopUpTitle>
                        <PopUpDescription>{popUpDescription}</PopUpDescription>
                    </PopUp>
                </AnimatePresence>
            ): null}
        </Container>
    );
}
export default Input;