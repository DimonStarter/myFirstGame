/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import shuffledCardList from "./cardListData";

type Card = {
    id: number;
    name: string;
    img: string;
};

let cardData: Card[] = [];

function generatingHardCards() {
    const container: HTMLElement = document.querySelector(".app")!;
    const battleField = document.createElement("div");
    battleField.classList.add("battle-field");

    const scene = document.createElement("div");
    scene.classList.add("scene");

    function createCard(cardData: Card) {
        const card = document.createElement("div");
        card.classList.add("CARD");

        const cardFront = document.createElement("div");
        cardFront.classList.add("card-face", "card-face-front");
        card.append(cardFront);

        const cardBack = document.createElement("div");
        cardBack.classList.add("card-face", "card-face-back");
        cardBack.style.backgroundImage = `url("${cardData.img}")`;
        card.append(cardBack);

        card.addEventListener("click", function () {
            if (window.application.timerPlaying !== "") {
                card.classList.toggle("is-flipped");
                card.setAttribute("id", `${cardData.id}`);
                window.application.pickedCards.push(card.getAttribute("id"));

                if (window.application.pickedCards.length === 2) {
                    if (
                        window.application.pickedCards[0] !==
                        window.application.pickedCards[1]
                    ) {
                        window.application.renderScreen("loseScreen");
                        clearInterval(window.application.timerPlaying);
                    }
                }

                if (window.application.pickedCards.length === 4) {
                    if (
                        window.application.pickedCards[2] !==
                        window.application.pickedCards[3]
                    ) {
                        window.application.renderScreen("loseScreen");
                        clearInterval(window.application.timerPlaying);
                    }
                }

                if (window.application.pickedCards.length === 6) {
                    if (
                        window.application.pickedCards[4] !==
                        window.application.pickedCards[5]
                    ) {
                        window.application.renderScreen("loseScreen");
                        clearInterval(window.application.timerPlaying);
                    }
                }

                if (window.application.pickedCards.length === 8) {
                    if (
                        window.application.pickedCards[6] !==
                        window.application.pickedCards[7]
                    ) {
                        window.application.renderScreen("loseScreen");
                        clearInterval(window.application.timerPlaying);
                    }
                }

                if (window.application.pickedCards.length === 10) {
                    if (
                        window.application.pickedCards[8] !==
                        window.application.pickedCards[9]
                    ) {
                        window.application.renderScreen("loseScreen");
                        clearInterval(window.application.timerPlaying);
                    }
                }

                if (window.application.pickedCards.length === 12) {
                    if (
                        window.application.pickedCards[10] !==
                        window.application.pickedCards[11]
                    ) {
                        window.application.renderScreen("loseScreen");
                        clearInterval(window.application.timerPlaying);
                    }
                }

                if (window.application.pickedCards.length === 14) {
                    if (
                        window.application.pickedCards[12] !==
                        window.application.pickedCards[13]
                    ) {
                        window.application.renderScreen("loseScreen");
                        clearInterval(window.application.timerPlaying);
                    }
                }

                if (window.application.pickedCards.length === 16) {
                    if (
                        window.application.pickedCards[14] !==
                        window.application.pickedCards[15]
                    ) {
                        window.application.renderScreen("loseScreen");
                        clearInterval(window.application.timerPlaying);
                    }
                }

                if (window.application.pickedCards.length === 18) {
                    if (
                        window.application.pickedCards[16] !==
                        window.application.pickedCards[17]
                    ) {
                        window.application.renderScreen("loseScreen");
                        clearInterval(window.application.timerPlaying);
                    } else {
                        window.application.renderScreen("winScreen");
                        clearInterval(window.application.timerPlaying);
                    }
                }

                if (window.application.pickedCards.length > 18) {
                    window.application.pickedCards = [];
                    alert("Начни игру заново, ты проиграл!");
                }
            } else {
                alert("Запусти таймер, чтобы начать играть!");
            }
        });

        return card;
    }

    function renderCards() {
        cardData.forEach((cardEl) => {
            const card = createCard(cardEl);
            scene.append(card);
        });
    }
    generateRandomHardCards();
    renderCards();

    scene.querySelectorAll(".CARD").forEach((card) => {
        console.log(card);
        card.classList.add("is-flipped");
        setTimeout(() => {
            card.classList.remove("is-flipped");
        }, 5000);
    });

    container.appendChild(battleField);
    battleField.appendChild(scene);
}

export function generateRandomHardCards() {
    let generated = [];
    const cardListRandom = shuffledCardList.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 9; i++) {
        generated.push(cardListRandom[i]);
    }
    generated = generated.concat(generated);
    cardData = generated;

    return generated;
}

window.application.blocks["generateHardCards"] = generatingHardCards;

function renderScreenHardChallenge() {
    const container: HTMLElement = document.querySelector(".app")!;
    container.textContent = " ";

    const header = document.createElement("div");
    header.classList.add("header");

    const buttonTime = document.createElement("button");
    buttonTime.classList.add("btn", "timer-button");
    buttonTime.textContent = "старт/сбросить";

    let secs,
        now: number,
        timer,
        mins = 0;

    const timerField = document.createElement("span");
    timerField.classList.add("timer-field");
    timerField.textContent = "0:00";

    function time() {
        secs = Math.floor((Date.now() - now) / 1000);
        if (secs === 60) {
            now = Date.now();
            mins++;
        }
        if (secs < 10) {
            secs = "0" + secs;
        }
        timerField.innerHTML = mins + ":" + secs;
        window.application.status = timerField;
    }

    buttonTime.onclick = function () {
        now = Date.now();
        mins = 0;
        timer = setInterval(time);
        window.application.timerPlaying = timer;
    };

    const tryAgainButton = document.createElement("button");
    tryAgainButton.classList.add("btn", "try-again-button");
    tryAgainButton.textContent = "Начать заново";

    tryAgainButton.addEventListener("click", () => {
        window.application.challenge = "";
        window.application.pickedCards = [];
        window.application.timerPlaying = "";
        window.application.status = "";
        window.application.renderScreen("start");
    });

    container.appendChild(header);
    header.appendChild(buttonTime);
    header.appendChild(timerField);
    header.appendChild(tryAgainButton);

    window.application.renderBlock("generateHardCards", container);
}

window.application.screens["hard"] = renderScreenHardChallenge;
