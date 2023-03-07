import React, { useState } from "react";
import { utils } from "./utils";

export const Form = ({ addTask }) => {
  const [formData, setFormData] = useState({ type: "entry" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const id = utils(6);
    addTask({ ...formData, id });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div class="row mt-3">
        <div class="col-md-6">
          <input
            onChange={handleOnChange}
            type="text"
            name="task"
            class="form-control task-input"
            required
            placeholder="Enter a task"
          />
        </div>

        <div class="col-md-3">
          <input
            onChange={handleOnChange}
            type="number"
            name="hr"
            class="form-control hrs-input"
            min="1"
            required
            placeholder="Enter no. of hrs"
          />
        </div>

        <div class="col-md-3 text-center">
          <button class="btn btn-primary" type="submit" id="form-btn">
            <i class="fa-solid fa-plus"></i>Add New Task
          </button>
        </div>
      </div>
    </form>
  );
};
