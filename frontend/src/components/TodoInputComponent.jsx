import { useEffect, useState } from 'react';

export default function TodoInputComponent({handleAddTodo}) {
    
    const [todoTitle, setTodoTitle] = useState('')
    const [todoDescription, setTodoDescription] = useState('');

    return (
        <div>
            <div>
                <input id="title" required placeholder="Title" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)}
                    style={{padding:'10px', margin: '10px', width: '30vw', fontSize: '1rem'}}/>
            </div>

            <div>
                <input id="description" required placeholder="Description" value={todoDescription} onChange={(e) => setTodoDescription(e.target.value)}
                    style={{padding:'10px', margin: '10px', width: '30vw', fontSize: '1rem'}}/>
            </div>

            <button
                placeholder="Title"
                style={{padding:'10px', margin: '10px', fontSize: '1rem'}}
                onClick={() => {
                        const todoObj = {title:todoTitle, description:todoDescription, completed: false};
                        if (todoObj.title!=='' && todoDescription.description!=='') {
                            setTodoDescription('');
                            setTodoTitle('');
                            return handleAddTodo(todoObj);
                        }
                    }
                }
            > Add Todo 
            </button>
        </div>
    )
};
