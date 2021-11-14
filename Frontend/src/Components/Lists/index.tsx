import React, { useEffect, useState } from 'react';
import { getAllJSDocTags } from 'typescript';
import { api } from '../../Services/api';

import {
    Container,
    Title,
    Icon,
    Content,
    InfoButton,
    Icons,
    InfoIcon,
    PublishIcon,
    ShareIcon
} from './styles';

interface DateProps{
    id: string,
    day: string,
    dateComplete: string
}
interface List{
    id: string,
    title: string,
    color: string,
    published: boolean
}
interface ListProps {
    list: List
    setDate: (date : DateProps) =>void,
    setIdOptionSelected: (id : string) => void
    selectList: (task: List) => void;
    setPopUpIsVisible: (isVisible: boolean) => void
}

const Lists = ({list, setDate, setIdOptionSelected, selectList, setPopUpIsVisible}: ListProps) => {
    const [isPublished, setIsPublised] = useState(list.published);
    const [isShared, setIsShared] = useState(false);
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
    async function getData(){
        try{
            const result = await api.get(`/users/${list.id}`);
            result.data.length > 1 ? setIsShared(true) : setIsShared(false);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, []);
    return(
        <Container >
            <Icon color={list.color} onClick={handleFilterByList}/>
            <Content>
                <Title color={list.color} onClick={handleFilterByList} >{list.title}</Title>
                <Icons>
                    {isPublished && <PublishIcon />}
                    {isShared && <ShareIcon />}
                    <InfoButton onClick={handleHover} >
                        <InfoIcon id={list.id}/>
                    </InfoButton>
                </Icons>
            </Content>
        </Container>
    );
}
export default Lists;