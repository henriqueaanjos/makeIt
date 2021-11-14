import prismaClient from "../prisma"

class ListService{
    async create(title:string, color:string, user_id:string){
        const list = await prismaClient.list.create({
            data:{
                title,
                color,
                published: false
            }
        });
        const list_user = await prismaClient.listUser.create({
            data:{
                list_id:list.id,
                user_id
            },
            include:{
                list:true,
                user:true
            }
        })
        return list;
    }
    async update(id:string, title:string, color:string){
        const list = await prismaClient.list.update({
            where:{
                id
            },
            data:{
                title,
                color
            }
        })
        return list;
    }
    async delete(id:string){
        const task  = await prismaClient.task.deleteMany({
            where:{
                list_id: id
            }
        });
        const list_user = await prismaClient.listUser.deleteMany({
            where:{
                list_id: id
            }
        })
        const list = await prismaClient.list.delete({
            where:{
                id
            }
        })
        return list;
    }
    async publish(id:string){
        const list = await prismaClient.list.findFirst({
            where:{
                id
            }
        });
        const newTask = await prismaClient.list.update({
            where:{
                id
            },
            data:{
                published: !list?.published
            }
        })
        return newTask;
    }

    async share(id:string, user_id:string){
        const users = await prismaClient.listUser.findMany({
            where:{
                list_id: id
            }
        });
        const users_id = users.map(u => u.user_id);
        if(!users_id.includes(id)){
            const list_user = await prismaClient.listUser.create({
                data:{
                    list_id:id,
                    user_id
                },
                include:{
                    list:true
                }
            });
            return list_user;
        }
        return {errorCode: "shared.AlreadyExists"}
    }
}
export { ListService }