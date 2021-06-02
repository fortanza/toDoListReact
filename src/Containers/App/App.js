import React, { useState } from "react";
import classes from "./App.module.css";
import "./App.module.css";

// Components
import Task from "../../Components/Task/Task";

function App() {
  
  // States
  const [tasks, setTasks] = useState([
    {
      task: "allez au marché",
    },
    {
      task: "Apprendre JS",
    },
  ]);

  const [transform, setTransform] = useState(false);


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

  let cartes = tasks.map((task, index) => {
    return (
      <Task
        key={index}
        task={task.task}
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
      <div transformed={transform}>
        {cartes}
      </div>
    </div>
  );
}

export default App;
