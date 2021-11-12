import styled from 'styled-components';
import { FiMenu, FiInfo} from 'react-icons/fi';

interface ListProps{
    color: string
}
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 15px;
    cursor: pointer;
`;
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const Icon = styled(FiMenu)`
    font-size: 30px;
    margin-right: 9px;
`;
export const Title = styled.h3<ListProps>`
    color: ${({color}) => color};
    font-size: 20px;
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


