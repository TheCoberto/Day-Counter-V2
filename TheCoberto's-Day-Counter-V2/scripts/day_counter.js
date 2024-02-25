import { world, system } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(() => {
    let dayCountDisplay = system.createDisplay("sidebar", "Day Count");
        dayCountDisplay.setDisplayObjective(world.getDay());
});