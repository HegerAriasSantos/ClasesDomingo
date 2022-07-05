import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setform] = useState({
    title: '',
    description: ''
  });

  const handleCreateTask = () => {
    setTasks( [...tasks, form]);
    setform({
      title: '',
      description: ''
    })
  }

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    })
  }


  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">
            Titulo
            <input onChange={handleChange} value={form.title} type="text" name="title" id="title" />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Descripcion
            <textarea onChange={handleChange} value={form.description} name="description" id="description" />
          </label>
        </div>
        <button onClick={handleCreateTask} type="button">Enviar</button>
      </form>

      <h2>Tareas</h2>
      {
        tasks.map((task) => {
          return (
            <>
              <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default App