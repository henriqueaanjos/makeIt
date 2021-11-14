import styled, { keyframes}from 'styled-components';
import { FiClock, FiInfo} from 'react-icons/fi';
import {slideInRight} from 'react-animations';

const slideAnimation = keyframes`${slideInRight}`

interface TaskProps{
    finished: boolean,
    color?: string
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
    margin-top: 10px;
`;
export const Content = styled.button`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent;
    border: none;
`;

export const Button = styled.button<TaskProps>`
    width: 32px;
    height: 32px;
    padding: 10px;
    display: flex;
    align-self: flex-start;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;

    border: 1px solid  ${({ finished, theme }) => finished ? theme.colors.finished : theme.colors.title};
    background-color:  ${({ theme }) => theme.colors.text};
`;
export const Info = styled.div`
    width: 100%;
    padding: 0px 26px 0px 13px;
`;
export const InfoContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonContent = styled.div`

`;
export const Title = styled.h1<TaskProps>`
    font-size: 24px;
    color:  ${({ finished, theme, color }) => finished ? theme.colors.finished : color ? color :theme.colors.text};
    transition: 0.2s color;
    text-align: left;
    text-decoration: ${({finished}) => finished ? 'line-through' : 'none'};
    text-decoration-thickness:3px;
`;

export const Duration = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const Icon = styled(FiClock)<TaskProps>`
    font-size: 24px;
    stroke-width: 3px;
    color:  ${({ finished, theme }) => finished ? theme.colors.finished : theme.colors.text};
    margin-right: 4px;
    transition: 0.2s color;
`;

export const DurationTime = styled.h1<TaskProps>`
    font-size: 24px;
    color:  ${({ finished, theme }) => finished ? theme.colors.finished : theme.colors.text};
    transition: 0.2s color;
`;


export const Line = styled.div`
    width: 100%;
    height: 0px;
    position: relative;
    top: -17px;
    align-self: flex-end;
    margin-right: 38px;
    border-bottom: 3px solid  ${({ theme }) => theme.colors.finished};
    animation: 0.2s ${slideAnimation};
`;

export const InfoIcon = styled(FiInfo)`
    margin-right: 10px;
    font-size: 24px;
    font-size: 24px;
    stroke-width: 3px;
    color:  ${({ theme }) =>  theme.colors.title};
`;

export const InfoButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
