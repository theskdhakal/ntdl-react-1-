import "./App.css";
import { Form } from "./Form";
import { Table } from "./Table";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  const addTask = (data) => {
    setTaskList([...taskList, data]);
  };
  return (
    <div class="wrapper">
      <div class="container">
        {/* <!-- title  --> */}
        <div class="row">
          <div class="col text-center mt-5">
            <h1>Not To Do List</h1>
          </div>
        </div>

        {/* <!-- form area  --> */}
        <Form addTask={addTask} />

        {/* <!-- list area  --> */}
        <Table taskList={taskList} />

        {/* <!-- total hrs area  --> */}
        <div class="row fw-bold">
          <div class="col">
            The total hours allocated for this week is
            <span id="totalHrs">0</span>Hours
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
