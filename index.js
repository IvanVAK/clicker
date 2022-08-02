// blocks
let nameOfPlayer = document.getElementById("nameInput");
let colorOfPlayer = document.getElementById("color");
let btnPlus = document.getElementById("plusBtn");
let btnClick = document.getElementById("clickBtn");
let unlock = document.getElementById("lock");
let playerList = document.getElementById("players");
let resultBlock = document.getElementById("resBlock");
// other let 
let i = 0;
let i2;
let numOfClicks;
//
function addPlayer(){
    let playerAdding = document.createElement('div');
    playerAdding.innerHTML = `
    <div class="name">${nameOfPlayer.value}
        <div class="plColor"><style type="text/css">
            .plColor {
                background-color: ${colorOfPlayer.value};
                height: 25px;
                width: 25px;
                border-radius: 50%;
                margin-top: -25px;
                margin-left: 180px;
            }
        </style>
        </div>
        <button class="but" onclick='del(this)'>del</button>
        <button class="but">Select</button>
    </div>`
    playerAdding.className = "createdPlayer";
    playerAdding.id = i++;
    playerList.append(playerAdding);
}
btnPlus.addEventListener("click", addPlayer);
