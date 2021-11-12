import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

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
    width:340px;
    //background: rgba(0,0,0,0.8);
    background-color: ${({ theme }) => theme.colors.text};
    //background-color: transparent;
    border: 2px solid  ${({ theme }) => theme.colors.title};
    border-radius: 10px;
    display: box;
    flex-direction: column;
    padding: 14px 18px;
    position: absolute;
    top: ${({coords}) => coords.top-23}px;
    right: calc( 100% - ${({coords}) => coords.right + 20}px);
    margin-bottom: -339px;
    display: flex;
    overflow: auto;
    z-index:99999;
    box-shadow: 0 0 150px ${({ theme }) => theme.colors.text_dark};
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
export const ButtonIcon = styled(motion.button)`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(motion(FiX))`
    font-size: 24px;
    stroke-width: 5px;
    color:  ${({ theme }) => theme.colors.text_dark};
`;
export const ContentForm = styled(motion.form)`
    padding: 0px 27px;
    margin-bottom: 30px;
`;
export const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 2px solid  ${({ theme }) => theme.colors.title};
    margin-top: 30px;
    font-size: 24px;
    padding: 0px 8px;
`;
export const InputGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const InputContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    margin-top: 30px;
    margin-right: 23px;
`;
export const Label = styled.h3`
    font-size: 24px;
    color:  ${({ theme }) => theme.colors.primary};
    margin-right: 15px;
`;
export const Error = styled.h3`
    color:  #D62828;
    font-size: 14px;
`;


