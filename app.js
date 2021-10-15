let page = document.querySelector('.container');
let clickCounter = 0;
let itemFirst;
let itemSecond;
let cards = [];
let difficulty = 8;

function gameStart() {
    for (let i = 0; i < 16; i++) {
        let newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.style.backgroundColor = "rgb(20, 20, 20)";
        newCard.dataset.color = colorSet();
        page.append(newCard);
        cards.push(newCard);
        newCard.addEventListener("click", () => {
            console.log(newCard.style.backgroundColor);
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
            else if (clickCounter === 2) {
                clickCounter = 0;
                if (itemSecond.style.backgroundColor !== itemFirst.style.backgroundColor) {
                    itemFirst.style.backgroundColor = "rgb(20, 20, 20)";
                    itemSecond.style.backgroundColor = "rgb(20, 20, 20)";
                }
            }
        });
    }
}

function colorSet() {
    let colors = ["#F26D93", "#A6F16C", "#60D6A7", "#FF9D73", "#D460CF","#6899D3","#A069D6","#FFE073"];
    return colors[Math.floor(Math.random() * difficulty)];
}
