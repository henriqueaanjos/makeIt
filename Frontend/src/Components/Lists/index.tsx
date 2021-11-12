import React from 'react';

import {
    Container,
    Title,
    Icon,
    Content,
    InfoButton,
    InfoIcon
} from './styles';

interface DateProps{
    id: string,
    day: string,
    dateComplete: string
}
interface List{
    id: string,
    title: string,
    color: string
}
interface ListProps {
    list: List
    setDate: (date : DateProps) =>void,
    setIdOptionSelected: (id : string) => void
    selectList: (task: List) => void;
    setPopUpIsVisible: (isVisible: boolean) => void
}

const Lists = ({list, setDate, setIdOptionSelected, selectList, setPopUpIsVisible}: ListProps) => {
    function handleFilterByList(){
        setDate({
            id: '-'+list.id,
            day: list.title,
            dateComplete: String(new Date().getFullYear())
        });
        setIdOptionSelected('-'+list.id);
    }
    function handleHover(){
        selectList(list);
        setPopUpIsVisible(true);
    }
    return(
        <Container >
            <Icon color={list.color} onClick={handleFilterByList}/>
            <Content>
                <Title color={list.color} onClick={handleFilterByList} >{list.title}</Title>
                <InfoButton onClick={handleHover} >
                    <InfoIcon id={list.id}/>
                </InfoButton>
            </Content>
        </Container>
    );
}
export default Lists;