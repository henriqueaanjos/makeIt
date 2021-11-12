import React from 'react';
import theme from '../../Global/styles/theme';

import {
    Container,
    HeaderButton,
    HeaderIcon,
    Button,
    ButtonTitle,
    Content,
    Separator
} from './styles';

import {options} from '../../Utils/options';

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
interface DateProps{
    id: string,
    day: string,
    dateComplete: string
}

interface PopUpProps{
    idOptionSelected: string, 
    setIdOptionSelected: (id : string) => void,
    setDate: (date : DateProps) => void, 
    coords: CoordsProps,
    lists: List[],
    setIsVisible: (isVisible: boolean) =>void
}
const variantsIcon = {
    hidden: {
        rotate: 180,
        color: theme.colors.title,
    },
    visible: {
        rotate: 0,
        color: theme.colors.primary,
        transition: {
            duration: 0.4,
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
        width: 160,
        opacity: 1,
        borderRadius:10,
        transition: {
            type: "spring",
            duration: 0.3,
            stiffness: 700,
            damping: 60
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
            delay: 0.2,
            duration:0.3,
        }
    }
}

const PopUpSelectDate = ({idOptionSelected, setIdOptionSelected, setDate, coords, lists, setIsVisible} : PopUpProps) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function handleClosePopUp(){
        setIsVisible(false);
    }
    function handleSelect(id: string){
        if(Number(id) > 0){
            const day = options.find(item => item.id === id)?.title;
            let dt = "";
            let newDt;
            switch(id){
                case "1":
                    newDt = new Date();
                    dt = days[newDt.getDay()] + ', '+ months[newDt.getMonth()] +' '+ newDt.getDate()+', '+ newDt.getFullYear();
                    break; 
                case "2": 
                    newDt = new Date();
                    newDt = new Date(newDt.setDate(newDt.getDate()+1));
                    dt = days[newDt.getDay()] + ', '+ months[newDt.getMonth()] +' '+newDt.getDate()+', '+ newDt.getFullYear();
                    break; 
                case "3":
                    newDt = new Date();
                    const ini = new Date(newDt.setDate(newDt.getDate() - newDt.getDay()));
                    const fin = new Date(newDt.setDate(newDt.getDate() - newDt.getDay()+ 7));
                    if(ini.getFullYear() === fin.getFullYear()){
                        if(ini.getMonth() === fin.getMonth()){
                            dt = months[ini.getMonth()] + ', '+ ini.getDate() + ' - ' + fin.getDate() + ', ' + ini.getFullYear();
                        }else{
                            dt = months[ini.getMonth()] + ', '+ ini.getDate() + ' - ' + months[fin.getMonth()] + ', ' + fin.getDate() + ', ' + ini.getFullYear();
                        }
                    }else{
                        dt = months[ini.getMonth()] + ', '+ ini.getDate() + ', ' + ini.getFullYear()+ ' - ' + months[fin.getMonth()] + ', ' + fin.getDate() + ', ' + fin.getFullYear();
                    }
                    break;
                case "4":
                    dt = String(new Date().getFullYear());
                    break;
            }
            if(day){
                setDate({
                    id,
                    day,
                    dateComplete: dt
                });
            }
        }else{
            const title = lists.find(item=> '-'+item.id === id)?.title;
            if(title){
                setDate({
                    id,
                    day: title,
                    dateComplete: String(new Date().getFullYear())
                })
            }
        }
        setIdOptionSelected(id);
        setIsVisible(false);
    }
    
    return(
        <Container coords={coords} variants={variantsContainer} initial="hidden" exit="hidden" animate="visible" layout>
            <HeaderButton variants={variantsIcon} initial="hidden" animate="visible" exit="hidden" layout onClick={handleClosePopUp}>
                <HeaderIcon />
            </HeaderButton>
            <Content>
            {options.map(item => 
                <Button  variants={variantsContent} initial="hidden" animate="visible" exit="hidden" onClick={() => handleSelect(item.id)}>
                    <ButtonTitle selected={idOptionSelected === item.id}>{item.title}</ButtonTitle>
                </Button>
            )}
                <Separator></Separator>
            {lists.filter(item => item.id != '0')
            .map(item => 
                <Button  variants={variantsContent} initial="hidden" animate="visible"  exit="hidden" onClick={() => handleSelect('-'+item.id)}>
                    <ButtonTitle selected={idOptionSelected === '-'+item.id}>{item.title}</ButtonTitle>
                </Button>
            )}

            </Content>
        </Container>
    );
}
export default PopUpSelectDate;