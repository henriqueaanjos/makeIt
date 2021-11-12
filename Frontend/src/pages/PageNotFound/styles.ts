import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:  ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 100px;
`;

export const Content = styled.div`

`;

export const Digits = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;

export const FirstDigit = styled.h1`
    font-size: 180px;
    color:  ${({ theme }) => theme.colors.secundary};
    padding-bottom: 30px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color:  ${({ theme }) => theme.colors.text};
`;

export const SecondDigit = styled.h1`
    font-size: 180px;
    color:  ${({ theme }) => theme.colors.secundary};
    padding-top: 20px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color:  ${({ theme }) => theme.colors.text};
`;

export const ThirdDigit = styled.h1`
    font-size: 180px;
    color:  ${({ theme }) => theme.colors.secundary};
    padding-bottom: 20px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color:  ${({ theme }) => theme.colors.text};
`;


export const Description = styled.h1`
    margin-left: 20px;
    padding-bottom: 60px;
    color:  ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content:flex-end;
`;
