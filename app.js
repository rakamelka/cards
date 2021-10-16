let page = document.querySelector('.container2');
let clickCounter = 0;
let allClicks = 0;
let itemFirst;
let itemSecond;
let cards = [];
let difficulty = 2;
let difButtons = document.querySelectorAll('.difficulty');
let counts = [0, 0, 0, 0, 0, 0, 0, 0];
let startBut = document.querySelector('.play');
let hidden = document.querySelectorAll('.hide');
let win = 0;
let replay = document.querySelector('.replay');
let attempts = document.querySelector('.count');

startBut.addEventListener('click', () => {
    gameStart();
    startBut.disabled = true;
})

for (let difBut of difButtons) {
    difBut.addEventListener("click", () => {
        for (let but of difButtons) {
            but.classList.remove('pressed');
        }
        difBut.classList.add('pressed');
        if (difBut.classList.contains('easy')) {
            difficulty = 2;
        }
        else if (difBut.classList.contains('hard')) {
            difficulty = 4;
        }
        else if (difBut.classList.contains('insane')) {
            difficulty = 8;
        }
    })
}

function gameStart() {
    for (let i = 0; i < 16; i++) {
        let newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.style.backgroundColor = "rgb(20, 20, 20)";
        newCard.classList.add('opacity');
        newCard.dataset.color = colorSet();
        page.append(newCard);
        cards.push(newCard);

        newCard.addEventListener("click", () => {
            allClicks++;
            attempts.textContent = allClicks;

            if (clickCounter === 0 && newCard.style.backgroundColor === "rgb(20, 20, 20)") {
                itemFirst = newCard;
                newCard.style.backgroundColor = newCard.dataset.color;
                clickCounter++;
            }
            else if (clickCounter === 1 && newCard.style.backgroundColor === "rgb(20, 20, 20)") {
                itemSecond = newCard;
                newCard.style.backgroundColor = newCard.dataset.color;
                clickCounter++;
            }
            else if (clickCounter === 2 && newCard.style.backgroundColor === "rgb(20, 20, 20)") {

                if (itemSecond.style.backgroundColor !== itemFirst.style.backgroundColor) {
                    itemFirst.style.backgroundColor = "rgb(20, 20, 20)";
                    itemSecond.style.backgroundColor = "rgb(20, 20, 20)";
                }
                else if(itemSecond.style.backgroundColor === itemFirst.style.backgroundColor){
                    win++;
                }

                itemFirst = newCard;
                newCard.style.backgroundColor = newCard.dataset.color;
                clickCounter = 1;
            }

        });
    }
}


function colorSet() {
    let colors = ["#F26D93", "#A6F16C", "#60D6A7", "#FF9D73", "#D460CF", "#6899D3", "#A069D6", "#FFE073"];
    let maxCount = 16 / difficulty;

    while (true) {
        let ranNum = Math.floor(Math.random() * difficulty);
        if (counts[ranNum] < maxCount) {
            counts[ranNum]++;
            return colors[ranNum];
        }
    }
}
