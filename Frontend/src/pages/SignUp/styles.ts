import styled, {keyframes} from 'styled-components';
import { motion } from 'framer-motion';
import { slideInRight, fadeIn } from 'react-animations';
import { Link } from 'react-router-dom';

const slideInRightAnimation = keyframes`${slideInRight}`;
const fadeInAnimation = keyframes`${fadeIn}`;


export const Container = styled(motion.div)`
    width: 100%;
    height: 100vh;
    background-color:  ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const Form = styled.div`
    width: 40%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    justify-content: space-between;
`;
export const Logo = styled(motion.img)`
    width: 258px;
    height: auto;
`;
export const FormContent = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 100px;
    padding-bottom: 150px;
    animation: 2s ${fadeInAnimation};
`;
export const FormTitle = styled.h1`
    color:  ${({ theme }) => theme.colors.title};
    font-size: 40px;
`;
export const InputGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const DivInput = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const FormInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
    margin-left: 3px;
    margin-bottom: 25px;
`;
export const FormText = styled.h3`
    color:  ${({ theme }) => theme.colors.text};
    font-size: 20px;
    margin-right: 3px;
`;
export const FormLink = styled.button`
    color:  ${({ theme }) => theme.colors.text};
    font-size: 20px;
    background-color: transparent;
    border: none;
    text-decoration: underline;
`;
export const ButtonForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
`;

export const Content = styled(motion.div)`
    width: 40%;
    background-color:  ${({ theme }) => theme.colors.tercenary};
    animation: 2s ${slideInRightAnimation};
`;
export const StripesTop = styled(motion.div)`
    position: relative;
    left: -20px;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 25px;
    animation: 4s ${slideInRightAnimation};
`;
export const Info = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 50px;
    margin-left: 116px;
`;
export const Title = styled.h1`
    color:  ${({ theme }) => theme.colors.title};
    font-size: 70px;
    margin-bottom: 10px;
`;
export const Description = styled.h3`
    color:  ${({ theme }) => theme.colors.text_dark};
    font-size: 25px;
`;

