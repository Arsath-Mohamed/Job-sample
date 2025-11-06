import React, { useState } from "react";
import api from "../api/api";

function JobForm({ onAdd }) {
  const [form, setForm] = useState({
    company: "",
    position: "",
    status: "Applied",
    notes: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/jobs", form);
    onAdd(); // reload the job list
    setForm({ company: "", position: "", status: "Applied", notes: "" });
  };

  return (
    <form  className="job-form" onSubmit={handleSubmit}>
      <input name="company" placeholder="Company" value={form.company} onChange={handleChange} required />
      <input name="position" placeholder="Position" value={form.position} onChange={handleChange} required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <textarea name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />
      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;
