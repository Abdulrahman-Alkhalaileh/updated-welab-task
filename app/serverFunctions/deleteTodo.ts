import { revalidatePath } from "next/cache"

export default async function deleteTodo(id: string){
    'use server'
    await fetch(`http://localhost:5000/todos/${id}`,{
        method: 'DELETE',
    })
    revalidatePath('/')
}