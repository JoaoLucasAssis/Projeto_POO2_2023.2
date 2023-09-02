import { PrismaClient } from "@prisma/client";
import Mae from "../models/mae";

const prisma = new PrismaClient();

class UserServices{
    constructor(){

    }

    async insertMae(mae: Mae){
        try{
            const newMae = await prisma.user.create({ mae });

        } catch(error) {
            console.log(error);
        }
    }

    async updateMae(mae: Mae){
        try{

        const maes = await prisma.user.findMany();
        } catch(error) {
            console.log(error);
        }
    }

    async deleteMae(mae: Mae){
        try{

            const maes = await prisma.user.findMany();
        } catch(error) {
            console.log(error);
        }
    }

}


export default UserServices;
