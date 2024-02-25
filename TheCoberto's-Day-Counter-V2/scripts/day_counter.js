import { world, system } from "@minecraft/server";

let dayCountDisplay = system.createDisplay("sidebar", "Day Count");

world.afterEvents.worldInitialize.subscribe(() => {
    dayCountDisplay.setDisplayObjective(world.getDay());
});