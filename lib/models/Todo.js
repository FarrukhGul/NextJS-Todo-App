import mongoose from 'mongoose'



const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        unique : true,
        required : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    priority : {
        type : String,
        enum : ['low', 'medium', 'high'],
        default : 'low'
    },
    description : {
        type : String,
        required : true
    },
    dueDate : {
        type : Date
    }
}, {
    timestamps : true
})

const todoModel = mongoose.models.Todo || mongoose.model('Todo', todoSchema)


export default todoModel