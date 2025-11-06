import React, { useEffect, useState } from "react";
import api from "../api/api";
import JobCard from "./JobCard";

function JobList() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await api.get("/jobs");
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const deleteJob = async (id) => {
    await api.delete(`/jobs/${id}`);
    setJobs(jobs.filter(job => job._id !== id));
  };

  return (
    <div>
      {jobs.length === 0 ? (
        <p>No job applications yet.</p>
      ) : (
        jobs.map(job => <JobCard key={job._id} job={job} onDelete={deleteJob} />)
      )}
    </div>
  );
}

export default JobList;
