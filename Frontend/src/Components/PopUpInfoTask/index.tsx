import React, {useEffect, useState} from 'react';

import {
    Container,
    Header,
    Title,
    ButtonIcon,
    Icon,
    Fields,
    Field,
    Label,
    Info,
    InfoSelect,
    InfoOption,
    Footer,
    FooterButton
} from './styles';

import theme from '../../Global/styles/theme';
import { tasks } from '../../Utils/tasks';

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

interface Task{
    id: string,
    title: string,
    list_id: string,
    date: string,
    duration: string,
    finished: boolean
}

interface List{
    id: string,
    title: string,
    color: string
}

interface PopUpTask {
    task: Task,
    setIsVisible: (isVisible: boolean) => void
    coords: CoordsProps,
    setTask: (tasks: Task) => void,
    lists: List[],
    deleteTask: (id: string) => void
}
const PopUpInfoTask = ({task, setIsVisible, coords, setTask, lists, deleteTask} : PopUpTask) => {
    const [title, setTitle] = useState(task.title);
    const [list, setList] = useState(task.list_id);
    const [date, setDate] = useState(task.date);
    const [duration, setDuration] = useState(task.duration);
    const [isEditing, setIsEditing] = useState(false);
    function closePopUp(){
        setIsVisible(false);
    }
    function handleEdit(){
        setIsEditing(!isEditing);
    }
    function handleSave(){
        const newTask = {
            id: task.id,
            title,
            list_id: list,
            date,
            duration,
            finished: task.finished
        };
        setTask(newTask);
        setIsEditing(!isEditing);
        closePopUp();
    }
    function getListTitle(id: string){
        return lists.find(item => item.id === id)?.title;
    }
    function handleDelete(id: string){
        const conf = window.confirm("Do you really want to delete this task? This Action can't be undone");
        if(conf){
            deleteTask(id);
            closePopUp();
        }
    }
    const variantsContainer = {
        hidden: {
            width:0,
            opacity: 0,
            borderRadius:400,
        },
        visible: {
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
    return(
        <Container variants={variantsContainer} initial="hidden" animate="visible" coords={coords}>
            <Header>
                <Title>Task Info</Title>
                <ButtonIcon onClick={closePopUp}>
                    <Icon/>
                </ButtonIcon>
            </Header>
            <Fields>
                <Field>
                    <Label>Title: </Label>
                    <Info value={title} onChange={e => setTitle(e.currentTarget.value)} readOnly={!isEditing} disabled={!isEditing}/>
                </Field>
                <Field>
                    <Label>List: </Label>
                    <InfoSelect value={list} onChange={e => setList(e.currentTarget.value)} disabled={!isEditing}>
                       { !isEditing &&
                            <InfoOption>
                                {getListTitle(list)}
                            </InfoOption>
                        }
                        {lists.map(item =>
                            <InfoOption
                                value={item.id}
                            >
                                {item.title}
                            </InfoOption>
                        )}
                    </InfoSelect>
                </Field>
                <Field>
                    <Label>Date: </Label>
                    <Info value={date} type="date" onChange={e => setDate(e.currentTarget.value)} readOnly={!isEditing} disabled={!isEditing}/>
                </Field>
                <Field>
                    <Label>Duration: </Label>
                    <Info value={duration} type="time" onChange={e => setDuration(e.currentTarget.value)} readOnly={!isEditing} disabled={!isEditing}/>
                </Field>
            </Fields>
            <Footer>
                <FooterButton text={isEditing ? "Save" : "Edit"} width={"20%"} onClick={isEditing ? handleSave : handleEdit} color={isEditing ? theme.colors.finished :theme.colors.tercenary}/>
                <FooterButton text="Delete" width={"20%"} onClick={() => handleDelete(task.id)} color={theme.colors.secundary}/>
            </Footer>
        </Container>
    );
}
export default PopUpInfoTask;