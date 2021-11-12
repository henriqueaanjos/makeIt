import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../Button';
import { FiX } from 'react-icons/fi';

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

export const Container = styled(motion.div)<PopUpProps>`
    //width: 500px;
    width:40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    position: absolute;
    //top: ${({coords}) => coords.top}px;
    top:30%;
    left:30%;
    //left: ${({coords}) => coords.left -472}px;
    margin-top: -120px;
    background-color:  ${({ theme }) => theme.colors.text};
    border-radius: 10px;
    border: 2px solid  ${({ theme }) => theme.colors.title};
    padding: 10px 20px;
    overflow: auto;
    z-index:99999;
    box-shadow: 0 0 250px   ${({ theme }) => theme.colors.text_dark};
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    color:  ${({ theme }) => theme.colors.primary};
    font-size: 30px;
`;

export const ButtonIcon = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(FiX)`
    font-size: 24px;
    stroke-width: 5px;
    color:  ${({ theme }) => theme.colors.text_dark};
`;

export const Fields = styled.div`
    margin-top: 20px;
    padding: 0px  14px;
`;

export const Field = styled.div`
    display: flex;
    align-items: center;
`;

export const Label = styled.h1`
    font-size: 24px;
    color:  ${({ theme }) => theme.colors.primary};
    margin-right: 10px;
`;

export const Info = styled.input`
    font-size: 24px;
    border: none;
    :focus{
        border-bottom: 2px solid  ${({ theme }) => theme.colors.primary};
    }
`;

export const InfoSelect = styled.select`
    font-size: 24px;
    border: none;
    box-shadow: none;
    :disabled{
        color:  ${({ theme }) => theme.colors.placeholder};
    }
`;

export const InfoOption = styled.option`
    font-size: 24px;
`;


export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 10px;
`;
export const FooterButton = styled(Button)`
    margin-left: 10px;
`;
