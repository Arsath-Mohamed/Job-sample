
import { connectDB } from "../_db.js";
import Job from "../models/Job.js";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const jobs = await Job.find();
      return res.status(200).json(jobs);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  if (req.method === "POST") {
    const { company, position, status, notes } = req.body || {};
    if (!company || !position) {
      return res.status(400).json({ message: "company and position are required" });
    }
    try {
      const job = await Job.create({ company, position, status, notes });
      return res.status(201).json(job);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ message: "Method Not Allowed" });
}
