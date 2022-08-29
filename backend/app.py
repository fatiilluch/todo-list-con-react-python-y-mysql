from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Text
from uuid import uuid4 as uuid


app = FastAPI()

todos = [
    {
        "id": 1,
        "task": "ir de compras",
        "completed": False
    },
    {
        "id": 2,
        "task": "estudiar TASD",
        "completed": False
    },
    {
        "id": 3,
        "task": "bañarme",
        "completed": False
    }]

# post model

class Todo(BaseModel):
    id: int
    task: Text
    completed: bool = False # le asigno un valor por defecto


@app.get('/')
def read_root():
    return {"welcome": "Welcome to my REST API"}

@app.get('/todos')
def get_todos():
    return todos

@app.post('/todos')
def save_todo(todo: Todo):
    # todo.id = uuid()
    todos.append(todo.dict())
    return todos[-1]


@app.get('/todos/{id}')
def get_todo(id: int):
    for todo in todos:
        if todo['id'] == id:
            return todo
    raise HTTPException(status_code = 404, detail="TODO not found")


@app.delete('/todos/{id}')
def delete_todo(id : int):
    for index, todo in enumerate(todos): # enumerate nos da el todo y el indice
        if todo['id'] == id:
            todos.pop(index) 
            return {"message": "la tarea ha sido eliminada"}
    return HTTPException(status_code = 404, detail= "TODO not found")


@app.put('/todos/{id}')
def update_todo(id: int, updated_todo: Todo):
    for index, todo in enumerate(todos):
        if todo['id'] == id:
            todos[index]['task'] = updated_todo.task
            todos[index]['completed'] = updated_todo.completed
            return {"message": "la tarea ha sido actualizada"}
    return HTTPException(status_code = 404, detail= "TODO not found")
