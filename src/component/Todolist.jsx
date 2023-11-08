import React, {useRef, useState, useContext} from "react";
import {v4 as uuidv4} from 'uuid';
import ContentList from "./ContentList";
import ChangeThemeButton from "./ChangeThemeButton";
import {ThemeProvider} from "../context/ThemeContext";
import { ThemeContext} from "../context/ThemeContext";
import Header from "./Header";

export default function Todolist () {
    const [jobs, setJobs] = useState([
        { 
          id: uuidv4(),
          name: "clean the house",
          done: false,
        },
        {
          id: uuidv4(),
          name: "do the homework",
          done: false,
        },
        {
          id: uuidv4(),
          name: "play games",
          done: false,
        },
        {
          id: uuidv4(),
          name: "watch TV",
          done: false,
        },
        {
          id: uuidv4(),
          name: "cook meals",
          done: false,
        },
        {
          id: uuidv4(),
          name: "study Japanese",
          done: false,
        },
    ]);

    const theme  = useContext(ThemeContext);

    const handleAdd = (jobName) => {
      let newJobs = [...jobs];
      const addItem = {
        id: uuidv4(),
        name: jobName,
        done: false,
      }
      setJobs([addItem,...newJobs])
    }

    const handleDone = (e, id) => {
      let newJobs = [...jobs];
      let foundJob = newJobs.find(job => job.id === id);
      foundJob.done = !foundJob.done;
      setJobs(newJobs);
    }

    const handleDelete = (e, id) => {
      const newJobs = jobs.filter(job => job.id !== id);
      setJobs(newJobs)
    }

    return (
      <ThemeProvider>
        <div className={`flex flex-col pt-20 items-center  h-full min-h-screen pb-28 relative ${theme==='light' ? `bg-slate-100` : `bg-gray-900`}`}>
            <ChangeThemeButton/>
            <h1 className={`text-8xl font-bold mb-5 ${theme==='light' ? `text-red-200` : `text-blue-900`}`}>Todo</h1>
            <div className={`border-2  rounded-sm mb-4 ${theme==='light' ? `border-red-200 bg-white` : `border-blue-400 bg-gray-700`}`}>
            <Header
              handleAdd={handleAdd}
            />
            <ContentList
              jobs={jobs}
              handleDone={handleDone}
              handleDelete={handleDelete}
            />
            </div>
            
        </div>
      </ThemeProvider>
    )
}