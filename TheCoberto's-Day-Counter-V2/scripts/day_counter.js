import { world, system } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(
    (data) => {
        system.runInterval(
            () => {
                if (world.getTimeOfDay() == 0)
                {
                    let e = system.runInterval(() => {
                        world.sendMessage("Day: " + world.getDay());
                        system.clearRun(e)
                    })
                };

                data.player.onScreenDisplay.setTitle('Day Counter', {
                    stayDuration: 100,
                    fadeInDuration: 2,
                    fadeOutDuration: 4,
                    subtitle: 'Test subtitle',
                });
            let dayCountDisplay = system.createDisplay("sidebar", "DayCount");
                dayCountDisplay.setDisplayObjective(world.getDay());
                    data.player.onScreenDisplay.setTitle('Days:', {
                        subtitle: world.getDay()
            });
            }
        )
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
            // world.sendMessage("Ready! Day: " + world.getDay());
            // let dayCountDisplay = system.createDisplay("sidebar", "DayCount");
            //     dayCountDisplay.setDisplayObjective(world.getDay());
            //         event.player.onScreenDisplay.setTitle('Days:', {
            //             subtitle: world.getDay()
            // });
//     }
// )