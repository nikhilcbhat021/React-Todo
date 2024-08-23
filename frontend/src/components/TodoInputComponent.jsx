import { useEffect, useState } from 'react';
import axios from 'axios'
import { backendendpoint } from '../App.jsx'

export default function TodoInputComponent({handleAddTodo, todoCount=0}) {
    
    const [todoTitle, setTodoTitle] = useState('')
    const [todoDescription, setTodoDescription] = useState('');

    useEffect(()=> {
        console.log('UseEffect -- TodoInpComp');
    }, [])

    const token = '12345678987654321.241.erazf123rq34';

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
                onClick={async() => {
                        let todoObj = {title:todoTitle, description:todoDescription, completed: false};
                        if (todoObj.title!=='' && todoDescription.description!=='') {
                            setTodoDescription('');
                            setTodoTitle('');
                            const postResponse = await axios.post(`${backendendpoint}/todo`, todoObj, {
                                Headers: {
                                    Authorization: `${token}`,
                                },
                            })

                            console.log("After posting the todo...");
                            console.log(postResponse);

                            todoObj._id = postResponse.data.data._id;
                            return handleAddTodo(todoObj);
                        }
                    }
                }
            > Add Todo 
            </button>

            <div>
                <p style={{padding:'10px', fontSize: '1.5rem'}}>You have {todoCount} Todos pending...</p>
            </div>
        </div>
    )
};
