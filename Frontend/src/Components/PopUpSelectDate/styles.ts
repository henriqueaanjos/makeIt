import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCaretUp } from 'react-icons/fa'

interface CoordsProps{
    bottom: number,
    height: number,
    left: number,
    right: number,
    top: number,
    width: number,
    x: number,
    y: number
}

interface PopUpProps{
    coords: CoordsProps
}

interface ButtonProps{
    selected: boolean
}

export const Container = styled(motion.div)<PopUpProps>`
    width: 160px;
    height: 200px;
    background-color:  ${({ theme }) => theme.colors.text};
    //background-color: transparent;
    position: absolute;
    top: ${({coords}) => coords.top-15}px;
    left: ${({coords}) => coords.left-20}px;
    border: 2px solid  ${({ theme }) => theme.colors.title};
    border-radius: 10px;
    padding: 14px 18px;
`;
export const HeaderButton = styled(motion.button)`
    background-color: transparent;
    border: none;
`;
export const HeaderIcon = styled(motion(FaCaretUp))`
    font-size: 26px;
    stroke-width: 3px;
    cursor: pointer;
    fill: auto;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`;
export const Button = styled(motion.button)`
    background-color: transparent;
    border: none;
`;

export const ButtonTitle = styled.h3<ButtonProps>`
    color:  ${({ selected,theme }) => selected ? theme.colors.secundary : theme.colors.primary};
    font-size: 24px;
`;

export const Separator = styled.div`
    width:100%;
    height: 2px;
    background-color:  ${({ theme }) => theme.colors.title};
    margin: 10px 0;
`;



