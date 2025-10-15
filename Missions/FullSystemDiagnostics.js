window.currentLoadedMission = {
    title: "Full System Diagnostic",
    events: [
        { type: "dialogue", speaker: "SIMULATOR", message: "Welcome to the Full System Diagnostic. We will now test all mission event types." },
        { type: "wait", duration: 2000 },
        
        { type: "set_objective", message: "Follow diagnostic instructions." },
        { type: "dialogue", speaker: "SIMULATOR", message: "Objective system test complete." },
        { type: "wait", duration: 2000 },

        { type: "sound", src: "Sounds/ambient-soundscapes-007-space-atmosphere-304974.mp3", loop: true },
        { type: "dialogue", speaker: "SIMULATOR", message: "Sound playback initiated. Now testing photo display." },
        { type: "wait", duration: 2000 },

        { type: "photo", src: "https://i.ibb.co/spHg1xfH/Quantum-Core-Conduit.jpg", caption: "This is a test image display." },
        { type: "dialogue", speaker: "SIMULATOR", message: "Photo display test complete. Spawning training drone." },
        { type: "wait", duration: 2000 },

        { type: "spawn_enemy", name: "Training Drone", hull: 50, weakness: "phasers" },
        { type: "dialogue", speaker: "SIMULATOR", message: "Enemy spawned. Please target and scan the drone using the Science station." },
        { type: "wait", duration: 2000 },

        { type: "dialogue", speaker: "SIMULATOR", message: "Now, destroy the drone using your weapons." },
        { type: "set_objective", message: "Destroy the Training Drone." },
        { type: "label", name: "drone_combat_loop" },
        { type: "wait", duration: 3000 },
        { type: "jump", target: "drone_combat_loop", condition: { type: "enemies_exist" } },

        { type: "dialogue", speaker: "SIMULATOR", message: "Combat loop test complete. Now testing anomaly analysis." },
        { type: "clear_objective" },
        { type: "wait", duration: 2000 },
        
        { type: "anomaly", name: "Gravimetric Distortion", variable: "anomaly_scanned" },
        { type: "dialogue", speaker: "SIMULATOR", message: "Please analyze the anomaly at the Science station to continue." },
        { type: "label", name: "anomaly_wait_loop" },
        { type: "wait", duration: 2000 },
        { type: "jump", target: "anomaly_wait_loop", condition: { type: "variable_not_set", variable: "anomaly_scanned" } },

        { type: "dialogue", speaker: "SIMULATOR", message: "Anomaly analysis test complete. Now testing system damage." },
        { type: "wait", duration: 2000 },

        { type: "system_damage", system: "engines", message: "Simulated power surge has damaged the engine coils!" },
        { type: "dialogue", speaker: "SIMULATOR", message: "Please repair the engines at the Engineering station." },
        { type: "wait", duration: 12000 },

        { type: "dialogue", speaker: "SIMULATOR", message: "System damage test complete. Now testing environmental hazards." },
        { type: "wait", duration: 2000 },

        { type: "environmental_hazard", hazard_type: "nebula", duration: 15000, message: "a sensor-disrupting nebula" },
        { type: "dialogue", speaker: "SIMULATOR", message: "Entering nebula. Science sensors will be offline for 15 seconds." },
        { type: "wait", duration: 16000 },

        { type: "dialogue", speaker: "SIMULATOR", message: "Hazard test complete. Now testing choice event." },
        { type: "wait", duration: 2000 },
        
        { 
            type: "choice", 
            prompt: "This is a test choice. Please select an option.", 
            options: [
                { text: "Option A", action: "option_a_chosen" },
                { text: "Option B", action: "option_b_chosen" }
            ]
        },

        { type: "label", name: "option_a_chosen" },
        { type: "dialogue", speaker: "SIMULATOR", message: "You chose Option A. Jumping to end." },
        { type: "jump", target: "end_sequence" },

        { type: "label", name: "option_b_chosen" },
        { type: "dialogue", speaker: "SIMULATOR", message: "You chose Option B. Jumping to end." },
        { type: "jump", target: "end_sequence" },
        
        { type: "label", name: "end_sequence" },
        { type: "dialogue", speaker: "SIMULATOR", message: "Choice test complete." },
        { type: "wait", duration: 2000 },

        { type: "stop_sound", src: "Sounds/ambient-soundscapes-007-space-atmosphere-304974.mp3" },
        { type: "end_mission", title: "Diagnostic Complete", message: "All systems are functioning nominally." }
    ]
};

