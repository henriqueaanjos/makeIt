import React, { FormEvent, useState } from 'react';
import { useTheme } from 'styled-components';

import {
    Container,
    Header,
    Title,
    ButtonIcon,
    Icon,
    Content,
    Input,
    Select,
    Option,
    InputGroup,
    InputContent,
    Label,
    Error
} from './styles';


import Button from '../Button';

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

interface PopUpProps {
    setIsVisible: (isVisible: boolean) => void,
    tasks: Task[],
    lists: List[]
    addTask: (tasks: Task) => void,
    coords: CoordsProps
}
interface List{
    id: string,
    title: string,
    color: string
}

interface Task{
    id: string,
    title: string,
    list_id: string,
    date: string,
    duration: string
    finished: boolean
}



const PopUpNewTask = ({ setIsVisible, tasks, lists, addTask, coords}: PopUpProps) => {
    const theme = useTheme();

    const t = new Date();
    const m = t.getMonth()+1;
    const m2 = String(m).length < 2 ? '0'+String(m) : String(m)
    const t2 = t.getFullYear()+'-'+ m2 +'-'+ t.getDate();

    const [title, setTitle] = useState('');
    const [listId, setListId] = useState('0');
    const [date, setDate] = useState(t2);
    const [duration, setDuration] = useState('00:30');
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

    function handleSubmit(e : FormEvent){
        e.preventDefault();
        if(title != ''){
            if(duration != ''){
                if(date.length > 10){
                    
                    setDate(t2);
                }
                const task = {
                    id: String(tasks.length),
                    title: title.toLowerCase(),
                    list_id: listId,
                    date,
                    duration,
                    finished: false
                }
                setTitle('');
                setDate(String(new Date()));
                setDuration('00:30');
                addTask(task);
                setIsVisible(false);
            }else{
                setError({
                    id: 3,
                    text: 'Preencha a Duração antes!'
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
            opacity: 0,
            borderRadius:400,
        },
        visible: {
            height: "auto",
            width: 620,
            opacity: 1,
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
                <Title>New Task</Title>
                <ButtonIcon variants={variantsIcon} initial="hidden" animate="visible" exit="hidden" onClick={closePopUp}>
                    <Icon/>
                </ButtonIcon>
            </Header>
            <form onSubmit={handleSubmit}>
                <Content variants={variantsContent} initial="hidden" animate="visible" exit="hidden">
                    <Input placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}/>
                    {error.id === 1 ? <Error>{error.text}</Error>: null}
                    <Select 
                        onChange={e => setListId(e.currentTarget.value)}
                        value={listId}
                    >
                        <Option
                            value=""
                        >
                            Selecione uma Lista
                        </Option>
                        {lists.length > 0 ?
                            lists.filter(item => Number(item.id) > 0).map(item =>
                                <Option
                                    color={item.color}
                                    value={item.id}
                                >
                                    {item.title}
                                </Option>
                            )
                        : <Option
                            >
                                Sem Lista
                            </Option>
                        }
                    </Select>
                    {error.id === 2 ? <Error>{error.text}</Error>: null}
                    <InputGroup>
                        <InputContent>
                            <Label>Date: </Label>
                            <Input style={{marginTop: 0}} value={date} type='date' onChange={e => setDate(e.target.value)}/>
                        </InputContent>
                        <InputContent style={{marginRight: 0}}>
                            <Label>Duration: </Label>
                            <Input style={{marginTop: 0}} type='time'  value={duration} onChange={e => setDuration(e.target.value)}/>
                        </InputContent>
                    </InputGroup>
                    {error.id === 3 ? <Error>{error.text}</Error>: null}
                </Content>
                <Button text='Create' color={theme.colors.secundary} width='100%' onClick={handleSubmit}/>
            </form>
        </Container>
    );
}
export default PopUpNewTask;