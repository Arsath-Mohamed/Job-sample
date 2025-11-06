import React from "react";

function JobCard({ job, onDelete }) {
  return (
    <div className="job-card">
      <h3>{job.position} - {job.company}</h3>
      <p>Status: {job.status}</p>
      <p>Notes: {job.notes}</p>
      <button onClick={() => onDelete(job._id)}>Delete</button>
    </div>
  );
}

export default JobCard;
