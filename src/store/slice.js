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
                // console.log(action.payload);
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
                console.log(action.payload);
                
                const category = {
                    name: action.payload
                }
                // state.categories.push(category);

                state.categories =  [category,...state.categories]

                state.categories.map((data) => {
                  console.log(data.name);
                });
            },
            deleteCategory:(state,action)=>{
                state.categories = state.categories.filter((category)=>category.name !== action.payload)
                state.todos = state.todos.filter((todo)=> todo.category !== action.payload)
            }
        }

    }
)

export const {addTodo,deleteTodo,addCategory,updateTodo,toggleCompleted,deleteCategory,setCategory,setTodos} = todoSlice.actions

export default todoSlice.reducer