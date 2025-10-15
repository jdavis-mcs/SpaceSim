window.currentLoadedMission = {
    title: "The Crystalline Anomaly: First Contact",
    comicUnlock: "crystalline_mission_1_complete",
    events: [
        // CORRECTED PATH: This now points to a folder relative to your index.html
        { type: "sound", src: "Sounds/ambient-soundscapes-007-space-atmosphere-304974.mp3", loop: true },
        { type: "photo", src: "https://lh3.googleusercontent.com/rd-gg-dl/AJfQ9KR4oNEoJdXyKcpxGMPVvAa8XaYEEkzYx4N3jBhsGOlQTts6qlD7X5n4nsveeVqkzWvdoTMAKPv8L30wmaJiek6VUCk8W0xOegNPwFUkCI0rvzL8knyhECpOIb8IrlC91lGoujd8_9Xdiy3CBr0q3Bf336TEoMB5SHxHGiTcTdag5ZUHHoaAq_nPEoklPHGI6e1RXL6lOryjE5Bp3Z5_10wz6QF66v8sYn5ga9X9ItZTuscyds5CFKkqGpkg72iZctBZIE1aIITtk_Z4GrIVV0wOPiPcFEPtS_P2RuI9f8jMUIKOeSB05cfF55vNKhBIBpjN_MgjJTpgjRpTXga-vE_UmBqYaYm2KibABMVDzbKi-pNpGsmC6Jq94xt9usnB8GzagBsbE6mQMXbqYHQHtCahSzsvBeAALRaV0QAnFo0EVV0Iwt0vHe_fhmM1QCTnbNGOKD02DbdATk--7RBN9vqBJURoKiZa6KYU4u9Koi0xG32v6JuLfpc_E_d5wanrWaGEVqhRcF0bK0z4KN60VWBowTD-auhAjW9KC7G5KdETSc6NYn9dG6tWbluf5HYza9HYxF8c3uRtuamNf4j9PrmsATkBdFYPItyazn1G2r2CzoEe7yFeDOgz4aAVrsXgkhzDbyxFfiAftbURs66G3pN9E9_v2ZXvPUsXCXmdZJNkuFbWbUKww_IgCs8ENJoi3GSR5Zd1admLkh3RT5gxY0Q175Dnwfj-tQwbah4JJUq8soAALuXIZfd1dbs-KOYTAkpvnVe2oBdP0G29DmLupGPMkmr5SWcCuOWKdet_I6EvSXtS7dqQZi8Cov_1SigQpZwcb1HlK6al6gAM78YWN4CbNzOJM0tDuDX3mX8HH7yEuTp6C02DunEe7QIfg94yNQQFdGn0_7S5RzE9ULYPjw8qjWSv35m_bhhAZEW1kR4_-JWn4Q1Mf89AByscvKZz9CMZLuw51AT-IhxJn_gZ0hTOIlNKTDdONiZpMDPaN4afPHR-YiyttURTZZ8ukBJfGIJFGtps91KOVJ7Kt9YYurYrRJ543kfbPEKshFvcllrV0Ypx-V9Ofprly8ZQE4vLaXVSxr4xN7rxsqdeX3IGo5EJYzkwTEuNf4-wjnuvfA6dMNka68_mM8izpMAybOhuU6fux7Ztbe1__t5EgZev2HEFFurAzQul=s1024-rj" },
        { type: "dialogue", speaker: "TRAINING", message: "Welcome to the Crystalline Anomaly mission series." },
        { type: "dialogue", speaker: "COMMS", message: "Captain, we're picking up a strange energy signature from the nearby asteroid field." },
        { type: "dialogue", speaker: "SCIENCE", message: "It's unlike anything I've seen before. High-energy, but erratic. I recommend a cautious approach." },
        { type: "set_objective", message: "Investigate the energy signature." },
        { type: "wait", duration: 4000 },
        { type: "dialogue", speaker: "COMMS", message: "Multiple contacts emerging from the asteroids! They don't look like any known ship configuration." },
        { type: "spawn_enemy", name: "Crystalline Shard", hull: 150, weakness: "torpedoes" },
        { type: "spawn_enemy", name: "Crystalline Shard", hull: 150, weakness: "torpedoes" },
        { type: "set_objective", message: "Defeat the unknown contacts." },
        { type: "dialogue", speaker: "WEAPONS", message: "Our phasers aren't having much effect on their hulls! It's like they're made of solid crystal." },
        { type: "dialogue", speaker: "SCIENCE", message: "I need to get a full scan to find a weak point. Target one of them and I'll begin." },
        { type: "label", name: "combat_loop_1" },
        { type: "wait", duration: 5000 },
        { type: "jump", target: "combat_loop_1", condition: { type: "enemies_exist" } },
        { type: "clear_objective" },
        // This will now stop the ambient sound we started
        { type: "stop_sound", src: "Sounds/ambient-soundscapes-007-space-atmosphere-304974.mp3" },
        { type: "sound", src: "Sounds/victory.mp3", loop: false }, // Suggestion: add a victory sound
        { type: "dialogue", speaker: "SCIENCE", message: "Scan complete. Their crystalline structure is highly resistant to energy weapons, but vulnerable to kinetic impact. Torpedoes should be much more effective!" },
        { type: "dialogue", speaker: "COMMS", message: "More of them are coming! Looks like they didn't appreciate us breaking their friends." },
        { type: "wait", duration: 3000 },
        { type: "sound", src: "Sounds/action_music.mp3", loop: true }, // Suggestion: add action music
        { type: "spawn_enemy", name: "Crystalline Shard", hull: 150, weakness: "torpedoes" },
        { type: "spawn_enemy", name: "Crystalline Shard", hull: 150, weakness: "torpedoes" },
        { type: "spawn_enemy", name: "Crystalline Shard", hull: 150, weakness: "torpedoes" },
        { type: "set_objective", message: "Use the enemy weakness to defeat the second wave." },
        { type: "label", name: "combat_loop_2" },
        { type: "wait", duration: 5000 },
        { type: "jump", target: "combat_loop_2", condition: { type: "enemies_exist" } },
        { type: "clear_objective" },
        { type: "stop_sound", src: "Sounds/action_music.mp3" },
        { type: "dialogue", speaker: "COMMS", message: "That's the last of them. They're retreating back into the asteroid field." },
        { type: "dialogue", speaker: "SCIENCE", message: "I'm tracking their energy trail. It seems to lead deeper into this sector. We need to find out where they came from." },
        { type: "end_mission", title: "Mission Complete", message: "You survived the first encounter with the Crystalline entities and discovered their weakness. Their energy trail leads deeper into unknown space." }
    ]
};


