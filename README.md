
# Spaceship Bridge Simulator

Welcome to the Spaceship Bridge Simulator! This is a web-based game designed for a solo player to manage the four key stations of a starship: Communications, Weapons, Science, and Engineering. It was created as an educational tool to teach problem-solving, resource management, and basic coding concepts through interactive storytelling.

## Key Features

-   **Multi-Station Gameplay:** Manage four distinct bridge stations, each with unique functions and responsibilities.
    
-   **Dynamic Mission Scripting:** The game is driven by simple JavaScript mission files, allowing for endless new stories and challenges.
    
-   **Full Sound Engine:** Features a robust audio system for background music and sound effects, powered by the Web Audio API.
    
-   **Story Arcs & Webcomics:** Play through multi-part stories and unlock panels of a webcomic as a reward for completing missions.
    
-   **Interactive Events:** Encounter system damage, environmental hazards, moral dilemmas, and scannable anomalies.
    
-   **Fully Responsive UI:** The simulator interface is designed to work on a wide range of devices, from desktop monitors to tablets.
    

## How to Play

Because web browsers have security rules about loading local files (especially audio), you cannot simply open the `index.html` file by double-clicking it. You must run it from a simple web server. This sounds complicated, but it's very easy!

### Running the Simulator Locally

1.  **Install Node.js (A one-time setup):** If you don't have it, download and install the "LTS" version from [nodejs.org](https://nodejs.org/ "null"). This is a standard, safe tool for web development.
    
2.  **Open a Terminal/Command Prompt:**
    
    -   On Windows, open the Start Menu, type `cmd`, and press Enter.
        
    -   On Mac, open Spotlight (Cmd+Space), type `Terminal`, and press Enter.
        
3.  **Navigate to the Project Folder:** Type `cd` followed by a space, then drag and drop your main project folder into the terminal window and press Enter.
    
4.  **Start the Server:** Type the following command and press Enter:
    
    ```
    npx http-server
    
    ```
    
5.  **Play!** The terminal will give you a local web address (like `http://127.0.0.1:8080`). Copy this address, paste it into your web browser, and the simulator will start.
    

### File Structure

-   `index.html`: The core game engine. This file runs the entire simulator.
    
-   `*.js` (e.g., `crystalline_mission_1.js`): These are the mission script files.
    
-   `/Sounds`: This folder contains all the music and sound effect files used by the game.
    

## Creating Your Own Missions

Making a mission is like writing a script for a play or a movie. You create a list of events that happen one after another.

### The Mission File Format

A mission file is a JavaScript (`.js`) file that contains a single object assigned to `window.currentLoadedMission`. This is the required format for the game's loader to work correctly.

```
window.currentLoadedMission = {
    title: "My Awesome Mission",
    comicUnlock: "my_mission_complete", // Optional: ID to unlock a comic panel
    events: [
        // Your list of event objects goes here!
        { type: "dialogue", speaker: "CAPTAIN", message: "Let's begin the mission." },
        { type: "end_mission", title: "Mission Complete", message: "You did it!" }
    ]
};

```

### All Event Types

Here are all the event types you can use in the `events` array:

-   **`dialogue`**: Shows a message in the Comms panel.
    
    -   `speaker`: The name of the person talking.
        
    -   `message`: The text they say.
        
-   **`wait`**: Pauses the mission for a set time.
    
    -   `duration`: Time in milliseconds (e.g., `5000` is 5 seconds).
        
-   **`spawn_enemy`**: Creates an enemy ship.
    
    -   `name`: The enemy's name.
        
    -   `hull`: The enemy's health.
        
    -   `weakness`: (Optional) `"phasers"` or `"torpedoes"`.
        
-   **`choice`**: Presents the player with a choice.
    
    -   `prompt`: The question to ask.
        
    -   `options`: A list of choices, each with `text` (for the button) and `action` (the `label` to jump to).
        
-   **`label`**: An invisible bookmark in your script for `choice` and `jump` events.
    
    -   `name`: The unique name for this label.
        
-   **`jump`**: Jumps to a specific `label`, often based on a condition.
    
    -   `target`: The `name` of the label to go to.
        
    -   `condition`: (Optional) A check that must be true to jump.
        
        -   `type: "enemies_exist"`: Jumps if there are still enemies.
            
        -   `type: "variable_not_set"`: Jumps if an `anomaly` has not been analyzed yet.
            
-   **`sound` & `stop_sound`**: Plays or stops a background music track.
    
    -   `src`: The path to the sound file (e.g., `Sounds/battle_music.mp3`).
        
    -   `loop`: `true` for repeating music, `false` for a one-time sound.
        
-   **`anomaly`**: Creates a science anomaly that must be analyzed.
    
    -   `name`: The name of the anomaly.
        
    -   `variable`: The mission variable that gets set upon completion.
        
-   **`system_damage`**: Damages a ship system, requiring repair.
    
    -   `system`: `"shields"`, `"engines"`, or `"weapons"`.
        
    -   `message`: The alert that appears in Comms.
        
-   **`environmental_hazard`**: Creates a temporary hazard.
    
    -   `hazard_type`: `"asteroid_field"` or `"nebula"`.
        
    -   `duration`: How long it lasts in milliseconds.
        
    -   `message`: A short description for the Comms log.
        
-   **`set_objective` & `clear_objective`**: Displays or removes an objective on screen.
    
    -   `message`: The text of the objective.
        
-   **`end_mission`**: Ends the mission.
    
    -   `title`: The title of the end screen (e.g., "Victory!").
        
    -   `message`: The descriptive text.
        

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)**.

You are free to:

-   **Share** — copy and redistribute the material in any medium or format.
    
-   **Adapt** — remix, transform, and build upon the material.
    

Under the following terms:

-   **Attribution** — You must give appropriate credit.
    
-   **NonCommercial** — You may not use the material for commercial purposes.
    
-   **ShareAlike** — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.
