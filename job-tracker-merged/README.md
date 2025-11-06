
# Job Tracker — Vercel One-Project Setup

This folder is ready to deploy **frontend + serverless backend** on **one Vercel project**.

## What you need to do (super short)

1. Put your existing React app into the `frontend/` folder (replace the placeholder).
2. On Vercel, add an environment variable:
   - **MONGO_URI** = your MongoDB connection string (or MONGODB_URI also works)
3. Connect this repo to Vercel and deploy. Done ✅

---

## API (serverless)

- `GET   /api/jobs` — list all jobs
- `POST  /api/jobs` — create a job (`{ company, position, status, notes }`)
- `DELETE /api/jobs/:id` — delete a job by id

The functions are in `api/jobs`. They use a shared DB connector in `api/_db.js` and a Mongoose model in `api/models/Job.js`.

---

## Frontend

Put your own React app into `frontend/`. Vercel will run:
```
cd frontend && npm install && npm run build
```
So make sure your `frontend/package.json` has a valid `build` script.

---

## Local dev (optional)

You can test API locally with Node 18+ by using Vercel CLI, or just deploy and call the endpoints on your Vercel URL.
