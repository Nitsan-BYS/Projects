import React from 'react';
import './TodoList.css';

interface TodoListProps {
   items: { id: string; text: string; completed: boolean }[];
   onMarkAsDone: (id: string) => void;
   onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
   return (
      <ul>
         {props.items.map((todo, index) => (
            <li key={todo.id}>
               <span className={todo.completed ? 'completed' : 'in_progress'}>
                  {`${index + 1}.`} {todo.text}
               </span>
               <div className='todo_buttons'>
                  <button onClick={props.onMarkAsDone.bind(null, todo.id)}>
                     DONE
                  </button>
                  <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
                     DELETE
                  </button>
               </div>
            </li>
         ))}
      </ul>
   );
};

export default TodoList;
