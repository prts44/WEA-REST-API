// get all exercises (done)
// get exercise by name
// get exercises by type
// get exercises by major muscles
// get exercises by compound
// get exercises by warmup required

import express from "express";
const app = express();
const { PORT = 4000} = process.env;
//import bodyParser from "body-parser";
//import cors from "cors";
import data from "./exer.js";

app.get("/api/exercises", (req, res) => {
    res.json(data.exercises);
});

app.get("/api/exercises/:name", (req, res) => {
    const name = req.params.name;
    const exercise = data.exercises.find((doc) => doc.name === name);
    if (!exercise) {
        console.log(exercise);
        res.status(404).json({error: "Could not find exercise"});
    }
    return res.json(exercise);
});

app.listen(PORT, () => 
    console.log(`Listening on http://localhost:${PORT}/`)
);