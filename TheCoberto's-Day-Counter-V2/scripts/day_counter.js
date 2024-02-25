import { world, system } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(
    (data) => {
        event.player.onScreenDisplay.setTitle('Days:', {
            subtitle: world.getDay()
        });
    }
)


// import { world, system } from "@minecraft/server";

// world.afterEvents.worldInitialize.subscribe(
//     (data) => {
//         system.runInterval(
//             () => {
//                 if (world.getTimeOfDay() == 0)
//                 {
//                     let e = system.runInterval(() => {
//                         world.sendMessage("Day: " + world.getDay());
//                         system.clearRun(e)
//                     })
//                 };
//             },
//         )
//     }
// )