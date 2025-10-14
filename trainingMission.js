const trainingMission = {
    title: "Basic Flight and Combat Training",
    events: [
        // 1. Introduction
        { type: 'dialogue', speaker: 'TRAINING OFFICER', message: 'Welcome to the bridge, rookie. This simulation will test your ability to manage the ship\'s core systems. Let\'s begin.' },
        { type: 'dialogue', speaker: 'TRAINING OFFICER', message: 'Your station provides control over Communications, Science, Engineering, and Weapons. First, look at the Engineering panel.' },
        { type: 'dialogue', speaker: 'TRAINING OFFICER', message: 'You have 100% total power. Try adjusting the sliders for Shields, Engines, and Weapons. Higher power grants bonuses, but distribute it wisely.' },
        { type: 'wait', duration: 10000 },

        // 2. First Combat
        { type: 'dialogue', speaker: 'TRAINING OFFICER', message: 'Time for your first combat test. A training drone is warping in now. It has very light armor.' },
        { type: 'spawn_enemy', name: 'Training Drone Alpha', hull: 20, weakness: 'phasers' },
        { type: 'dialogue', speaker: 'TRAINING OFFICER', message: 'On the Weapons panel, select the drone from the target list. Once targeted, your weapons will be enabled. Fire phasers to destroy it.' },
        { type: 'label', name: 'wait_for_alpha_drone' },
        { type: 'jump', target: 'wait_for_alpha_drone', condition: { type: 'enemies_exist' } },
        { type: 'dialogue', speaker: 'TRAINING OFFICER', message: 'Excellent work. Target neutralized.' },
        { type: 'wait', duration: 2000 },

        // 3. Science Station and Weaknesses
        { type: 'dialogue', speaker: 'TRAINING OFFICER', message: 'Now for a more advanced lesson. Another drone is inbound. This one is shielded against phasers.' },
        { type: 'spawn_enemy', name: 'Training Drone Beta', hull: 50, weakness: 'torpedoes' },
        { type: 'dialogue', speaker: 'TRAINING OFFICER', message: 'Target the new drone, then go to the Science panel. Use the scanner to find its weakness. This is critical for efficient combat.' },
        { type: 'wait', duration: 8000 },
        { type: 'dialogue', speaker: 'TRAINING OFFICER', message: 'The scan should be complete. The drone is weak to torpedoes. Fire a torpedo to destroy it quickly.' },
        { type: 'label', name: 'wait_for_beta_drone' },
        { type: 'jump', target: 'wait_for_beta_drone', condition: { type: 'enemies_exist' } },
        { type: 'dialogue', speaker: 'TRAINING OFFICER', message: 'See the difference? Exploiting weaknesses is key. Good job.' },
        { type: 'wait', duration: 2000 },

        // 4. Anomaly Analysis
        { type: 'dialogue', speaker: 'TRAINING OFFICER', message: 'Not all challenges are hostile. Sometimes you\'ll encounter scientific anomalies. One is appearing now.' },
        { type: 'anomaly', name: 'Gravimetric Distortion', variable: 'grav_analyzed' },
        { type: 'dialogue', speaker: 'TRAINING OFFICER', message: 'Go to the Science station. The scanner has been replaced with an analysis tool. Analyze the anomaly so we can proceed.' },
        { type: 'label', name: 'wait_for_anomaly' },
        { type: 'jump', target: 'wait_for_anomaly', condition: { type: 'variable_not_set', variable: 'grav_analyzed' } },
        { type: 'dialogue', speaker: 'TRAINING OFFICER', message: 'Analysis complete. Well done. In a real mission, this might unlock new options or information.' },
        { type: 'wait', duration: 2000 },

        // 5. Final Test
        { type: 'dialogue', speaker: 'TRAINING OFFICER', message: 'Time for your final exam. A wave of drones is approaching. Use everything you\'ve learned to survive.' },
        { type: 'spawn_enemy', name: 'Test Drone 1', hull: 40, weakness: 'phasers' },
        { type: 'spawn_enemy', name: 'Test Drone 2', hull: 60, weakness: 'torpedoes' },
        { type: 'spawn_enemy', name: 'Test Drone 3', hull: 40, weakness: 'phasers' },
        { type: 'dialogue', speaker: 'TRAINING OFFICER', message: 'Manage your power, scan your targets, and use the right weapon for the job. Good luck.' },
        { type: 'label', name: 'final_battle_loop' },
        { type: 'jump', target: 'final_battle_loop', condition: { type: 'enemies_exist' } },

        // 6. Conclusion
        { type: 'end_mission', title: 'Training Complete', message: 'You have successfully completed all training objectives. You are certified for active duty. Congratulations!' }
    ]
};

