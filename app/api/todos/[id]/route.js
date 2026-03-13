import { NextResponse } from "next/server";
import connectDB from "@/lib/db"
import todoModel from "@/lib/models/Todo"



export async function PUT(req, { params }) {
    try {
        await connectDB()

        const { id } = await params

        // take data from the frontend 
        const { title, priority, dueDate, completed, description } = await req.json()

        //upadate todo

        const updatedTodo = await todoModel.findByIdAndUpdate(id,
            { title, priority, dueDate, completed, description },
            { new: true }
        )

        if (!updatedTodo) {
            return Response.json(
                { message: "Todo not found!" },
                { status: 404 }
            )
        }

        return Response.json(
            { message: "Todo has been updated successfully!", updatedTodo },
            { status: 200 }
        )
    }
    catch (err) {
        return NextResponse.json(
            { message: err.message },
            { status: 500 }
        )
    }
}

export async function DELETE(_, { params }) {
    try {
        // connect db 
        await connectDB();

        // get id 
        const { id } = await params

        const deleteTodo = await todoModel.findByIdAndDelete(id);
        if(!deleteTodo){
            return NextResponse.json(
                {message : "Todo not found"},
                {status : 404}
            )
        }

        return NextResponse.json(
            { message: "Todo deleted Successfully", deleteTodo },
            { status: 200 }
        )
    }
    catch (err) {
        return NextResponse.json(
            { message: err.message },
            { status: 500 }
        )
    }
}