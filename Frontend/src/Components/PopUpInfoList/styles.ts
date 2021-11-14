import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../Button';
import { FiX } from 'react-icons/fi';

interface ColorProps{
    color: string
}

export const Container = styled.div`
    width:40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    position: absolute;
    top:30%;
    left:30%;
    margin-top: -120px;
    background-color:  ${({ theme }) => theme.colors.text};
    border-radius: 10px;
    border: 2px solid  ${({ theme }) => theme.colors.title};
    padding: 10px 20px;
    overflow: auto;
    z-index:99999;
    box-shadow: 0 0 250px   ${({ theme }) => theme.colors.text_dark};
`;
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    color:  ${({ theme }) => theme.colors.primary};
    font-size: 30px;
`;

export const ButtonIcon = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(FiX)`
    font-size: 24px;
    stroke-width: 5px;
    color:  ${({ theme }) => theme.colors.text_dark};
`;

export const Fields = styled.div`
    margin-top: 20px;
    padding: 0px  14px;
`;

export const Field = styled.div`
    display: flex;
    align-items: center;
`;

export const FieldColor = styled.div`
    display: flex;
    align-items: center;
    margin-top: 27px;
`;

export const Label = styled.h1`
    font-size: 24px;
    color:  ${({ theme }) => theme.colors.primary};
    margin-right: 10px;
`;

export const Info = styled.input`
    font-size: 24px;
    border: none;
    :focus{
        border-bottom: 2px solid  ${({ theme }) => theme.colors.primary};
    }
`;

export const Color = styled.div<ColorProps>`
    background-color: ${({color}) => color};
    width: 25px;
    height: 25px;
    border-radius: 100%;
    border: 3px solid  ${({ theme }) => theme.colors.primary};
    
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 10px;
    margin-top: 25px;
`;
export const FooterButton = styled(Button)`
    margin-left: 10px;
`;

export const Shared = styled.input`
    width:100%;
    font-size: 24px;
    border: none;
    border-bottom: 2px solid  ${({ theme }) => theme.colors.title};
    margin-bottom: 15px;
    :focus{
        border-bottom: 2px solid  ${({ theme }) => theme.colors.primary};
    }
`;
export const Published = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    border: 2px solid  ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    padding: 5px 7px;
`;

export const PublishedTitle = styled.h3`
    color:  ${({ theme }) => theme.colors.secundary};
`;

export const PublicUrlField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px 10px;
    overflow-x: scroll;
`;


export const PublicUrl = styled.h3`
    color:  ${({ theme }) => theme.colors.primary};
    white-space: nowrap;
`;

export const SharedField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`;

export const DropDown = styled.ul`
    width:100%;
    margin-top: -15px;
    padding: 5px 5px;
    margin-bottom: 30px;
`;

export const Item = styled.li`
    list-style: none;
    font-size: 20px;
    border-bottom: 1px solid  ${({ theme }) => theme.colors.primary};
    padding: 5px 10px;
    :hover{
        background-color:  ${({ theme }) => theme.colors.primary};
        color:  ${({ theme }) => theme.colors.title};
    }
`;

export const InfoList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;