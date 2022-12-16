let elementals = 1;
let villagers = 0;
let strengthLevel = 1;
let speedLevel = 1;
let farmingLevel = 1;

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
            // code to buy STRENGTH UPGRADE
            const strengthCost = Math.floor(50 * Math.pow(1.1, strengthLevel)); // calculate the cost of the next strength upgrade
            if (elementals >= strengthCost) { // check if the player can afford the upgrade
                strengthLevel++; // increase the strength level
                elementals -= strengthCost; // remove the elementals spent
                // update the UI to reflect the change in strength level and elementals
                document.getElementById("strengthLevel").innerHTML = strengthLevel;
                document.getElementById("elementals").innerHTML = elementals;
                // update the cost of the next strength upgrade
                document.getElementById("strengthCost").innerHTML = Math.floor(50 * Math.pow(1.1, strengthLevel));
            }
            break;
        case 2:
            // code to buy SPEED UPGRADE
            const speedCost = Math.floor(50 * Math.pow(1.1, speedLevel)); // calculate the cost of the next speed upgrade
            if (elementals >= speedCost) { // check if the player can afford the upgrade
                speedLevel++; // increase the speed level
                elementals -= speedCost; // remove the elementals spent
                // update the UI to reflect the change in speed level and elementals
                document.getElementById("speedLevel").innerHTML = speedLevel;
                document.getElementById("elementals").innerHTML = elementals;
                // update the cost of the next speed upgrade
                document.getElementById("speedCost").innerHTML = Math.floor(50 * Math.pow(1.1, speedLevel));
            }
            break;
        case 3:
            // code to buy FARMING UPGRADE
            const farmingCost = Math.floor(50 * Math.pow(1.1, farmingLevel)); // calculate the cost of the next farming upgrade
            if (elementals >= farmingCost) { // check if the player can afford the upgrade
                farmingLevel++; // increase the farming level
                elementals -= farmingCost; // remove the elementals spent
                // update the UI to reflect the change in farming level and elementals
                document.getElementById("farmingLevel").innerHTML = farmingLevel;
                document.getElementById("elementals").innerHTML = elementals;
                // update the cost of the next farming upgrade
                document.getElementById("farmingCost").innerHTML = Math.floor(50 * Math.pow(1.1, farmingLevel));
            }
            break;
    }
}


window.setInterval(function() {
    eleClick(villagers);
}, 1000);

function buyUpgrade(upgrade) {
    switch (upgrade) {
      case 1:
        // code to buy STRENGTH UPGRADE
        const strengthCost = Math.floor(50 * Math.pow(1.1, strengthLevel)); // calculate the cost of the next strength upgrade
        if (elementals >= strengthCost) { // check that the player can afford the upgrade
          strengthLevel++; // increase the strength level
          elementals -= strengthCost; // remove the elementals spent
          document.getElementById("strengthLevel").innerHTML = strengthLevel; // update the strength level for the user
          document.getElementById("elementals").innerHTML = elementals; // update the number of elementals for the user
          const nextStrengthCost = Math.floor(50 * Math.pow(1.1, strengthLevel)); // calculate the cost of the next strength upgrade
          document.getElementById("strengthCost").innerHTML = nextStrengthCost; // update the strength cost for the user
        }
        break;
      case 2:
        // code to buy SPEED UPGRADE
        // similar to case 1
        break;
      case 3:
        // code to buy FARMING UPGRADE
        // similar to case 1
        break;
      case 4:
        // code to buy MINING UPGRADE
        let miningCost = Math.floor(50 * Math.pow(1.1, miningLevel)); // calculate the cost of the next mining upgrade
        if (elementals >= miningCost) { // check that the player can afford the upgrade
          miningLevel++; // increase the mining level
          elementals -= miningCost; // remove the elementals spent
          document.getElementById("miningLevel").innerHTML = miningLevel; // update the mining level for the user
          document.getElementById("elementals").innerHTML = elementals; // update the number of elementals for the user
          miningCost = Math.floor(50 * Math.pow(1.1, miningLevel)); // calculate the cost of the next mining upgrade
          document.getElementById("miningCost").innerHTML = miningCost; // update the mining cost for the user
        }
        break;
      case 5:
        // code to buy CONSTRUCTION UPGRADE
        // similar to case 4
        break;
      case 6:
        // code to buy TECHNOLOGY UPGRADE
        // similar to case 4
        break;
    }
  }
  