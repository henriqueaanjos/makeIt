import React from 'react';
import { useEffect } from 'react';

import TasksComplete from '../TasksComplete';
import PopUpInfoTask from '../PopUpInfoTask';

import {
    Container,
} from './styles';


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
    color: string,
}
interface TaskGroupProps{
    data: Task[],
    list: List,
    setDone: (id: string) => void,
    selectTask: (task: Task) => void,
    setPopUpIsVisible: (id: boolean) => void
    setCoords: (coord: CoordsProps) => void
}


const TaskGroupComplete = ({ list, data, setDone, selectTask,setPopUpIsVisible, setCoords }:TaskGroupProps) => {
    useEffect(() => {
        console.log(data)
    }, []);
    return (
        data.length != 0?
            <Container color={list.color}>
                {   
                    data.map(task => 
                        <>
                            <TasksComplete setCoords={setCoords} setPopUpIsVisible={setPopUpIsVisible} setDone={setDone} data={task} selectTask={selectTask}/>
                        </>
                    )
                }
            </Container>
        : <></>)
}
export default TaskGroupComplete;