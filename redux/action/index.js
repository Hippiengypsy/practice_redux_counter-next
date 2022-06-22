export const Add_Todo = "Add_ToDo"

export const addTodo = (data) => {
  return {
    type: Add_Todo,
    payload: {
        data: data,
        id: new Date().getTime().toString()
    }
  }
}

