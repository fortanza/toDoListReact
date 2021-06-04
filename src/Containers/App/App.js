import React, { useState } from "react";
import classes from "./App.module.css";
import "./App.module.css";

// Components
import Task from "../../Components/Task/Task";

function App() {
  
  // States
  const [tasks, setTasks] = useState([
    {
      content: "allez au marché",
      done: false
    },
    {
      content: "Apprendre JS",
      done: false
    },
  ]);

  // Méthodes

  const removeClickHandler = (index) => {
    const newtasks = [...tasks];
    newtasks.splice(index, 1);
    setTasks(newtasks);
  };

  const strikeClickHandler = (index) => {
    const newtasks = [...tasks];
    newtasks[index].task = newtasks[index].task.strike();
    setTasks(newtasks);
  };

  let tasksDisplayed = tasks.map((task, index) => {
    return (
      <Task
        key={index}
        done={task.done}
        task={task.content}
        strike= {() => strikeClickHandler(index)}
        remove={() => removeClickHandler(index)}
      ></Task>
    );
  });

  // JSX
  return (
    <div className={classes.App}>
      <header>
        <span>TO-DO</span>
      </header>
      <div className={classes.add}>
        <form>
          <input type="text" placeholder="Que souhaitez-vous ajouter ?" />
          <button type="submit">Ajouter</button>
        </form>
      </div>
      <div>
        {tasksDisplayed}
      </div>
    </div>
  );
}

export default App;
