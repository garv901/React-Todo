import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header';
import about from './components/pages/about';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
       id: uuid.v4(),
       title: 'Dinner with wife',
       completed: false
      },
      {
       id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      }      
    ]
  }
  markComplete = (id) =>{
    this.setState ( {todos: this.state.todos.map(todo =>
      {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })});
  }

  //Delete Todo

  delTodo = (id) =>{
    this.setState ( {todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  addTodo = (title) =>{
    const newTodo ={
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState( {todos: [...this.state.todos, newTodo]});
  }

  render(){
    return (
      <Router>
        <div className="app"> 
          <div className="container">
            <Header />
            <Route exact path="/" render= {props =>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos delTodo= {this.delTodo} todos={this.state.todos} markComplete={this.markComplete}/>
              </React.Fragment>
            )} />

            <Route path="/about" component={about}/>
          </div>
        </div>
        </Router>
      );
    }
  }

export default App;
