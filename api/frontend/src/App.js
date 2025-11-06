import React, { useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import './App.css'

function App() {
  const [reload, setReload] = useState(false); // toggle to reload JobList

  return (
    <div className="app-container">
      <h1>Job Application Tracker</h1>
      <JobForm onAdd={() => setReload(!reload)} />
      <JobList key={reload} />
    </div>
  );
}

export default App;
