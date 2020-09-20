import React from 'react';
import logo from './assets/icons/logo192.png';
import './App.css';
import { requestRepo } from './services/todos'

function App() {
  const [todos, setTodos] = React.useState([])

  async function doRequestRepo() {
    try {
      const response = await requestRepo()
      console.log(response)

      if (response.status === 200) {
        setTodos(response.data.results)
      }

    } catch (error) {
      console.log('errowr', error)
    }
  }

  React.useEffect(() => {
    doRequestRepo()
  }, [])

  React.useEffect(() => {
    console.log(todos)
  }, [todos])


  return (
    <div className="App">

      <img src={logo} />
      <h1>Tampilin Data</h1>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo, index) => {
            return (
              <tr key={index}>
                <td>{todo._id}</td>
                <td>{todo.name}</td>
                <td>{todo.age ? todo.age : '~'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
