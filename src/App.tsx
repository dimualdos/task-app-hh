import React, { useEffect } from 'react';
import { useState } from 'react'
import { TasksInWork } from './components/tasks/tasks';
import { IoArchiveOutline } from 'react-icons/io5';
import { MdRestorePage } from "react-icons/md";
import { InputTask } from './components/input-task/input-task';
import './app.css'

const dataArr = [{ id: 1, task: "test s;ldkvdvk; dzbdfkbmdfobmf dfbmdfobmfpogm", done: false },
{ id: 2, task: "test2", done: false },
{ id: 3, task: "test3", done: true }];


function App() {

  const [tasks, setTasks] = useState([{ id: 0, task: "", done: false }]);
  // if (tasks.length > 0) console.log(tasks);


  useEffect(() => {
    setTasks(dataArr);
  }, []);


  const deleteTask = (id: number) => {
    const newTasks = tasks.map(item => {
      if (item.id === id) {
        return { ...item, done: true }
      }
      return item;
    })
    setTasks(newTasks);
  };
  const restoreTask = (id: number) => {
    const newTasks = tasks.map(item => {
      if (item.id === id) {
        return { ...item, done: false }
      }
      return item;
    })
    setTasks(newTasks);
  };
  const addTask = (task: string) => {
    const newTasks = [...tasks, { id: tasks.length + 1, task, done: false }];
    setTasks(newTasks);
    console.log(newTasks);

  };

  return (
    <main>
      <InputTask addTask={addTask} />
      <TasksInWork
        color={'#BF4F74'}
        title={'Задачи в работе'}
        icon={<IoArchiveOutline />}
        data={tasks.filter((value) => value.done === false)}
        deleteTask={deleteTask}
      />
      <TasksInWork
        color={'#d0cd02'}
        title={'Выполненные задачи'}
        icon={<MdRestorePage />}
        data={tasks.filter((value) => value.done === true)}
        restoreTask={restoreTask}
      />

    </main>
  )
}

export default App
