import styled, {keyframes} from 'styled-components';
import { FaPowerOff, FaPlus, FaArrowDown, FaCaretDown } from 'react-icons/fa';
import { slideInLeft, slideInUp, slideInRight } from 'react-animations';
import ButtonLogin from '../../Components/Button';

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInUpAnimation = keyframes`${slideInUp}`;

interface PopUpProps{
    isVisible?: boolean
}

export const Container = styled.div<PopUpProps>`
    width: 100%;
    height: 100vh;
    background-color:  ${({ theme }) => theme.colors.primary};
`;
export const Header = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const UserLogo = styled.div`
    padding-top: 36px;
    padding-left: 52px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    animation: 2s ${slideInLeftAnimation};
`;
export const Logo = styled.img`
    width: 120px;
    height: auto;
`;

export const UserInfo = styled.div`
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 15px;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Icon = styled(FaPowerOff)`
    margin-left: 20px;
    font-size: 24px;
    stroke-width: 3px;
    font-weight: bold;
    color:  ${({ theme }) => theme.colors.tercenary};
    :hover{
        cursor: pointer;
        font-size: 26px;
    }
`;
export const Body = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 56px;
`;
export const Content = styled.div`
    width: 24.3%;
    height: 100%;
    border-radius: 10px;
    background-color:  ${({ theme }) => theme.colors.background};
    /* padding: 14px 18px; */
    margin: 0px 9px;
    animation: 2s ${slideInUpAnimation};
`;
export const ContentHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 14px 18px;
    margin-bottom: 0px;
`;
export const ContentTitle = styled.h1`
    font-size: 30px;
    color:  ${({ theme }) => theme.colors.text};
`;
export const PlusIcon = styled(FaPlus)`
    font-size: 24px;
    stroke-width: 5px;
    color:  ${({ theme }) => theme.colors.text};
    :hover{
        cursor: pointer;
    }
`;

export const TasksContent = styled.div<PopUpProps>`
    width: 41.6%;
    border-radius: 10px;
    background-color:  ${({ theme }) => theme.colors.background};
    margin: 0px 9px;
    animation: 2s ${slideInUpAnimation};
`;
export const TaskSelection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const TasksShowed = styled.div`
    height: 90%;
    margin-top: 11px;
    margin-left: 12px ;
    border-radius: 10px;
    flex-grow: 1;
    overflow-y: scroll;
`;

export const Selector = styled(FaCaretDown)`
    margin-left: 6px;
    font-size: 26px;
    stroke-width: 3px;
    fill:  ${({ theme }) => theme.colors.title};
    color:  ${({ theme }) => theme.colors.title};
    cursor: pointer;
`;
export const DateInput = styled.h1`
    font-size: 20px;
    color:  ${({ theme }) => theme.colors.title};
    margin-right: 15px;
`;


export const ContentBody = styled.div<PopUpProps>`
    width:100%;
    height: 90%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 14px 18px;
    padding-top: 0px;
`;
export const ContentBodyOptions = styled.div`
    padding: 0px 12px;
`;
export const ContentBodyAlign = styled.div`
    padding: 35px 12px;
`;
export const ButtonSignIn = styled(ButtonLogin)`
`;

export const ButtonSignUp = styled(ButtonLogin)`
`;
