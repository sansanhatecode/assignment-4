import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header(props) {
  const [currentJob, setCurrentJob] = useState('');
  const {jobs, handleAdd} = props;
  const theme = useContext(ThemeContext)

  // Focus vao the input
  function focusInput() {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  const onChangeInput = (e) => {
    const { value } = e.target;
    setCurrentJob(value);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const addItem = currentJob;
      handleAdd(addItem);
      setCurrentJob('');
    }
  }
  
  // let jobsCheck = jobs;
  // //kiểm tra xem có phải tất cả các công việc đều đã được làm xong hay chưa?
  // const isNotDone = jobsCheck.some(job => !(job.done))

  return (
    <div className={`flex gap-4 items-center  border-b-2  pl-4 ${theme === "light" ? `border-red-200 bg-white` : `border-blue-400 bg-gray-700`}`}>
      <button
        className={`w-8 h-8 text-xl text-gray-200`}
        // onClick={handleDownButtonClick}
      >
        {/* <i className={`fa-solid fa-chevron-down ${isNotDone ? `text-gray-200}` : 'text-gray-500'}`}></i> */}
      </button>
      <input
        className={`  ${theme === "light" ? `border-red-200 bg-white placeholder:text-gray-300` : `border-blue-400 bg-gray-700 placeholder:text-gray-500`}
                        py-4 w-[500px] rounded-t-lg  focus:outline-none text-2xl
                         placeholder:italic `}
        type="text"
        value={currentJob}
        placeholder="What needs to be done?"
        onChange={onChangeInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
