import { revalidatePath } from "next/cache"

export default async function addTodo(data: FormData){
    'use server'
    const newTodo={
        id: crypto.randomUUID(),
        title: data.get('title'),
        completed: false,
        edited: false
    }
    await fetch('http://localhost:5000/todos',{
        method: 'POST',
        headers: {
            'Content-Type' : 'aplication/json',
        },
        body: JSON.stringify(newTodo)
    })
    revalidatePath('/')
}