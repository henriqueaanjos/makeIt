import styled, { keyframes } from 'styled-components';

interface ButtonProps{
    color: string,
    width: string,
    small?: boolean
}
interface TextProps{
    small?: boolean
}

export const Container = styled.button<ButtonProps>`
    width: ${({width}) => width};
    height: ${({small}) => small ? 30: 50}px;
    background-color:  ${({ color }) => color };
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 10px;
    box-shadow: 2px 3px 5px '#333';
    scale: 1;
    transition: 0.3s box-shadow, 0.3s scale;
    &:active{
        scale: 0.9;
        box-shadow: 0px 0px 0px '#333';
        background-color:  ${({ theme }) => theme.colors.quadernary};
    }
`;

export const Text = styled.h1<TextProps>`
    color:  ${({ theme }) => theme.colors.text};
    font-size: ${({small}) => small ? 20: 30}px;
`;