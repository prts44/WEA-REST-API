// get all exercises (done)
// get exercise by name (sort of done)
//    edit data.js to store the names of all exercises as "ids" (all lowercase and no spaces)
// get exercises by type
// get exercises by major muscles
// get exercises by compound
// get exercises by warmup required

import express from "express";
const app = express();
const { PORT = 4000} = process.env;
import bodyParser from "body-parser";
import cors from "cors";
import data from "./exer.js";

app.use(bodyParser.json()).use(cors());

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

app.get("/api/exercises/MajorMuscle/:muscle", (req, res) => {
    const muscle = req.params.muscle;
    let exercises = data.exercises; 
    exercises = exercises.filter((doc) => doc.MajorMuscle.includes(muscle));
    if (!exercises) {
        console.log(exercise);
        res.status(404).json({error: "Could not find any exercises for this muscle"});
    }
    return res.json(exercises);
}); 

app.listen(PORT, () => 
    console.log(`Listening on http://localhost:${PORT}/`)
);