import React, { useRef } from 'react';
import './NewTodo.css';

type NewTodoProps = {
   onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
   const textInputRef = useRef<HTMLInputElement>(null);

   const todoSubmitHandler = (event: React.FormEvent) => {
      event.preventDefault();
      let enteredText = textInputRef.current!.value;
      if (enteredText.trim() === '') {
         alert('Todo input cannot be empty.');
         return;
      }
      props.onAddTodo(enteredText);
      if (textInputRef.current) {
         textInputRef.current.value = '';
      }
   };

   return (
      <form onSubmit={todoSubmitHandler}>
         <div className='form-control'>
            <input
               type='text'
               id='todo-text'
               placeholder=' Add Todo...'
               ref={textInputRef}
               maxLength={20}
            />
         </div>
         <button type='submit'>ADD TODO</button>
      </form>
   );
};

export default NewTodo;
