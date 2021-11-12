import React, { FormEvent, useState } from 'react';
import { useTheme } from 'styled-components';

import {
    Container,
    Header,
    Title,
    ButtonIcon,
    Icon,
    ContentForm,
    Input,
    InputGroup,
    InputContent,
    Label,
    Error
} from './styles';

import Button from '../Button';
import ColorPicker from '../ColorPicker';
import { zoomInRight } from 'react-animations';

interface CoordsProps{
    bottom: number,
    height: number,
    left: number,
    right: number,
    top: number,
    width: number,
    x: number,
    y: number
}

interface List{
    id: string,
    title: string,
    color: string
}

interface PopUpProps {
    setIsVisible: (isVisible: boolean) => void,
    lists: List[]
    addList: (list: List) => void,
    coords: CoordsProps
}

const PopUpNewList = ({ setIsVisible, lists, addList, coords}: PopUpProps) => {
    const theme = useTheme();
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');
    const [error, setError] = useState({
        id: 0,
        text: ''
    });

    function closePopUp(){
        setIsVisible(false);
        setError({
            id: 0,
            text: ''
        });
    }
    function handleSetColor(color: string){
        setColor(color);
    }
    function handleSubmit(e : FormEvent){
        e.preventDefault();
        if(title != ''){
            if(color != ''){
                const list = {
                    id: String(lists.length),
                    title: title.toLowerCase(),
                    color
                }
                addList(list);
                setTitle('');
                setColor('');
                setIsVisible(false);
            }else{
                setError({
                    id: 2,
                    text: 'Escolha a color antes!'
                });
            }
        }else{
            setError({
                id: 1,
                text: 'Preencha o Title antes!'
            });
        }
    }

    const variantsIcon = {
        hidden: {
            rotate: 135,
            color: theme.colors.title,
        },
        visible: {
            rotate: 0,
            color: theme.colors.primary,
            transition: {
                duration: 0.5,
                stiffness: 700,
                damping: 30
            }
        }
    }
    const variantsContainer = {
        hidden: {
            height: 0,
            width: 0,
            opacity:0,
            borderRadius:400,
        },
        visible: {
            height: "auto",
            width: 340,
            opacity:1,
            borderRadius:10,
            transition: {
                type: "spring",
                duration: 0.4,
                stiffness: 700,
                damping: 35
            }
        }
    }
    const variantsContent = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition:{
                delay: 0.3,
                duration:0.3,
            }
        }
    }

    return(
        <Container variants={variantsContainer} initial="hidden" animate="visible" exit="hidden" coords={coords}>
            <Header>
                <Title>New List</Title>
                <ButtonIcon variants={variantsIcon} initial="hidden" animate="visible" exit="hidden" onClick={closePopUp}>
                    <Icon/>
                </ButtonIcon>
            </Header>
            <ContentForm variants={variantsContent} initial="hidden" animate="visible" exit="hidden">
                <Input placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}/>
                {error.id === 1 ? <Error>{error.text}</Error>: null}
                <ColorPicker  setSelectedColor={handleSetColor}/>
                {error.id === 2 ? <Error>{error.text}</Error>: null}
            </ContentForm>
            <Button text='Create' color={theme.colors.secundary} width='100%' onClick={handleSubmit}/>
        </Container>
    );
}
export default PopUpNewList;