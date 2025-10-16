
# Spaceship Bridge Simulator & Mission Creator

Welcome to the Spaceship Bridge Simulator, an interactive, web-based game that puts you and your friends in command of a starship. This project features a fully playable bridge simulator and a powerful, user-friendly Mission Creator that allows anyone to design their own narrative-driven adventures.

This project is designed to be an educational tool for middle school students (grades 5-8), teaching concepts of game design, narrative structure, and collaborative problem-solving in a fun and engaging way.

## Key Features

-   **Multi-Station Gameplay:** Manage five unique bridge stations: Comms, Tactical, Engineering, Science, and Trade.
    
-   **Dynamic Mission System:** Load custom-built missions created with the visual editor.
    
-   **Visual Mission Creator:** An intuitive, web-based tool that allows users to build complex missions with a simple point-and-click interface. No coding required!
    
-   **AI-Powered "Free Play" Mode:** Generate a brand-new, unique mission on the fly with a single click, providing endless replayability.
    
-   **Rich Event System:** Create missions with dialogue, branching player choices, enemy encounters, system damage, video playback, and timed events.
    
-   **Interactive Notifications:** A glowing notification system guides players to the action, ensuring they never miss a critical event.
    

## How to Play the Simulator

1.  Open the `index.html` file in your web browser.
    
2.  **Load a Mission:** Click the "Load Mission" button and select a mission file (e.g., `new_ship_diagnostics.js`) from the `missions` folder.
    
3.  **Free Play:** Alternatively, click the "Free Play" button to have the AI generate a random mission for you.
    
4.  **Command the Ship:** As the mission progresses, use the navigation icons on the left to switch between stations and respond to events. Work as a team to overcome challenges!
    

## How to Create Missions

The Mission Creator allows you to design your own stories without writing any code.

1.  Open the `Bridge Simulator Mission Creator.html` file in your browser.
    
2.  **Name Your Mission:** Give your adventure a title in the "Mission Details" panel.
    
3.  **Add Events:** Use the "Add Event" panel to build your story step-by-step. Choose from dialogue, combat, player choices, and more.
    
4.  **Build Your Timeline:** Each event you add will appear on the timeline on the right. The story plays from left to right.
    
5.  **Export:** When you're done, click the "Export Mission File" button. This will save a `.js` file to your computer.
    
6.  **Play:** Move the exported file into the `missions` folder and load it in the main game!
    

## Technology Stack

-   **Frontend:** HTML5, CSS3, JavaScript
    
-   **3D Graphics:** Three.js
    
-   **Styling:** Tailwind CSS
    
-   **AI Mission Generation:** Google's Generative AI
    

This project is fully self-contained in three HTML files and requires no backend or server to run.
