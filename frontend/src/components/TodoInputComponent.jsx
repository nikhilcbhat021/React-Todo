
export default function TodoInputComponent(params) {
    
    return (
        <div>
            <input placeholder="Title" style={{padding:'10px', margin: '10px', width: '30vw', fontSize: '1rem'}}/> <br/>
            <input placeholder="Description" style={{padding:'10px', margin: '10px', width: '30vw', fontSize: '1rem'}}/> <br/>
            <button placeholder="Title" style={{padding:'10px', margin: '10px', fontSize: '1rem'}}> Add Todo </button>
        </div>
    )
};
