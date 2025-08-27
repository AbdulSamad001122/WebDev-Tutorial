"use client";
import React, { useState } from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setMaintask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMaintask([...maintask, { task, desc }]);
    setTask("");
    setDesc("");
    console.log(maintask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...maintask];
    copyTask.splice(i, 1);
    setMaintask(copyTask);
  };

  let renderTask = <h2> No Task Availible </h2>;

  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i}>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center justify-between w-2/3">
              <h5 className="text-2xl font-semibold">{t.task}</h5>
              <h6 className="text-xl font-semibold">{t.desc}</h6>
            </div>
            <button
              className="bg-red-400 text-white rounded font-bold py-2 px-3 hover:bg-red-800"
              onClick={() => {
                deleteHandler(i);
              }}
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 font-bold text-5xl text-center">
        My Todo List
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter a task"
          className="border-black p-2 w-full max-w-md rounded-md mt-4 border-4 m-5"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter a description"
          className="border-black p-2 w-full max-w-md rounded-md mt-4 border-4 m-5"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <button className="bg-green-700 text-white rounded-2xl font-bold px-4 py-4 hover:bg-green-900 cursor-pointer">
          Add Task
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
