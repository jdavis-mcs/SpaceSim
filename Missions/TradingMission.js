window.currentLoadedMission = {
    title: "Smuggler's Run",
    events: [
        { type: "dialogue", speaker: "CLIENT", message: "Captain, glad you could make it. I have a simple, lucrative job for you. A client on Bex needs a shipment of Quantum Bits, urgently." },
        { type: "dialogue", speaker: "CLIENT", message: "They're cheapest at Cygnus X-1. Pick up at least 30 units, and I'll make it worth your while. I'm transferring you 2000 credits to get started." },
        { type: "set_objective", message: "Acquire 30 Quantum Bits and deliver them to Bex Outpost." },
        { type: "wait", duration: 2000 },
        
        // This is the new event that activates the trading UI and 3D view
        { 
            type: "start_trading_mission",
            initialState: {
                credits: 2000,
                cargo: 0,
                cargoMax: 50, // Smaller ship for this mission
                location: 'Aethel'
            }
        },

        // This loop checks if the player has met the mission conditions
        { type: "label", name: "trading_loop" },
        { type: "wait", duration: 3000 }, // Check every 3 seconds
        { 
            type: "jump", 
            target: "mission_complete",
            condition: { 
                type: "check_trader_state",
                variable: "cargo",
                value: 30,
                comparison: "ge", // greater than or equal to
                location: "Bex" // also must be at this location
            } 
        },
        // If conditions are not met, jump back to the start of the loop and wait again
        { type: "jump", target: "trading_loop" },

        // This label is the target for a successful jump
        { type: "label", name: "mission_complete" },
        
        // End the trading mode and clean up the UI
        { type: "end_trading_mission" },

        { type: "dialogue", speaker: "CLIENT", message: "You got the goods! Fantastic. As promised, here's your payment... plus a little extra for your discretion." },
        { type: "sound", src: "Sounds/victory.mp3", loop: false },
        
        // Another new event to modify the trader's credits
        { type: "add_credits", amount: 10000 },
        { type: "wait", duration: 3000 },
        
        { 
            type: "end_mission", 
            title: "Job Complete", 
            message: "You successfully delivered the goods and earned a hefty profit." 
        }
    ]
};
