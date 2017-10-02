import React, { Component } from 'react';

var taskList = [
  {
    title: 'One',
    completed: false
  },
  {
    title: 'Two',
    completed: false
  },
  {
    title: 'Three',
    completed: true
  },
  {
    title: 'Four',
    completed: true
  },
  {
    title: 'Five',
    completed: false
  }
];

class List extends Component {
  render() {
    console.log(this.props);
    return (
      <ul>
        {
          this.props.tasks.map((item, index) => <li key={index}>{item.title}</li> )
        }
      </ul>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks         : taskList,
      filteredTasks : taskList
    }
  }

  render() {
    return (
      <main>
        <h1>First react attempt</h1>
        <input type="search" className="text-input" placeholder="Search..." onInput={this.searchTask} />
        <form className="add-task-form" onSubmit={this.addTask}>
          <input type="search" className="text-input" placeholder="Add task..." ref={(input) => { this.addTaskField = input; }}/>
        </form>
        <List tasks={this.state.filteredTasks}/>
      </main>
    );
  }

  searchTask = (event) => {
    let currentValue = event.target.value.toLowerCase();
    this.setState({
      filteredTasks: this.state.tasks.filter(task => task.title.toLowerCase().includes(currentValue))
    });
  }

  addTask = (event) => {
    event.preventDefault();
    if (this.addTaskField.value) {
      this.state.filteredTasks.push({
        title: this.addTaskField.value,
        completed: false
      });
      this.setState({
        filteredTasks: this.state.filteredTasks,
      });
      this.addTaskField.value = '';
    }
  }
}

export default App;
