
import { connectDB } from "../_db.js";
import Job from "../models/Job.js";

export default async function handler(req, res) {
  await connectDB();

  const { id } = req.query || {};

  if (!id) {
    return res.status(400).json({ message: "Missing id" });
  }

  if (req.method === "DELETE") {
    try {
      await Job.findByIdAndDelete(id);
      return res.status(200).json({ message: "Job deleted" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  res.setHeader("Allow", ["DELETE"]);
  return res.status(405).json({ message: "Method Not Allowed" });
}
