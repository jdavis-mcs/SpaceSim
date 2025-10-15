window.currentLoadedMission = {
    title: "The Hunt",
    comicUnlock: "crystalline_mission_2_complete", // Unlocks the second comic panel
    events: [
        { type: "photo", src: "https://i.ibb.co/HL0mnW3T/TEST-IMAGE.png"},
        { type: "sound", src: "Sounds/ambient-soundscapes-007-space-atmosphere-304974.mp3", loop: true },
        { type: "dialogue", speaker: "CAPTAIN", message: "Good work on that first encounter. Science team, have you been able to analyze the energy trail from those ships?" },
        { type: "dialogue", speaker: "SCIENCE OFFICER", message: "Yes, Captain. The trail is faint, but I'm projecting its course now. It leads directly into that plasma nebula ahead." },
        { type: "dialogue", speaker: "WEAPONS OFFICER", message: "A nebula? Perfect cover for an ambush. I've got a bad feeling about this." },
        { type: "wait", duration: 3000 },

        { type: "set_objective", message: "Navigate the nebula and find the crystalline ships." },
        { 
            type: "environmental_hazard", 
            hazard_type: "nebula", 
            duration: 25000, // Nebula lasts for 25 seconds
            message: "a plasma nebula" 
        },
        
        { type: "wait", duration: 5000 },
        { type: "dialogue", speaker: "ENGINEER", message: "The plasma is causing interference across all systems. It's tough to hold us steady." },
        { type: "wait", duration: 10000 },
        
        { type: "dialogue", speaker: "SCIENCE OFFICER", message: "Multiple contacts emerging from the nebula! They were using it to hide!" },
        { type: "spawn_enemy", name: "Crystalline Shard", hull: 80, weakness: "phasers" },
        { type: "spawn_enemy", name: "Crystalline Hunter", hull: 150, weakness: "torpedoes" },
        { type: "spawn_enemy", name: "Crystalline Shard", hull: 80, weakness: "phasers" },
        { type: "spawn_enemy", name: "Crystalline Hunter", hull: 150, weakness: "torpedoes" },
        
        { type: "clear_objective" },
        { type: "set_objective", message: "Destroy all crystalline ships." },

        // --- Combat Loop ---
        { type: "label", name: "nebula_combat_loop" },
        { type: "wait", duration: 3000 },
        { type: "jump", target: "nebula_combat_loop", condition: { type: "enemies_exist" } },
        // --- End of Combat Loop ---
        
        { type: "dialogue", speaker: "WEAPONS OFFICER", message: "All hostiles destroyed. We're clear." },
        { type: "dialogue", speaker: "SCIENCE OFFICER", message: "The energy trail is much stronger now, Captain. It seems to be leading out of the nebula. I think we're getting close to the source." },
        
        { type: "clear_objective" },
        { type: "wait", duration: 4000 },

        { 
            type: "end_mission", 
            title: "Mission Complete", 
            message: "You survived the ambush and are one step closer to the source. The next comic panel is now unlocked." 
        }
    ]
};


