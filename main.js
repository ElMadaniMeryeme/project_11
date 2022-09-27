let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

let btnEl = document.querySelector(".generate");
let serialEl = document.querySelector(".serial");

switcherLis.forEach((li) => {
   li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});

function removeActive() {
    switcherLis.forEach((li) =>{
        li.classList.remove("active");
        this.classList.add("active");
    })
}

function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none"
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    })
}

btnEl.onclick = function () {
    let characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charsCount = 10;
    let randomSerial = "";

    for(let i = 0; i < charsCount; i++) {
        randomSerial += characters[Math.floor(Math.random() * characters.length)];
    }
    serialEl.innerHTML = randomSerial;
};