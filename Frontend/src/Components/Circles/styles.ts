import styled, { keyframes, css } from 'styled-components';
import { slideInLeft, slideInRight, slideInUp, slideInDown, merge } from 'react-animations';
import { motion } from 'framer-motion';

const slideinDiagonalUp = merge(slideInUp, slideInLeft);
const slideinDiagonalDown = merge(slideInDown, slideInRight);

const slideInLeftAnimation = keyframes`${slideinDiagonalUp}`;
const slideInRightAnimation = keyframes`${slideinDiagonalDown}`;

interface CircleProps{
    type: 'up' | 'down',
}
export const Container = styled(motion.div)<CircleProps>`
    position: absolute;
    ${({type}) => type === 'up' && css({
        right: 0,
    })};
    ${({type}) => type === 'down' && css({
        bottom: 0,
    })};
    animation: 3.5s ${({type}) => type==='up' ? slideInRightAnimation : slideInLeftAnimation};
    
`;

export const Circle1 = styled.div<CircleProps>`
    width: 50vh;
    height: 50vh;
    border-top-right-radius: ${({type}) => type === 'up'? 0 : 100}%;
    border-bottom-left-radius: ${({type}) => type === 'up'? 100 : 0}%;
    background-color:  ${({ theme }) => theme.colors.secundary};
    display: flex;
    align-items: ${({type}) => type === 'up'? 'flex-start' : 'flex-end'};
    justify-content: ${({type}) => type === 'up'? 'flex-end' : 'flex-start'};
    transition: width 0.5s, height 0.5s;
    box-shadow: 3px 10px 10px   ${({ theme }) => theme.colors.shadow};
    &:hover{
        width: 53vh;
        height: 53vh;
    }
`;
export const Circle2 = styled.div<CircleProps>`
    width: 40vh;
    height: 40vh;
    border-top-right-radius: ${({type}) => type === 'up'? 0 : 100}%;
    border-bottom-left-radius: ${({type}) => type === 'up'? 100 : 0}%;
    background-color:  ${({ theme }) => theme.colors.tercenary};
    display: flex;
    align-items: ${({type}) => type === 'up'? 'flex-start' : 'flex-end'};
    justify-content: ${({type}) => type === 'up'? 'flex-end' : 'flex-start'};
    transition: width 0.5s, height 0.5s;
    &:hover{
        width: 43vh;
        height: 43vh;
    }
`;

export const Circle3 = styled.div<CircleProps>`
    width: 30vh;
    height: 30vh;
    border-top-right-radius: ${({type}) => type === 'up'? 0 : 100}%;
    border-bottom-left-radius: ${({type}) => type === 'up'? 100 : 0}%;
    background-color:  ${({ theme }) => theme.colors.quadernary};
    display: flex;
    align-items: ${({type}) => type === 'up'? 'flex-start' : 'flex-end'};
    justify-content: ${({type}) => type === 'up'? 'flex-end' : 'flex-start'};
    transition: width 0.5s, height 0.5s;
    &:hover{
        width: 33vh;
        height: 33vh;
    }
    
`;
export const Circle4 = styled.div<CircleProps>`
    width: 20vh;
    height: 20vh;
    border-top-right-radius: ${({type}) => type === 'up'? 0 : 100}%;
    border-bottom-left-radius: ${({type}) => type === 'up'? 100 : 0}%;
    background-color:  ${({ theme }) => theme.colors.title};
    transition: width 0.5s, height 0.5s;
    &:hover{
        width: 23vh;
        height: 23vh;
    }
`;