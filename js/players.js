const playerNamesArray = [];

function playerListDisplay(slectedPlayer) {
    const slectedPlayerList = document.getElementById('selected-player');

    slectedPlayerList.innerHTML = '';

    for (let i = 0; i < slectedPlayer.length; i++) {

        const displayNamed = playerNamesArray[i].names;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${displayNamed}</td>
         `;
        slectedPlayerList.appendChild(tr);
    }

}

//Select Player
function addToClick(player) {

    const playerName = player.parentNode.parentNode.children[0].innerText;
    const playerNameList = {
        names: playerName
    };

    if (playerNamesArray.length >= 5) {
        alert('You can select only Five players');
        return;

    }

    playerNamesArray.push(playerNameList);

    //set player list
    playerListDisplay(playerNamesArray);

    player.disabled = true;
    player.style.backgroundcolor = 'gray';
}

//Budget calculated
document.getElementById('calculate-Id').addEventListener('click', function () {
    const perPlayer = document.getElementById('selected-player');
    const players = perPlayer.children.length;

    const perPlayerCost = document.getElementById('per-playerId');
    const perPlayerCostString = perPlayerCost.value;
    const perPlayerCostNumber = parseInt(perPlayerCostString);

    const playerCost = players * perPlayerCostNumber;

    const playerExpenses = document.getElementById('expenses-id-amount');
    playerExpenses.innerText = playerCost;

});

document.getElementById('calculate-totalId').addEventListener('click', function () {

    const managerInputField = document.getElementById('manager-field');
    const managerInputFieldString = managerInputField.value;
    const managerInputFieldNumber = parseInt(managerInputFieldString);


    const coachInputField = document.getElementById('coach-field');
    const coachInputFieldString = coachInputField.value;
    const coachInputFieldNumber = parseInt(coachInputFieldString);


    const playerExpenses = document.getElementById('expenses-id-amount');
    const playerExpensesValueString = playerExpenses.innerText;
    const playerExpensesValueNumber = parseInt(playerExpensesValueString);


    const calculateTotal = document.getElementById('calculate-total-amount');
    const calculateString = calculateTotal.innerText;
    const totalCalculated = managerInputFieldNumber + coachInputFieldNumber + playerExpensesValueNumber;

    calculateTotal.innerText = totalCalculated;


});