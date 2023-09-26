import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1, text: "Hello redux"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        //whenever we make a reducer, we always get two things, one is state and one is action 
        addTodo: (state, action ) =>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        }, //in state we get the present situation of the state whether it is empty or what are it's present value.     Actions are the values which comes to reducer for perform any task, like for eg. id to remove todo,     Payload is an object in which we receive all the data to perform action like text in todo
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? action.payload : todo
            );
        },
       
    }
})


//we always have to export the functionalities of slices, because we have to use them in our components
export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer