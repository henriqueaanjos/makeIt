import styled, { keyframes } from 'styled-components';

interface ButtonProps{
    color: string,
    width: string
}

export const Container = styled.button<ButtonProps>`
    width: ${({width}) => width};
    height: 50px;
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

export const Text = styled.h1`
    color:  ${({ theme }) => theme.colors.text};
    font-size: 30px;
`;