/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import shuffledCardList from "./cardListData";

function generatingHardCards() {
    const container: HTMLElement = document.querySelector(".app")!;
    const battleField = document.createElement("div");
    battleField.classList.add("battle-field");

    const scene = document.createElement("div");
    scene.classList.add("scene");

    type Card = {
        id: number;
        name: string;
        img: string;
    };

    let cardData: Card[] = [];

    function generateRandomCards() {
        const cardListRandom = shuffledCardList.sort(() => Math.random() - 0.5);
        for (let i = 0; i < 9; i++) {
            cardData.push(cardListRandom[i]);
        }
        cardData = cardData.concat(cardData);
    }

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

                if (
                    window.application.pickedCards[0] ===
                    window.application.pickedCards[1]
                ) {
                    window.application.renderScreen("winScreen");
                    clearInterval(window.application.timerPlaying);
                }

                if (window.application.pickedCards.length === 2) {
                    if (
                        window.application.pickedCards[0] !==
                        window.application.pickedCards[1]
                    ) {
                        window.application.renderScreen("loseScreen");
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
    generateRandomCards();
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
