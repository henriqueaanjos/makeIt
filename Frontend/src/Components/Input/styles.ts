import styled, { keyframes } from 'styled-components';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { bounceIn, fadeIn} from 'react-animations';

const bounceInAnimation = keyframes`${bounceIn}`;

interface InputProps{
    isInvalid?: boolean,
    width?: string,
    type?: string
}

interface ButtonProps{
    isInvalid?: boolean, 
    isDigit?: boolean,
    isPressed?: boolean
}
interface popUpProps{
    isInvalid: boolean
}

export const Container = styled.div<InputProps>`
    --size: ${({width}) => width ? width : '100%'};
    width: var(--size);
    display: flex;
    flex-direction: ${({type}) => type ==='password' ? 'column' : 'row'};
    align-items: flex-end;
    justify-content: ${({type}) => type ==='password' ? 'flex-end' : 'space-between'};
    margin-top: 15px;
`;
export const DivInput = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
`;
export const Inputt = styled.input<InputProps>`
    width: 100%;
    padding: 11px 21px;
    border: 3px solid  ${({ isInvalid, theme }) => isInvalid ? theme.colors.secundary : theme.colors.title};
    border-radius: 10px;
    font-size: 25px;
`;

export const Button = styled.button<ButtonProps>`
    background-color: transparent;
    border: none;
    position: relative;
    bottom: ${({isInvalid}) => isInvalid ? 65 : 70}%;
    margin-bottom: ${({isInvalid}) => isInvalid ? -15 : -28}px;
    left: ${({isDigit}) => isDigit ? -10 : -4}%;
    transition: 1s left;
`;

export const Icon = styled(FiEye)<ButtonProps>`
    font-size: 25px;
    color:  ${({ theme }) => theme.colors.primary};
    transition: 1s color;
`;

export const IconPressed = styled(FiEyeOff)`
    font-size: 25px;
    color:  ${({ theme }) => theme.colors.text_disable};
    transition: 1s color;
`;


export const PopUp = styled(motion.div)<InputProps>`
    width: 400px;
    padding: 11px 21px;
    position: relative;
    margin-right: -430px;
    margin-top: ${({type}) => type ==='password' ? -80 : 0}px;
    margin-bottom: ${({type}) => type ==='password' ? 0 : -15}px;
    background-color:  ${({ theme }) => theme.colors.text};
    border: 3px solid  ${({ theme }) => theme.colors.secundary};
    box-shadow: 5px 2px 10px  ${({ theme }) => theme.colors.shadow_secundary};
    border-radius: 10px;
    display: flex;
    z-index: 999999;
    flex-direction: column;
`;
export const PopUpTitle = styled.h3`

`;
export const PopUpDescription = styled.p`

`;
export const PopUpTriangle = styled.tr`
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-right: 16px solid  ${({ theme }) => theme.colors.secundary};
    border-bottom: 8px solid transparent;
    position: absolute;
    left:-19px;
    align-self: center;
`;
