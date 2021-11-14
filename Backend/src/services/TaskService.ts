import prismaClient from "../prisma"

class TaskService{
    async create(title:string, date:string, duration:string, list_id:string){
        const task = await prismaClient.task.create({
            data:{
                title,
                date: new Date(date),
                duration,
                list_id,
                finished: false
            },
            include:{
                list: true
            }
        });
        return task;
    }
    async update(id:string, title:string, date:string, duration:string, list_id:string){
        const task = await prismaClient.task.update({
            where:{
                id
            },
            data:{
                title,
                date: new Date(date),
                duration,
                list_id
            },
            include:{
                list: true
            }
        });
        return task;
    }
    async delete(id:string){
        const task = await prismaClient.task.delete({
            where:{
                id
            }
        });
        return task;
    }
    async done(id:string){
        const task = await prismaClient.task.findFirst({
            where:{
                id
            }
        });
        const newTask = await prismaClient.task.update({
            where:{
                id
            },
            data:{
                finished: !task?.finished
            }
        })
        return newTask;
    }
}
export { TaskService }