import prismaClient from "../prisma"

class GetInfoService{
    async byUser(user_id: string){
        const listsBrute = await prismaClient.listUser.findMany({
            where:{
                user_id
            },
            select:{
                list_id: false, 
                user_id: false,
                id: false,
                list: true
            }
        });
        let tasks =  await prismaClient.task.findMany();
        const lists = listsBrute.map(list => list.list);
        const lists_id = lists.map(list => list.id);
        tasks = tasks.filter(item => lists_id.includes(item.list_id));
        return {lists, tasks}
    }
    async getAllUsers(){
        const users = await prismaClient.user.findMany({
            select:{
                id: true,
                first_name: true,
                last_name: true,
                email: true
            }
        });
        return users;
    }
    async getAllTasksByList(list_id: string){
        const list = await prismaClient.list.findFirst({
            where:{
                id: list_id
            }
        })
        if(list?.published){
            const tasks = await prismaClient.task.findMany({
                where:{
                    list_id
                }
            });
            return {list, tasks};
        }
        return {errorCode: "permission.denied"}
    }
    async getUsersFromList(id: string){
        const usersShared = await prismaClient.listUser.findMany({
            where:{
                list_id: id
            },
            select:{
                id: false,
                list: false,
                list_id: false,
                user_id: false,
                user: true
            }
        });
        const users = usersShared.map(user => user.user);

        return users;
    }
}
export { GetInfoService }