const data = {exercises: [
        {
            "name": "arnoldpress",
            "Exercise": "Arnold Press",
            "Exercise Type": "Weight",
            "MajorMuscle": ["Shoulders"],
            "MinorMuscle": ["Bicep"],
            "Compound": "yes",
            "Warmup": "no"
        },
        {
            "name": "bicepcurl",
            "Exercise": "Bicep Curl",
            "Exercise Type": "Weight",
            "Exercise Type": "Machine",
            "MajorMuscle": ["Arms"],
            "MinorMuscle": ["Bicep"],
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "name": "bicyclecrunch",
            "Exercise": "Bicycle Crunch",
            "Exercise Type": "Weight",
            "MajorMuscle": ["Core"],
            "MinorMuscle": [],
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Bounds",
            "Exercise Type": "Cardio",
            "Exercise Type": "Laps",
            "MajorMuscle": ["Full Body", "Legs"], 
            "MinorMuscle": ["Outer Thigh", "Glutes"], 
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Box Jumps",
            "Exercise Type": "Plyo",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "legs"
        },
        {
            "Exercise": "Box Toe Touch",
            "Exercise Type": "Cardio",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Glutes",
            "Compound": "no",
            "Warmup": "legs"
        },
        {
            "Exercise": "Broad Jump",
            "Exercise Type": "Plyo",
            "Exercise Type": "Laps",
            "Exercise Type": "Cardio",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Glutes",
            "Compound": "no",
            "Warmup": "legs"
        },
        {
            "Exercise": "Bulgarian Split Squat",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Hamstrings",
            "MinorMuscle": "Quads",
            "Compound": "yes",
            "Warmup": "no"
        },
        {
            "Exercise": "Burpee",
            "Exercise Type": "Plyo",
            "MajorMuscle": "Full", 
            "MajorMuscle": "Body",
            "MinorMuscle": "none",
            "Compound": "yes",
            "Warmup": "l"
        },
        {
            "Exercise": "Burpee Broad Jump",
            "Exercise Type": "Plyo", 
            "Exercise Type": "Laps",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "legs"
        },
        {
            "Exercise": "Butt Kickers",
            "Exercise Type": "Cardio",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Glutes",
            "Compound": "no",
            "Warmup": "legs"
        },
        {
            "Exercise": "Calf Raise",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Calves",
            "Compound": "no",
            "Warmup": "legs"
        },
        {
            "Exercise": "Chest Press",
            "Exercise Type": "Weight",
            "MajorMuscle": "Arms",
            "MinorMuscle": "Ches",
            "Compound": "yes",
            "Warmup": "no"
        },
        {
            "Exercise": "Close to Wide Grip Burnout",
            "Exercise Type": "Weight",
            "MajorMuscle": "Arms",
            "MinorMuscle": "Bicep",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Compass Jump",
            "Exercise Type": "Cardio",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Crab Crawl",
            "Exercise Type": "Cardio", 
            "Exercise Type": "Laps",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Curtsey Lunges",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Inner Thigh",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Deficit Squat",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Glutes",
            "Compound": "yes",
            "Warmup": "legs"
        },
        {
            "Exercise": "Donkey Kick",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Glutes",
            "Compound": "no",
            "Warmup": "legs"
        },
        {
            "Exercise": "Fire Hydrant",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Glutes",
            "Compound": "no",
            "Warmup": "legs"
        },
        {
            "Exercise": "Flutter Kick",
            "Exercise Type": "Weight",
            "MajorMuscle": "Core",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Frogger",
            "Exercise Type": "Plyo",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Glute Bridge",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Glutes",
            "Compound": "no",
            "Warmup": "legs"
        },
        {
            "Exercise": "Glute Bridge March",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Hamstrings",
            "Compound": "no",
            "Warmup": "legs"
        },
        {
            "Exercise": "Goblet Squat",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Glutes", 
            "MinorMuscle": "Quads",
            "Compound": "yes",
            "Warmup": "no"
        },
        {
            "Exercise": "Halo",
            "Exercise Type": "Weight",
            "MajorMuscle": "Arms", 
            "MajorMuscle": "Shoulders",
            "MinorMuscle": "Tricep",
            "Compound": "yes",
            "Warmup": "no"
        },
        {
            "Exercise": "Heart Pump",
            "Exercise Type": "Weight",
            "MajorMuscle": "Arms",
            "MinorMuscle": "Bicep", 
            "MinorMuscle": "Chest",
            "Compound": "no",
            "Warmup": "push"
        },
        {
            "Exercise": "High Knees",
            "Exercise Type": "Cardio",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "fullbody"
        },
        {
            "Exercise": "Jump Lunges",
            "Exercise Type": "Plyo", 
            "Exercise Type": "Cardio",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Glutes", 
            "MinorMuscle": "Quads",
            "Compound": "no",
            "Warmup": "legs"
        },
        {
            "Exercise": "Jump Rope",
            "Exercise Type": "Cardio",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "fullbody"
        },
        {
            "Exercise": "Jumping Jack Push Press",
            "Exercise Type": "Plyo",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "no,ne",
            "Compound": "no",
            "Warmup": "fullbody"
        },
        {
            "Exercise": "Jumping Jacks",
            "Exercise Type": "Cardio",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "fullbody"
        },
        {
            "Exercise": "Kettlebell Swing",
            "Exercise Type": "Cardio", 
            "Exercise Type": "Weight",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "yes",
            "Warmup": "no"
        },
        {
            "Exercise": "Knee Drive",
            "Exercise Type": "Plyo",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "fullbody"
        },    
        {
            "Exercise": "Lateral Band Walk",
            "Exercise Type": "Cardio", 
            "Exercise Type": "Laps",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Outer Thigh",
            "Compound": "no",
            "Warmup": "legs"
        },  
        {
            "Exercise": "Leg Pull Apart",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MajorMuscle": "Back",
            "MinorMuscle": "Outer Thigh",
            "Compound": "no",
            "Warmup": "legs",
        },
        {
            "Exercise": "Leg Raise",
            "Exercise Type": "Weight",
            "MajorMuscle": "Core",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "legs"
        },
        {
            "Exercise": "Literally Just Jumping",
            "Exercise Type": "Plyo",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "Calves", 
            "MinorMuscle": "Glutes",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Lying Leg Raises",
            "Exercise Type": "Weight",
            "MajorMuscle": "Core",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "legs"
        },
        {
            "Exercise": "Military Plank",
            "Exercise Type": "Plyo",
            "MajorMuscle": "Full Body", 
            "MajorMuscle": "Shoulders",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Monkey Jump",
            "Exercise Type": "Plyo", 
            "Exercise Type": "Cardio",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Mountain Climbers",
            "Exercise Type": "Cardio",
            "MajorMuscle": "Core", 
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Plank",
            "Exercise Type": "Weight",
            "MajorMuscle": "Full Body", 
            "MajorMuscle": "Core",
            "MinorMuscle": "Chest",
            "Compound": "no",
            "Warmup": "yes"
        },
        {
            "Exercise": "Plank Jack",
            "Exercise Type": "Cardio",
            "MajorMuscle": "Full Body", 
            "MajorMuscle": "Core",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Plank Row",
            "Exercise Type": "Weight",
            "MajorMuscle": "Full Body", 
            "MajorMuscle": "Back",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Pushup",
            "Exercise Type": "Weight",
            "MajorMuscle": "Arms",
            "MinorMuscle": "Chest",
            "Compound": "no",
            "Warmup": "push"
        },
        {
            "Exercise": "Pushup Walk",
            "Exercise Type": "Weight",
            "MajorMuscle": "Arms",
            "MinorMuscle": "Chest",
            "Compound": "no",
            "Warmup": "push"
        },
        {
            "Exercise": "Reverse Crunches",
            "Exercise Type": "Weight",
            "MajorMuscle": "Core",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Row",
            "Exercise Type": "Weight",
            "MajorMuscle": "Back",
            "MinorMuscle": "none",
            "Compound": "yes",
            "Warmup": "no"
        },
        {
            "Exercise": "Russian Twist",
            "Exercise Type": "Weight",
            "MajorMuscle": "Core",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Seal Jacks",
            "Exercise Type": "Cardio",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Shoulder Press",
            "Exercise Type": "Weight",
            "MajorMuscle": "Shoulders",
            "MinorMuscle": "Tricep",
            "Compound": "yes",
            "Warmup": "no"
        },
        {
            "Exercise": "Side Arm / Lateral Raise",
            "Exercise Type": "Weight",
            "MajorMuscle": "Shoulders",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Side Lunge",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Outer Thigh",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Side Plank",
            "Exercise Type": "Weight",
            "MajorMuscle": "Full Body", 
            "MajorMuscle": "Core",
            "MinorMuscle": "Oblique",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Side Plank Dips",
            "Exercise Type": "Weight",
            "MajorMuscle": "Core",
            "MinorMuscle": "Oblique",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Side Plank with Leg Lift",
            "Exercise Type": "Weight",
            "MajorMuscle": "Core",
            "MinorMuscle": "Oblique",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Single Arm Clean and Press",
            "Exercise Type": "Weight",
            "MajorMuscle": "Full Body", 
            "MajorMuscle": "Arms", 
            "MajorMuscle": "Shoulders",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Single Leg Hip Bridge",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Hamstrings",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Single Leg Squat",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Glutes", 
            "MinorMuscle":"Quads",
            "Compound": "no",
            "Warmup": "legs"
        },
        {
            "Exercise": "Situp and Throw",
            "Exercise Type": "Weight",
            "MajorMuscle": "Core",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Skaters",
            "Exercise Type": "Cardio",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Outer Thigh",
            "Compound": "no",
            "Warmup": "fullbody"
        },
        {
            "Exercise": "Skipping",
            "Exercise Type": "Cardio", 
            "Exercise Type": "Laps",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "fullbody"
        },
        {
            "Exercise": "Skull Crusher",
            "Exercise Type": "Weight",
            "MajorMuscle": "Arms",
            "MinorMuscle": "Tricep",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Spiderman Pushup",
            "Exercise Type": "Weight",
            "MajorMuscle": "Arms", 
            "MajorMuscle": "Core",
            "MinorMuscle": "Chest", 
            "MinorMuscle": "Oblique",
            "Compound": "no",
            "Warmup": "fullbody"
        },
        {
            "Exercise": "Squat",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Quads", 
            "MinorMuscle": "Glutes",
            "Compound": "yes",
            "Warmup": "no"
        },
        {
            "Exercise": "Squat Jump",
            "Exercise Type": "Plyo", 
            "Exercise Type": "Cardio",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Quads",
            "Compound": "no",
            "Warmup": "fullbody"
        },
        {
            "Exercise": "Squat Jumps 180",
            "Exercise Type": "Plyo",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Squat to Lateral Leg Lift",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Quads", 
            "MinorMuscle": "Outer Thigh",
            "Compound": "no",
            "Warmup": "fullbody"
        },
        {
            "Exercise": "Standing Glute Kickbaks",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Glutes",
            "Compound": "no",
            "Warmup": "legs"
        },
        {
            "Exercise": "Standing Leg Lift",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Inner Thigh", 
            "MinorMuscle": "Outer Thigh", 
            "MinorMuscle": "Glutes",
            "Compound": "no",
            "Warmup": "legs"
        },
        {
            "Exercise": "Standing Oblique Crunch",
            "Exercise Type": "Weight",
            "MajorMuscle": "Core",
            "MinorMuscle": "Oblique",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Star Jump",
            "Exercise Type": "Plyo",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "yes"
        },
        {
            "Exercise": "Step Up Lunges",
            "Exercise Type": "Plyo",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Glutes",
            "Compound": "no",
            "Warmup": "fullbody"
        },
        {
            "Exercise": "Step-Back Lunge",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Glutes",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Straightup Situp",
            "Exercise Type": "Weight",
            "MajorMuscle": "Core",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Sumo Squat",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Inner Thigh", 
            "MinorMuscle": "Outer Thigh",
            "Compound": "yes",
            "Warmup": "legs"
        },
        {
            "Exercise": "Superman",
            "Exercise Type": "Weight",
            "MajorMuscle": "Back",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Touchdown",
            "Exercise Type": "Plyo",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "yes"
        },
        {
            "Exercise": "Tricep Dip",
            "Exercise Type": "Weight",
            "MajorMuscle": "Arms",
            "MinorMuscle": "Tricep",
            "Compound": "no",
            "Warmup": "no"
        },
        {
            "Exercise": "Tricep Kick-Back",
            "Exercise Type": "Weight",
            "MajorMuscle": "Arms",
            "MinorMuscle": "Tricep",
            "Compound": "no",
            "Warmup": "no",
        },
        {
            "Exercise": "Tricep Overhead Press",
            "Exercise Type": "Weight",
            "MajorMuscle": "Arms",
            "MinorMuscle": "Tricep",
            "Compound": "no",
            "Warmup": "no",
        },
        {
            "Exercise": "Tuck Jump",
            "Exercise Type": "Plyo",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no",
        },
        {
            "Exercise": "Twisted Mountain Climbers",
            "Exercise Type": "Cardio",
            "MajorMuscle": "Full Body", 
            "MajorMuscle": "Core",
            "MinorMuscle": "Oblique",
            "Compound": "no",
            "Warmup": "no",
        },
        {
            "Exercise": "Wall Ball",
            "Exercise Type": "Cardio",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "fullbody",
        },
        {
            "Exercise": "Weighted Jumping Jacks",
            "Exercise Type": "Cardio",
            "MajorMuscle": "Full Body",
            "MinorMuscle": "none",
            "Compound": "yes",
            "Warmup": "no",
        },
        {
            "Exercise": "Weighted Punches",
            "Exercise Type": "Cardio",
            "MajorMuscle": "Core",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no",
        },
        {
            "Exercise": "Deadbug",
            "Exercise Type": "Weight",
            "MajorMuscle": "Core",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no",
        },
        {
            "Exercise": "Flat Barbell Bench Press",
            "Exercise Type": "Weight",
            "MajorMuscle": "Chest",
            "MinorMuscle": "Middle Chest, Tricep",
            "Compound": "yes",
            "Warmup": "no",
        },
        {
            "Exercise": "Incline Barbell Bench Press",
            "Exercise Type": "Weight",
            "MajorMuscle": "Chest",
            "MinorMuscle": "Upper Chest", 
            "MinorMuscle": "Tricep",
            "Compound": "yes",
            "Warmup": "no",
        },
        {
            "Exercise": "Chest Dips",
            "Exercise Type": "Weight",
            "MajorMuscle": "Chest",
            "MinorMuscle": "Lower Chest", 
            "MinorMuscle": "Tricep",
            "Compound": "no",
            "Warmup": "push",
        },
        {
            "Exercise": "Chest Cable Flyes",
            "Exercise Type": "Weight",
            "MajorMuscle": "Chest",
            "MinorMuscle": "none",
            "Compound": "no",
            "Warmup": "no",
        },
        {
            "Exercise": "Flat Dumbbell Bench Press",
            "Exercise Type": "Weight",
            "MajorMuscle": "Chest",
            "MinorMuscle": "Tricep", 
            "MinorMuscle": "Middle Chest",
            "Compound": "yes",
            "Warmup": "no",
        },
        {
            "Exercise": "Incline Dumbbell Bench Press",
            "Exercise Type": "Weight",
            "MajorMuscle": "Chest",
            "MinorMuscle": "Tricep", 
            "MinorMuscle": "Upper Chest",
            "Compound": "yes",
            "Warmup": "no",
        },
        {
            "Exercise": "Deadlift",
            "Exercise Type": "Weight",
            "MajorMuscle": "Legs",
            "MinorMuscle": "Glutes", 
            "MinorMuscle": "Hamstrings",
            "Compound": "yes",
            "Warmup": "no",
        },
        {
            "Exercise": "Deadlift ",
            "Exercise Type": "Weight",
            "MajorMuscle": "Back",
            "MinorMuscle": "Glutes", 
            "MinorMuscle": "Hamstrings",
            "Compound": "yes",
            "Warmup": "no",
        },
        {
            "Exercise": "Lat Pulldown",
            "Exercise Type": "Weight",
            "MajorMuscle": "Back",
            "MinorMuscle": "Lats", 
            "MinorMuscle": "Bicep",
            "Compound": "yes",
            "Warmup": "no",
        },
        {
            "Exercise": "Single Arm Dumbbell Row",
            "Exercise Type": "Weight",
            "MajorMuscle": "Back",
            "MinorMuscle": "Lats", 
            "MinorMuscle": "Bicep",
            "Compound": "yes",
            "Warmup": "no",
        },
        {
            "Exercise": "Pull ups",
            "Exercise Type": "Weight",
            "MajorMuscle": "Back",
            "MinorMuscle": "Bicep, Lats",
            "Compound": "yes",
            "Warmup": "pull",
        },
        {
            "Exercise": "Chin Ups",
            "Exercise Type": "Weight",
            "MajorMuscle": "Back",
            "MinorMuscle": "Bicep", 
            "MinorMuscle": "Lats",
            "Compound": "yes",
            "Warmup": "pull",
        },
        {
            "Exercise": "Tricep Rope Pulldown",
            "Exercise Type": "Weight",
            "MajorMuscle": "Arms",
            "MinorMuscle": "Tricep",
            "Compound": "no",
            "Warmup": "no",
        },
        {
            "Exercise": "Bicep Cable Rope Curl",
            "Exercise Type": "Weight",
            "MajorMuscle": "Arms",
            "MinorMuscle": "Bicep",
            "Compound": "no",
            "Warmup": "no",
        },
        {
            "Exercise": "Hammer Curl",    
            "Exercise Type": "Weight",
            "MajorMuscle": "Arms",
            "MinorMuscle": "Bicep",
            "Compound": "no",
            "Warmup": "no"
        },
]};

export default data;