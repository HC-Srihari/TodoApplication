import {createSlice,nanoid} from '@reduxjs/toolkit'


const initialState= {
    categories:[
        
    ],
    todos: [
        
        
    ],
    
    
}

const todoSlice = createSlice(
    {
        name:"todoApp",
        initialState,
        reducers:{
            addTodo: (state,action)=>{
                const todo = {
                    id : nanoid(),
                    category: action.payload.category,
                    text: action.payload.text,
                    completed: false
                }
                
                let temp =[]
                temp.push(todo)
                temp.push(...state.todos)
                state.todos = temp               
            },

            deleteTodo:(state,action)=>{
                state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
            },

            toggleCompleted:(state,action)=>{
                state.todos.map((todo)=>{
                    if(action.payload === todo.id){
                        todo.completed = !todo.completed;
                    }
                })
            },

            updateTodo: (state,action)=>{
                state.todos.map((todo)=>{
                    if(action.payload.id === todo.id){
                        todo.text =action.payload.text;
                    }
                })
            },

            addCategory:(state,action)=>{
                
                const category = {
                    id:nanoid(),
                    name: action.payload
                }

                state.categories =  [category,...state.categories]          
            },
            
            deleteCategory:(state,action)=>{
                state.categories = state.categories.filter((category)=>category.id !== action.payload.id)
                state.todos = state.todos.filter((todo)=> todo.category !== action.payload.name)
            }
        }

    }
)

export const {addTodo,deleteTodo,addCategory,updateTodo,toggleCompleted,deleteCategory,setCategory,setTodos} = todoSlice.actions

export default todoSlice.reducer