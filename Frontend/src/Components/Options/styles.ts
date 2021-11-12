import styled from 'styled-components';

interface OptionsProps{
    isSelected: boolean,
}

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    margin-right: 24px;
`;
export const Title = styled.h3<OptionsProps>`
    color:  ${({ theme, isSelected }) => isSelected ? theme.colors.text : theme.colors.text_disable};
    font-size: 20px;
`;
