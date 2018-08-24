import React, { Component } from 'react';
import './App.css';
import SingleToDo from "./ItemToDo";

class App extends Component {
  constructor(){
      super();
      this.state = {
          todos: [],
          currentToDo: ""
      };
  }

  OnInputChange = e => {
      this.setState({ currentToDo: e.target.value});
  }

  onClick = () => {
      let todosCopy = this.state.todos.slice();
      todosCopy.push(this.state.currentToDo);
      this.setState({todos: todosCopy, currentToDo: ""});
  }

  deleteToDo = i => {
      let todosCopy = this.state.todos.slice();
      todosCopy.splice(i, 1);
      this.setState({todos: todosCopy});
  }

    render() {
      let bulletedTodos = this.state.todos.map((e,i) => {
         return(
             <SingleToDo todo={e} delete={() => this.deleteToDo(i)}/>
         );
      });
    return (
      <div>
          <input placeholder="Enter To Do" type="text" value={this.state.currentToDo} onChange={this.OnInputChange}/>
          <button onClick={this.onClick}>Add a task</button><br />
          {this.state.todos.length === 0 ? "No tasks yet!" : <ul>{bulletedTodos}</ul>}
      </div>
    );
  }
}

export default App;
