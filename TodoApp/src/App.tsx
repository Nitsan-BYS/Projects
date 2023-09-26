import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import NewTodo from './components/NewTodo/NewTodo';
import { Todo } from './todo.model';
import './App.css';

const App: React.FC = () => {
   const [todos, setTodos] = useState<Todo[]>([]);

   const todoAddHandler = (text: string) => {
      //Update the existing array with the new ones
      setTodos((prevTodos) => [
         ...prevTodos,
         { id: Math.random().toString(), text: text, completed: false },
      ]);
   };

   const todoDeleteHandler = (todoId: string) => {
      const userConfirmed = window.confirm(
         'Are you sure you want to delete the item?'
      );

      // Check if the user confirmed the delete
      if (userConfirmed) {
         // Update the list without the one we want to delete
         setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);
         });
      }
   };

   const markAsDoneHandler = (todoId: string) => {
      // Update the completion status of the selected todo
      setTodos((prevTodos) => {
         return prevTodos.map((todo) =>
            todo.id === todoId ? { ...todo, completed: true } : todo
         );
      });
   };

   return (
      <div>
         <h1 className='title'>Todo App</h1>
         <NewTodo onAddTodo={todoAddHandler} />
         <TodoList
            items={todos}
            onDeleteTodo={todoDeleteHandler}
            onMarkAsDone={markAsDoneHandler}
         />
      </div>
   );
};

export default App;
