import React, { useState, useEffect } from "react";
import JobBoards from "./components/JobBoards";
import data from "./assets/data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterHandler = ({ role, level, languages, tools }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (languages) {
      tags.push(...languages);
    }

    if (tools) {
      tags.push(...tools);
    }

    return filters.every(filter => tags.includes(filter))
  };

  const handleTagClick = (tag) => {
    if(filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter(event => event !== passedFilter ))
  }

  const clearFilters = () => {
    setFilters([])
  }

  const filteredJobs = jobs.filter(filterHandler);

  return (
    <div className="App">
      <header className="bg-indigo-50  mb-12">
        <img
          className="w-full"
          src="./images/bg-header-desktop.svg"
          alt="bg-header"
        />
      </header>
        {filters.length > 0 && (
          <div className={`flex bg-white w-4/5 mx-auto -my-20  mb-16 shadow-md p-6 rounded relative z-10`}>
            {filters.map((filter) => (
              <span
                className="cursor-pointer rounded p-2 mr-4 font-bold bg-indigo-50 hover:bg-green-50 text-pink-500 lg:mb-0"
                onClick={() => handleFilterClick(filter)}>
                  {filter} ×
              </span> 
            ))}
            <button onClick={clearFilters} className="font-bold text-gray-800 hover:text-gray-400 ml-auto">Clear</button>
          </div> 

      )}
      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        filteredJobs.map((job) => (
          <JobBoards key={job.id} job={job} handleTagClick={handleTagClick} />
        ))
      )}
    </div>
  );
}

export default App;
