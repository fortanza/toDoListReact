import React from 'react';
import './App.css';

// Components 
import Task from "../../Components/Task/Task";

function App() {
  return (
    <div className="App">
      <header>
        <span>TO-DO</span>
      </header>

      <div className="add">
        <form>
          <input type="text" placeholder="Que souhaitez-vous ajouter ?" />
          <button type="submit">
            Ajouter
          </button>
        </form>
      </div>

      

    </div>
  );
}

export default App;
