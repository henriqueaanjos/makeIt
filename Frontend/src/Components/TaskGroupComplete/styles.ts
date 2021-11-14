import styled from 'styled-components';

interface TaskGroupProps{
    color: string
}

export const Container = styled.div<TaskGroupProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 12px 10px 12px;
    background-color:  ${({ color }) => color};
    border-radius: 10px;
    margin-bottom: 15px;
    box-shadow: 0px 10px 10px ${({ theme }) => theme.colors.shadow};
`;