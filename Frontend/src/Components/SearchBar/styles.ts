import styled, {keyframes}from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { slideInRight } from 'react-animations';

const slideInRightAnimation = keyframes`${slideInRight}`;

export const Container = styled.div`
    margin-right: 40px;
    margin-top: 36px;
    animation: 2s ${slideInRightAnimation};
`;
export const Input = styled.input`
    width:350px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid  ${({ theme }) => theme.colors.title};
    color:  ${({ theme }) => theme.colors.title};
    padding: 0px 15px;
    font-size: 24px;
`;
export const Button = styled.button`
    background-color: transparent;
    border: none;
    font-size: 24px;
    color:  ${({ theme }) => theme.colors.title};
    position: relative;
    right: 25px;
`;
export const Icon = styled(FiSearch)`
    font-size: 24px;
    stroke-width: 3px;
    color:  ${({ theme }) => theme.colors.title};
`;

