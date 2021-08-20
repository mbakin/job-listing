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
      <h1 className="text-4xl text-yellow-500">Hello User!</h1>
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
