window.onload = function () {
    const containerDiv = document.createElement("div");
    containerDiv.className =
   "container flex justify-center items-center flex-col gap-8 h-screen";
    document.body.appendChild(containerDiv);
    const heading = document.createElement("h1");
    heading.textContent = "Dice Game";
    heading.className = "heading";
    containerDiv.appendChild(heading);
    const desc = document.createElement("p");
    desc.textContent = "Lets Play a Dice Game";
    containerDiv.appendChild(desc);
    const playArea = containerDiv.appendChild(document.createElement("div"));
    playArea.className = "flex gap-8 w-full justify-evenly";
    const playerOneArea = playArea.appendChild(document.createElement("div"));
    playerOneArea.className = "flex flex-col gap-4 items-center";
    const diceArea = playArea.appendChild(document.createElement("div"));
    const playerTwoArea = playArea.appendChild(document.createElement("div"));

    // playerOneArea.innerTxt = "player 1";
    diceArea.innerTxt = "Dice";
    playerTwoArea.innerTxt = "player 2";

    const playerOneHeading = playerOneArea.appendChild(document.createElement("h2"));
    playerOneHeading.innerText = "player 1";
    playerOneHeading.className = "text-3xl font -bold text-blue-500";
    const playerTwoHeading = playerTwoArea.appendChild(document.createElement("h2"));
    playerTwoHeading.innerText = "player 2";
    playerTwoHeading.className = "text-3xl font -bold text-red-500";
    const playerOneScore = playerOneArea.appendChild(document.createElement("p"));
    playerOneScore.innerText = "0";
    playerOneScore.className = "text-5xl font-bold  text-center";
    const playerTwoScore = playerTwoArea.appendChild(document.createElement("p"));
    playerTwoScore.innerText = "0";
    playerTwoScore.className = "text-5xl font-bold  text-center";
    
    const playerOneButton = playerOneArea.appendChild(document.createElement("button"));
    playerOneButton.innterText = "Roll Now";
    playerOneButton.className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
}