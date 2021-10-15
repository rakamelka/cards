let page = document.querySelector('.container');

for (let i = 0; i < 25; i++) {
    let newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.dataset.color = colorSet();
    page.append(newCard);
    newCard.addEventListener("click", colorChange);
}

function colorSet() {
    let colors = ["red", "yellow", "blue", "violet"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function colorChange() {
    if (this.style.backgroundColor === "rgb(20, 20, 20)") {
        this.style.backgroundColor = this.dataset.color;
    } else {
        this.style.backgroundColor = "rgb(20, 20, 20)";
        }
}