import React, { useState } from "react";
import classes from "./App.module.css";
import "./App.module.css";

// Components
import Task from "../../Components/Task/Task";

function App() {
  
  // States

  const [tasks, setTasks] = useState([
   
  ]);

const [input, setInput] = useState('');

  // Méthodes

  const removeClickedHandler = (index) => {
    const newtasks = [...tasks];
    newtasks.splice(index, 1);
    setTasks(newtasks);
  };

  const strikeClickHandler = (index) => {
    const newtasks = [...tasks];
    newtasks[index].done = !newtasks[index].done;
    setTasks(newtasks);
  };

  const submittedTaskHandler = event => {
    event.preventDefault();

    const newTask = {
      content: input,
      done: false
    }
    setTasks([...tasks, newTask])
    setInput('')
  }

const changedFormHandler = event => {
  setInput(event.target.value);
}  
//Variables

  let tasksDisplayed = tasks.map((task, index) => {
    return (
      <Task
        key={index}
        done={task.done}
        task={task.content}
        strike= {() => strikeClickHandler(index)}
        remove={() => removeClickedHandler(index)}
      ></Task>
    );
  });

  // let donedTasks = tasks.filter(task => task.done).map((filteredTask, index) => {
  //   return (
  //     <Task
  //       key={index}
  //       done={filteredTask.done}
  //       task={filteredTask.content}
  //       strike= {() => strikeClickHandler(index)}
  //       remove={() => removeClickedHandler(index)}
  //     ></Task>
  //   );
  // });
  
  // JSX
  return (
    <div className={classes.App}>
      <header>
        <span>TO-DO</span>
      </header>
      <div className={classes.add}>
        <form onSubmit={(e)=> submittedTaskHandler(e)}>
          <input type="text" placeholder="Que souhaitez-vous ajouter ?" onChange={(e) => changedFormHandler(e)} value={input}/>
          <button type="submit">Ajouter</button>
        </form>
      </div>
      <div>
        {tasksDisplayed}
        {/* {donedTasks} */}
      </div>
    </div>
  );
}

export default App;
