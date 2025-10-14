window.currentLoadedMission = {
    title: "The Source",
    comicUnlock: "crystalline_mission_3_complete",
    events: [
        { type: "sound", src: "Sounds/ambient-soundscapes-007-space-atmosphere-304974.mp3", loop: true },
        { type: "dialogue", speaker: "CAPTAIN", message: "Alright team, we've tracked the crystalline energy trail this far. The readings are off the charts." },
        { type: "dialogue", speaker: "SCIENCE OFFICER", message: "Captain, I'm detecting a massive object emerging from subspace... directly ahead!" },
        { type: "wait", duration: 3000 },
        { type: "set_objective", message: "Survive the encounter!" },
        { type: "sound", src: "Sounds/boss_battle_music.mp3", loop: true }, // Placeholder path
        
        { type: "spawn_enemy", name: "Crystalline Escort", hull: 100, weakness: "phasers" },
        { type: "spawn_enemy", name: "Crystalline Mothership", hull: 800, weakness: "torpedoes" },
        { type: "spawn_enemy", name: "Crystalline Escort", hull: 100, weakness: "phasers" },

        { type: "dialogue", speaker: "WEAPONS OFFICER", message: "It's huge! And it's launching escorts! All weapons are hot!" },
        { type: "dialogue", speaker: "ENGINEER", message: "Diverting all available power. This is going to be a tough fight!" },
        
        { type: "clear_objective" },
        { type: "set_objective", message: "Destroy the Crystalline Mothership." },
        
        // --- Combat Loop ---
        { type: "label", name: "boss_combat_loop" },
        { type: "wait", duration: 15000 }, // Every 15 seconds, the mothership does something
        
        // Special Attack: System Damage
        { type: "dialogue", speaker: "MOTHERSHIP", message: "INTRUDERS DETECTED. PURGING..." },
        { 
            type: "system_damage", 
            system: "shields", // This could be randomized in a more advanced version
            message: "The mothership unleashed an energy surge! Our shield emitters are fried!" 
        },
        
        { type: "jump", target: "boss_combat_loop", condition: { type: "enemies_exist" } },
        // --- End of Combat Loop ---
        
        { type: "stop_sound", src: "Sounds/boss_battle_music.mp3" }, // Placeholder path
        { type: "sound", src: "Sounds/victory_music.mp3", loop: false }, // Placeholder path

        { type: "dialogue", speaker: "WEAPONS OFFICER", message: "The mothership is breaking apart! All hostile contacts eliminated!" },
        { type: "dialogue", speaker: "CAPTAIN", message: "Excellent work, team. You faced an unknown threat and came out on top. Let's head home." },
        
        { type: "clear_objective" },
        { type: "wait", duration: 4000 },

        { 
            type: "end_mission", 
            title: "VICTORY", 
            message: "You have successfully neutralized the Crystalline threat and unlocked the final comic panel!" 
        }
    ]
};
