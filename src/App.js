import "./App.css";
import { Form } from "./Form";
import { Table } from "./Table";
import { useState } from "react";
const hrPw = 168;

function App() {
  const [taskList, setTaskList] = useState([]);
  const ttl = taskList.reduce((subttl, { hr }) => subttl + +hr, 0);
  const addTask = (data) => {
    if (hrPw < ttl + +data.hr) {
      return alert("hrs exceeded");
    }
    setTaskList([...taskList, data]);
  };

  const taskSwitcher = (id, type) => {
    const tempArg = taskList.map((item) => {
      if (item.id === id) {
        item.type = type;
      }
      return item;
    });
    setTaskList(tempArg);
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete the task")) {
      const deleteArg = taskList.filter((item) => item.id != id);
      setTaskList(deleteArg);
    }
  };
  console.log(taskList);
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
        <Table
          taskList={taskList}
          taskSwitcher={taskSwitcher}
          deleteTask={deleteTask}
        />

        {/* <!-- total hrs area  --> */}
        <div class="row fw-bold">
          <div class="col">
            The total hours allocated for this week is
            <span id="totalHrs">{ttl}</span>
            Hours
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
