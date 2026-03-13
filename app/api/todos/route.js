import { NextResponse } from "next/server";
import connectDB from '../../../lib/db'
import todoModel from '../../../lib/models/Todo'



export async function POST(req){
    try{
        // 1 - connnect db
        await connectDB();

        // 2 - get data from the front end 
        const {title, priority, dueDate, description} = await req.json()

        // 3 - validation unique values
        if(!title){
            return NextResponse.json(
                { message : "Title is required.."},
                {status : 400}
            )
        };

           // 3 - validation unique values
        if(!description){
            return NextResponse.json(
                { message : "description is required.."},
                {status : 400}
            )
        };


        // 4 - save todos in db
        const todo = await todoModel.create({title, priority, dueDate, description});

        return NextResponse.json(
            {message : "Todo created successfully...", todo},
            {status : 201}
        )
    }
     catch(err){
        return NextResponse.json(
            {message : err.message},
            {status : 500}
        )
     }
}

export async function GET(){
    try{
        await connectDB();

        // get all todos
        const getAllTodos = await todoModel.find()

        if(getAllTodos.length === 0){
            return NextResponse.json(
                {message : "Todo list is empty...!Please Add some todo first.."},
                {status : 404}
            )
        }
        else {
       return NextResponse.json(
            {getAllTodos},
            {status : 200}
        )
    }

    }
    catch(err){
        return NextResponse.json(
            {message : err.message},
            {status : 500}
        )
    }
}