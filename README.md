
# Spaceship Bridge Simulator

Welcome to the Spaceship Bridge Simulator, an interactive, web-based game designed for students to experience the thrill of commanding a starship. This project was created to provide a fun, engaging platform for learning about teamwork, problem-solving, and basic coding concepts in a dynamic sci-fi setting.

## About the Project

This simulator puts a single player in command of the three primary stations of a starship: Comms, Science, Engineering, and Weapons. The player's goal is to navigate through story-driven missions, responding to crises, managing ship resources, and defending the ship from various threats.

This project was created as an educational tool for 7th and 8th-grade students. The core goal is to create an exciting environment that encourages critical thinking and introduces the fundamentals of scripting and logic through its mission creation system. By designing their own stories, students can learn the basics of JavaScript objects, arrays, and event-driven programming.

### How to Play

1.  **Download the Repository:** Download all the project files (`index.html`, `missions.js`, etc.) to a single folder on your computer.
    
2.  **Open the Simulator:** Open the `index.html` file in a web browser like Chrome or Firefox.
    
3.  **Load a Mission:** On the setup screen, click the "Choose File" button and select a mission file (e.g., `training_mission.js`).
    
4.  **Engage:** Click the "Engage" button to start the simulation!
    

## Creating Your Own Missions

You can be the director of your own space adventure! Making a mission is all about writing a simple script using a language called JavaScript. The guide below explains every tool you have to build your story.

### What is a Mission File?

A mission file is a plain text file that ends in `.js`. Inside, we create a "script" which is just one big JavaScript object. Think of an object as a container with labels. Our main container has a `title` for the mission and `events`, which is a list of all the scenes in our story.

Here’s the basic blueprint:

```
const myMission = {
  title: "My First Mission",
  events: [
    // We'll put all our scenes in here!
  ]
};


```

### Event Types

The `events` list is where the magic happens. Each item is an object that describes one single thing that happens. Here are all the event types you can use:

| | Event Type | Description | Example |
|--|--|--|--|
|1| dialogue | Makes a character speak in the Comms panel. | { type: "dialogue", speaker: "Captain", message: "All hands, battle stations!" } |
|2| wait | Pauses the game for a set amount of time (in milliseconds). | { type: "wait", duration: 3000 } |
|3| spawn_enemy | Creates an enemy ship on the viewscreen. | { type: "spawn_enemy", name: "Pirate Raider", hull: 100, weakness: "phasers" } |
|4|sound | Plays a sound effect or music. Can be looped. | { type: "sound", src: "sounds/music.mp3", loop: true } |
|5|stop_sound | Stops a looping sound that is currently playing. | { type: "stop_sound", src: "sounds/music.mp3" } |
|6|label | Creates a "bookmark" in your mission script that you can jump to. | { type: "label", name: "start_of_fight" } |
|7|jump | Jumps to a label. Can be conditional (e.g., only jump if enemies still exist). | { type: "jump", target: "start_of_fight", condition: { type: "enemies_exist" } } |
|8|choice | Presents the player with a choice that can branch the story. | { type: "choice", prompt: "How do we respond?", options: [ { text: "Attack!", action: "attack_label" } ] } |
|9|anomaly | Creates a scientific anomaly for the Science station to analyze. | { type: "anomaly", name: "Energy Reading", variable: "energy_analyzed" } |
|10|system_damage | Damages a ship system, requiring repairs from the Engineering station. | { type: "system_damage", system: "weapons", message: "Weapons are offline!" } |
|11|set_objective | Displays a primary objective at the top of the Comms panel. | { type: "set_objective", message: "Defeat all pirate ships." } |
|12|clear_objective | Removes the current objective from the display. | { type: "clear_objective" } |
|13| environmental_hazard | Creates a temporary hazard, like an asteroid field or a sensor-jamming nebula. | { type: "environmental_hazard", hazard_type: "nebula", duration: 30000, message: "a nebula" } |
|14|end_mission | Ends the mission and displays a final message. | { type: "end_mission", title: "Victory!", message: "You saved the day!" } |


## Copyright and License

© 2025 Madison Consolidated Junior High. All Rights Reserved.

This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. See the `LICENSE` file for more details.
