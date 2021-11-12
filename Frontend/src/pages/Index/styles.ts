import styled, { keyframes } from 'styled-components';
import { slideInLeft, slideInRight, fadeIn} from 'react-animations';
import { motion } from 'framer-motion';

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInRightAnimation = keyframes`${slideInRight}`;
const fadeInAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:  ${({ theme }) => theme.colors.primary};
`;
export const StripesTop = styled(motion.div)`
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 25px;
    animation: 2s ${slideInLeftAnimation};
`;
export const StripesDown = styled(motion.div)`
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 25px;
    animation: 2s ${slideInRightAnimation};
`;
export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index:999999999;
`;
export const Logo = styled(motion.img)`
    width: 258px;
    height: auto;
    margin-bottom: 14px;
    transition: width 0.5s;
    &:hover{
        width: 350px;
    }
    animation: 3s ${fadeInAnimation};
`;
export const Linkin = styled.button`
    color:  ${({ theme }) => theme.colors.text};
    font-size: 20px;
    margin-top: 7px;
    background-color: transparent;
    border: none;
    text-decoration: underline;
`;
export const Buttons = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: 6s ${fadeInAnimation};
`;

