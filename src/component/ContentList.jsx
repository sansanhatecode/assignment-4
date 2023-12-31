import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ContentList(props) {
  const { 
    jobs,
    handleDone,
    handleDelete,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <div className="bg-white">
      <ul>
        {jobs.map((job, index) => {
          return (
            <div className={`flex gap-4 pl-4 border-b-2 last:border-none items-center ${theme === "light" ? `border-red-200 bg-white` : `border-blue-400 bg-gray-700`}`}>
              {/* done button */}
              <button 
                onClick={(e) => handleDone(e, job.id)}
                className={`
                        border-2 w-8 h-8 rounded-full 
                        ${job.done ? `border-green-400` : ``}
                        ${theme === "light" ? `border-gray-200` : ``}
                        ${theme === "dark" && !job.done ? `border-gray-600` : ``}
                        `}
              >
                <i className={`
                        fa-solid fa-check
                        text-green-400
                        ${job.done ? `` : `hidden`}
                        `}>
                </i>
              </button>

              <li
                key={index}
                className={`py-3 tracking-wider text-xl flex w-full group relative ${theme === "light" ? `` : `text-white`}`}
              >
                <p className={`${job.done ? `text-gray-300 line-through` : ``} 
                                        ${theme === "light" ? `text-gray-300` : ``}
                                        ${theme === "dark" ? `text-gray-600` : ``}`}
                >{job.name}
                </p>

                {/* edit button */}
                <button
                  id={index}
                  // onClick={(e) => handleEdit(e, job.id)}
                  className={`w-8 pr-4 hidden  group-hover:block  absolute right-10
                                    ${theme === "light" ? `text-red-200 hover:text-red-400` : `text-blue-400 hover:text-blue-800`}`}
                >
                  <i class="fa-solid fa-pencil text-base"></i>
                </button>

                {/* delete button */}
                <button
                  onClick={(e) => handleDelete(e, job.id)}
                  className={`w-8 pr-4 hidden group-hover:block absolute right-1
                                    ${theme === "light" ? `text-red-200 hover:text-red-400` : `text-blue-400 hover:text-blue-800`}
                        `}
                >
                  <i className="fa-solid fa-trash text-base"></i>
                </button>
              </li>

            </div>
          )
        }
        )}
      </ul>
    </div>
  )
}