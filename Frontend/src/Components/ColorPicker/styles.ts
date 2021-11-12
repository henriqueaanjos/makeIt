import styled from 'styled-components';

interface ColorPickerProps{
    color: string,
    isSelect: boolean,
}

export const Container = styled.form`
    display: flex;
    flex-direction: row;
    margin-top: 27px;
    align-items: flex-start;
`;
export const Label = styled.h1`
    font-size: 24px;
    color:  ${({ theme }) => theme.colors.primary};
`;
export const Colors = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-left: 15px;
    margin-top: 3px;
`;
export const Button = styled.button`
    background-color: transparent;
    border: none;
`;
export const Color = styled.div<ColorPickerProps>`
    background-color: ${({color}) => color};
    width: ${({isSelect}) => isSelect ? 32 : 28}px;
    height: ${({isSelect}) => isSelect ? 32 : 28}px;
    border-radius: 100%;
    margin-right: 13px;
    margin-bottom: 13px;
    border: ${({isSelect}) => isSelect ? 3 : 0}px solid  ${({ theme }) => theme.colors.primary};
    :hover{
        border: 3px solid  ${({ theme }) => theme.colors.primary};
        width: 32px;
        height: 32px;
    }
    transition: 0.5s border width height;
`;

