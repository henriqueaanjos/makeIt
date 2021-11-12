import React, { useState, useRef } from 'react';
import { useAuth } from '../../Hooks/useAuth';
import { useAnimation, AnimatePresence } from 'framer-motion';

import { 
    Container,
    Header,
    UserLogo,
    Logo,
    UserInfo,
    Button,
    Icon,
    Body,
    Content,
    ContentHeader,
    ContentTitle,
    PlusIcon,
    ContentBody,
    ContentBodyAlign,
    ContentBodyOptions,
    TasksContent,
    TasksShowed,
    TaskSelection,
    Selector,
    DateInput
 }  from './styles';


import logoImg from '../../Assets/logo.svg';
// import { lists } from '../../Utils/lists';

import SearchBar  from '../../Components/SearchBar';
import Lists from '../../Components/Lists';
import Options from '../../Components/Options';
import TaskGroup from '../../Components/TaskGroup';
import Tasks from '../../Components/Tasks';
import PopUpNewTask from '../../Components/PopUpNewTask';
import PopUpNewList from '../../Components/PopUpNewList';
import PopUpInfoTask from '../../Components/PopUpInfoTask';
import PopUpInfoList from '../../Components/PopUpInfoList';
import PopUpSelectDate from '../../Components/PopUpSelectDate';

const OptionsData = [
    {
        id: '1',
        title: 'All'
    },
    {
        id: '2',
        title: 'Finished'
    }
]
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
interface DateProps{
    id: string,
    day: string,
    dateComplete: string
}

const Home = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const { signOut, user } = useAuth();
    const controls = useAnimation();

    const [popUpTasksIsVisible, setPopUpTasksIsVisible] = useState(false);
    const [popUpListsIsVisible, setPopUpListsIsVisible] = useState(false);
    const [popUpInfoIsVisible,setPopUpInfoIsVisible ] = useState(false);
    const [popUpInfoListIsVisible,setPopUpInfoListIsVisible ] = useState(false);
    const [popUpDateIsVisible,setPopUpDateIsVisible ] = useState(false);
    const [idOptionSelected, setIdOptionSelected] = useState('1');
    const [searchBar, setSearchBar] = useState('');
    const [taskSelected, setTaskSelected] = useState({} as Task);
    const [listSelected, setListSelected] = useState({} as List);
    const [codL ,setCodL ] = useState<CoordsProps>({} as CoordsProps);
    const [codT ,setCodT ] = useState<CoordsProps>({} as CoordsProps);
    const [codD ,setCodD ] = useState<CoordsProps>({} as CoordsProps);
    const [codI ,setCodI ] = useState<CoordsProps>({} as CoordsProps);
    const [date, setDate] = useState<DateProps>({
        id: '1',
        day: 'Today',
        dateComplete: formatDate(new Date())
    } as DateProps);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [lists, setLists] = useState<List[]>([{
        id: '0',
        title: 'None',
        color: '#ccc'
    }]);
    const [isFilter, setIsFilter] = useState(false); 

    function signOutHome(){
        signOut();
    }
    function formatDate(date: Date){
        let day = days[date.getDay()];
        let month = months[date.getMonth()];
        
        return day + ', '+month+' '+date.getDate()+', '+date.getFullYear();
    }
    function showPopUpTasks(){
        let el = document.getElementById('plus2');
        let cordenadasT = el?.getBoundingClientRect();
        console.log(cordenadasT);
        if(cordenadasT){
            setCodT(cordenadasT);
        }
        setPopUpListsIsVisible(false);
        setPopUpInfoIsVisible(false);
        setPopUpInfoListIsVisible(false);
        setPopUpDateIsVisible(false);
        setPopUpTasksIsVisible(true);
    }
    function showPopUpLists(){
        let el = document.getElementById('plus1');
        let cordenadasL = el?.getBoundingClientRect();
        console.log(cordenadasL);
        if(cordenadasL){
            setCodL(cordenadasL);
            
        }
        setPopUpTasksIsVisible(false);
        setPopUpInfoIsVisible(false);
        setPopUpInfoListIsVisible(false);
        setPopUpDateIsVisible(false);
        setPopUpListsIsVisible(true);
    }

    function filterByDate(dateTask: string){
        const dtSplit = dateTask.split('-');
        dtSplit.forEach(element => {
            element.replace('-', '');
        });
        const dtTask = new Date();
        dtTask.setDate(Number(dtSplit[2]));
        dtTask.setFullYear(Number(dtSplit[0]));
        dtTask.setMonth(Number(dtSplit[1])-1);
        console.log("essa é a data: "+ dateTask);
        let dtCompare;
        switch(date.id){
            case '1':
                dtCompare = new Date();
                console.log(dtCompare, dtTask);
                if(dtCompare.getFullYear() === dtTask.getFullYear() && dtCompare.getMonth() === dtTask.getMonth() && dtCompare.getDate() === dtTask.getDate()){
                    return true;
                }else{
                    return false;
                }
            case '2':
                dtCompare = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                console.log(dtCompare, dtTask);
                if(dtCompare.getFullYear() === dtTask.getFullYear() && dtCompare.getMonth() === dtTask.getMonth() && dtCompare.getDate() === dtTask.getDate()){
                    return true;
                }else{
                    return false;
                }
            case '3':
                dtCompare = new Date(new Date().getTime() + 28 * 60 * 60 * 1000);
                console.log(dtCompare, dtTask);
                return dtTask > new Date(new Date().getTime() - (new Date().getDay())*24 * 60 * 60 * 1000)  && dtTask < new Date(new Date().getTime() - ((new Date().getDay())*24 * 60 * 60 * 1000) + (7*24 * 60 * 60 * 1000) ) ? true : false;
        }
        return true;
    }
    function showPopUpSelectDate(){
        let el = document.getElementById('select');
        let cordenadasS = el?.getBoundingClientRect();
        console.log(cordenadasS);
        if(cordenadasS){
            setCodD(cordenadasS);
            
        }
        setPopUpTasksIsVisible(false);
        setPopUpInfoIsVisible(false);
        setPopUpInfoListIsVisible(false);
        setPopUpListsIsVisible(false);
        setPopUpDateIsVisible(true);
    }
    function showPopUpInfo(id: boolean){
        if(id){
            setPopUpTasksIsVisible(false);
            setPopUpListsIsVisible(false);
            setPopUpDateIsVisible(false);
            setPopUpInfoListIsVisible(false);
            setPopUpInfoIsVisible(true);
        }else{
            setPopUpInfoIsVisible(false);
        }
    }
    function showPopUpInfoList(){
            setPopUpTasksIsVisible(false);
            setPopUpListsIsVisible(false);
            setPopUpDateIsVisible(false);
            setPopUpInfoIsVisible(false);
            setPopUpInfoListIsVisible(true);
    }
    function closePopUps(){
        if(popUpDateIsVisible || popUpInfoIsVisible || popUpListsIsVisible || popUpTasksIsVisible ){
            setPopUpTasksIsVisible(false);
            setPopUpListsIsVisible(false);
            setPopUpDateIsVisible(false);
            setPopUpInfoIsVisible(false);
        }
    }
    function handleFilter(id: boolean){
        setIsFilter(id);
    }
    function handleAddTask(task: Task){
        setTasks([...tasks, task]);
        console.log(task);
    }
    function handleAddList(list: List){
        setLists([...lists, list]);
    }
    function transformDate(duration: string){
        let time = duration.split(':');
        let timeCalculated = Number(time[0])*60 + Number(time[1])
        return timeCalculated;
    }
    function handleSearchBar(input: string){
        setSearchBar(input.toLowerCase());
        console.log(searchBar);
    }
    function getList(list_id: string){
        const lista = lists.find(list => list.id === list_id);
        return lista;
    }
    function selectTask(task: Task){
        setTaskSelected(task);
    }
    function selectList(list: List){
        setListSelected(list);
    }
    function doneTask(id: string){
        const updatedTasks = tasks.map(task => ({ ...task }))

        const updateTask = updatedTasks.find(task => task.id == id);
        if(updateTask)
            updateTask.finished = !updateTask.finished;
        setTasks([...updatedTasks]);
    }
    function editTask(taskn: Task){
        const updatedTasks = tasks.map(task => ({...task}));
        const updateTask = updatedTasks.find(task => task.id == taskn.id);
        if(updateTask){
            updateTask.title = taskn.title;
            updateTask.list_id = taskn.list_id;
            updateTask.date = taskn.date;
            updateTask.duration = taskn.duration;
        }
        setTasks([...updatedTasks]);
    }
    function deleteTask(id: string){
       setTasks(tasks.filter(item => item.id != id));
    }
    function editList(listn: List){
        const updatedLists = lists.map(list => ({...list}));
        const updateList = updatedLists.find(list => list.id == listn.id);
        if(updateList){
            updateList.title = listn.title;
            updateList.color = listn.color;
        }
        setLists([...updatedLists]);
    }
    function deleteList(id: string){
       setLists(lists.filter(item => item.id != id));
    }
    return(
        <Container isVisible={popUpTasksIsVisible} >
            <Header>
                <UserLogo>
                    <Logo src={logoImg}/>
                    <UserInfo>Hello, {user.firstName} {user.lastName}!</UserInfo>
                    <Button  onClick={signOutHome}>
                        <Icon/>
                    </Button>
                </UserLogo>
                <SearchBar setSearch={handleSearchBar}/>
            </Header>
            <Body>
                <Content>
                    <ContentHeader>
                        <ContentTitle>Lists</ContentTitle>
                        <Button onClick={showPopUpLists} >
                            <PlusIcon id="plus1"/>
                        </Button>
                    </ContentHeader>
                    <AnimatePresence>{popUpListsIsVisible && <PopUpNewList coords={codL} lists={lists} addList={handleAddList} setIsVisible={setPopUpListsIsVisible}/>}</AnimatePresence>
                    <ContentBody >
                        <ContentBodyAlign>
                            {searchBar === '' ?
                                lists.filter(item => Number(item.id) > 0).map(item => 
                                    <Lists list={item} setDate={setDate}  setPopUpIsVisible={showPopUpInfoList} selectList={selectList} setIdOptionSelected={setIdOptionSelected}/>    
                                )
                            :
                            lists.filter(item => Number(item.id) > 0 && item.title.includes(searchBar)).map(item => 
                                <Lists list={item} setDate={setDate} setPopUpIsVisible={showPopUpInfoList} selectList={selectList} setIdOptionSelected={setIdOptionSelected}/>    
                            )
                            }
                        </ContentBodyAlign>
                    </ContentBody>
                </Content>
                <TasksContent isVisible={popUpTasksIsVisible}>
                    <ContentHeader>
                        <TaskSelection>
                            <ContentTitle>{date.day}</ContentTitle>
                            <Button onClick={showPopUpSelectDate} >
                                <Selector id="select"/>
                            </Button>
                        </TaskSelection>
                        <DateInput>
                            {date.dateComplete}
                        </DateInput>
                        <Button onClick={showPopUpTasks} >
                            <PlusIcon id="plus2"/>
                        </Button>
                    </ContentHeader>
                    <AnimatePresence>{popUpTasksIsVisible && <PopUpNewTask coords={codT}  tasks={tasks} lists={lists} addTask={handleAddTask} setIsVisible={setPopUpTasksIsVisible}/>}</AnimatePresence>
                    <ContentBody isVisible={popUpTasksIsVisible}>
                        <ContentBodyOptions>
                            <Options setFilter={handleFilter} options={OptionsData}/>
                        </ContentBodyOptions>
                        <TasksShowed>
                            {  
                            searchBar === '' ?
                                isFilter ?
                                    lists.map(list =>
                                        <TaskGroup setCoords={setCodI} setPopUpIsVisible={showPopUpInfo} selectTask={selectTask} setDone={doneTask} list={list} data={tasks.filter(task => task.list_id === list.id && transformDate(task.duration) > 15 && task.finished  && filterByDate(task.date) && (Number(date.id) < 0 ? date.id.replace('-','') === task.list_id : true))}/>      
                                    )
                                :
                                    lists.map(list =>
                                        <TaskGroup setCoords={setCodI} setPopUpIsVisible={showPopUpInfo} selectTask={selectTask}  setDone={doneTask} list={list} data={tasks.filter(task => task.list_id === list.id && transformDate(task.duration) > 15 && !task.finished  && filterByDate(task.date) && (Number(date.id) < 0 ? date.id.replace('-','') === task.list_id : true))}/>      
                                    )
                            :   isFilter ?
                                    lists.map(list =>
                                        <TaskGroup  setCoords={setCodI} setPopUpIsVisible={showPopUpInfo} selectTask={selectTask}  setDone={doneTask} list={list} data={tasks.filter(task => task.list_id === list.id && transformDate(task.duration) > 15 && !task.finished && task.title.includes(searchBar)) }/>      
                                    )
                                :
                                    lists.map(list =>
                                        <TaskGroup setCoords={setCodI} setPopUpIsVisible={showPopUpInfo} selectTask={selectTask}  setDone={doneTask} list={list} data={tasks.filter(task => task.list_id === list.id && transformDate(task.duration) > 15 && task.finished && task.title.includes(searchBar))}/>      
                                    )

                            }
                            <AnimatePresence>{ popUpDateIsVisible && <PopUpSelectDate idOptionSelected={idOptionSelected} setIdOptionSelected={setIdOptionSelected} setDate={setDate} coords={codD}  lists={lists} setIsVisible={setPopUpDateIsVisible}/>} </AnimatePresence>
                            <AnimatePresence>{ popUpInfoIsVisible && <PopUpInfoTask deleteTask={deleteTask} lists={lists} setTask={editTask} coords={codI} task={taskSelected} setIsVisible={setPopUpInfoIsVisible}/>} </AnimatePresence>
                            <AnimatePresence>{ popUpInfoListIsVisible && <PopUpInfoList deleteList={deleteList}  setList={editList} list={listSelected} setIsVisible={setPopUpInfoListIsVisible}/>} </AnimatePresence>
                        </TasksShowed>
                    </ContentBody>
                </TasksContent>
                <Content>
                    <ContentHeader>
                        <ContentTitle>Quick Tasks</ContentTitle>
                    </ContentHeader>
                    <ContentBody >
                        <ContentBodyAlign>
                            {searchBar === '' ?
                                tasks.map(task =>
                                    transformDate(task.duration) <= 15  && filterByDate(task.date) && (Number(date.id) < 0 ? date.id.replace('-','') === task.list_id : true)? <Tasks setCoords={setCodI} setPopUpIsVisible={showPopUpInfo} selectTask={selectTask} setDone={doneTask} quick={true} color={getList(task.list_id)?.color} data={task} />
                                    : null
                                )
                            :
                                tasks.map(task =>
                                    transformDate(task.duration) <= 15 && task.title.includes(searchBar)? <Tasks setCoords={setCodI}setPopUpIsVisible={showPopUpInfo} selectTask={selectTask} setDone={doneTask} quick={true} color={getList(task.list_id)?.color} data={task} />
                                    : null
                                )
                            }
                        </ContentBodyAlign>
                    </ContentBody>
                </Content>
            </Body>
        </Container>
    );
}
export default Home;