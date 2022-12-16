let elementals = 1;
let villagers = 0;

function eleClick(number) {
    elementals = elementals + number;
    document.getElementById("elementals").innerHTML = elementals;
    updateProgress();
}

function buyVillager() {
    const villagerCost = Math.floor(10 * Math.pow(1.1, villagers)); // works out the cost of this villager
    if (elementals >= villagerCost) { // checks that the player can afford the villager
        villagers = villagers + 1; // increases number of villagers
        elementals = elementals - villagerCost; // removes the elementals spent
        document.getElementById("villagers").innerHTML = villagers; // updates the number of villagers for the user
        document.getElementById("elementals").innerHTML = elementals; // updates the number of elementals for the user
    }
    const nextCost = Math.floor(10 * Math.pow(1.1, villagers)); // works out the cost of the next villager
    document.getElementById("villagerCost").innerHTML = nextCost; // updates the villager cost for the user
}

function updateProgress() {
    const progress = Math.floor(elementals / 100);
    document.getElementById("progress").value = progress;
}

function buyUpgrade(upgrade) {
    switch (upgrade) {
        case 1:
            // code to buy upgrade 1
            break;
        case 2:
            // code to buy upgrade 2
            break;
        case 3:
            // code to buy upgrade 3
            break;
    }
}

window.setInterval(function() {
    eleClick(villagers);
}, 1000);
