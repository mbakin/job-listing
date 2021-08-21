import React, { useState, useEffect } from "react";
import JobBoards from "./components/JobBoards";
import data from './assets/data.json'


function App() {

  const [jobs, setJobs]  = useState([]);

  useEffect(() => {
    setJobs(data)
  }, [])


  return (
    <div className="App">
      <header className="justify-items-center items-center mb-12">
        <img src="./images/bg-header-desktop.svg" alt="bg-header" />
      </header>
      {
        jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          jobs.map(job => (
            <JobBoards key={job.id} job={job}/>
          ))
        )
      }
    </div>
  );
}

export default App;
