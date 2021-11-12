import React, { useState } from 'react';
import Lottie from 'react-lottie';

import {
    Container,
    Content,
    Info,
    InfoContent,
    Button,
    ButtonContent,
    Title,
    Duration,
    Icon,
    DurationTime,
    Line,
    InfoIcon,
    InfoButton
} from './styles';

import CheckBox from '../../Assets/CheckBox.json';
import PopUpInfoTask from '../PopUpInfoTask';

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

interface TaskProps {
    quick?: boolean,
    color?: string,
    data: Task
    setDone: (id: string) => void
    selectTask: (task: Task) => void,
    setPopUpIsVisible: (id: boolean) => void,
    setCoords: (coord: CoordsProps) =>void
}


const Tasks = ({quick, color, data, setDone, selectTask,setPopUpIsVisible, setCoords} : TaskProps) => {
    const [finished, setFinished] = useState(data.finished);
    const [animationState, setAnimationState] = useState({
        isStopped: true, 
        isPaused: false,
    });
    const [isHover, setIsHover] = useState(false);
    const [startHover, setStartHover] = useState(false);

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: CheckBox,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
      };
    function Marked(){
        if(animationState.isStopped){
            setAnimationState({...animationState,
                isStopped: false});
            setFinished(true);
            setTimeout(() =>setDone(data.id) , 650);
        }else{
            setAnimationState({...animationState,
                isStopped: true
            });
            setFinished(false);
            setDone(data.id);
        }
    }
    function handleHover(){
        let el = document.getElementById(data.id);
        let cordenadasI = el?.getBoundingClientRect();
        console.log(cordenadasI);
        if(cordenadasI){
            setCoords(cordenadasI);
        }
        selectTask(data);
        isHover ? setPopUpIsVisible(false) : setPopUpIsVisible(true);
    }
    return(
        <Container > 
            <Content onClick={Marked}>
                <Button finished={finished}>
                    <ButtonContent>
                        <Lottie options={defaultOptions}
                        speed={2.5}
                        height={70}
                        width={70}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused}
                        />
                    </ButtonContent>
                </Button>
                <Info>
                    <InfoContent>
                        <Title finished={finished} color={color}>{data.title}</Title>
                        {!quick ?
                            <Duration>
                                <Icon finished={finished}/>
                                <DurationTime finished={finished}>{data.duration}</DurationTime>
                            </Duration>
                            
                        : null}
                        
                    </InfoContent>
                    { finished &&!quick ? <Line /> : null}
                </Info>
            </Content>
            <InfoButton onClick={handleHover} >
                <InfoIcon id={data.id}/>
            </InfoButton>
        </Container>
    );
}
export default Tasks;