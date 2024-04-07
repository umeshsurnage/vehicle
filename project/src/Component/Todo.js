import Reac, { useState } from "react"

const Todo = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [id, setId] = useState("")
  const [data, setData] = useState([])
  const add = () => {
    const info = { id, name, email }
    setData([...data, info])
    setName("")
    setEmail("")
  }
  const update = (index) => {
    const newName = prompt("")
    const newEmail = prompt("")
    const newData = [...data]
    newData[index].name = newName
    newData[index].email = newEmail
    console.log(newData[index].name)
    setData(newData)
  }
  const remove = (id) => {
    const newData = [...data]
    newData.splice(id, 1)
    setData(newData)
  }

  return (
    <div>
      <h1>Todo</h1>
      <div>
        Name:
        <input
          className='border ml-4 p-2 mb-4'
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
        />
      </div>
      <div>
        Email:
        <input
          className='border ml-4 p-2 mb-4'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='text'
        />
      </div>
      <div>
        <button
          className='border-2 py-2 px-5 bg-blue-500 text-white'
          onClick={add}
        >
          Add
        </button>
      </div>
      <div>
        {data.map((para, index) => {
          return (
            <div className='mb-4' key={index}>
              <span className='mr-2'>{index}</span>
              <span className='mr-2'>{para.name}</span>
              <span className='mr-2'>{para.email}</span>
              <span>
                <button
                  className='text-blue-600 border py-2 px-4'
                  onClick={() => {
                    update(index)
                  }}
                >
                  Edit
                </button>
              </span>
              <span>
                <button
                  className='text-red-600 border py-2 px-4'
                  onClick={() => {
                    remove(index)
                  }}
                >
                  Delete
                </button>
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Todo
