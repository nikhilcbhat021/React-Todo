

export default function Todos({todos}) {
    return (
    <div style={{marginTop: '10px', padding:'15px', border: '2px solid green', borderRadius: '15px'}}>
        <h1>Here are your TODOs...</h1> <br/>
        {todos.map((todo) => {
            console.log(todo);
            return (<div key={todo._id}>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
                <button>{todo.completed ? "Completed!" : "Mark as Completed"}</button>
                <hr/>
            </div>)
        })}
    </div>
    )

}