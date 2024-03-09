const getTodos= async ()=>{
    const todos=await fetch('http://localhost:5000/todos')
    .then(res=> res.json())
    .then(data=>data)
    return todos
}

export default getTodos