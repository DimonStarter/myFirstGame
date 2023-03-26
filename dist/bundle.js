/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cardGame/style.css":
/*!****************************!*\
  !*** ./cardGame/style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./cardGame/application.ts":
/*!*********************************!*\
  !*** ./cardGame/application.ts ***!
  \*********************************/
/***/ (() => {


window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        window.application.screens[screenName]();
    },
    renderBlock: function (blockName, container, result) {
        window.application.blocks[blockName](container, result);
    },
};
window.application.challenge = "";
window.application.status = "";
window.application.timerPlaying = "";
window.application.generatedCards = "";
window.application.pickedCards = [];


/***/ }),

/***/ "./cardGame/cardListData.ts":
/*!**********************************!*\
  !*** ./cardGame/cardListData.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shuffledCardList = [
    {
        id: 1,
        name: "ace-of-clubs",
        img: "static/ace-of-clubs.png",
    },
    {
        id: 2,
        name: "king-of-clubs",
        img: "static/king-of-clubs.png",
    },
    {
        id: 3,
        name: "lady-of-clubs",
        img: "static/lady-of-clubs.png",
    },
    {
        id: 4,
        name: "jack-of-clubs",
        img: "static/jack-of-clubs.png",
    },
    {
        id: 5,
        name: "ten-of-clubs",
        img: "static/ten-of-clubs.png",
    },
    {
        id: 6,
        name: "nine-of-clubs",
        img: "static/nine-of-clubs.png",
    },
    {
        id: 7,
        name: "eight-of-clubs",
        img: "static/eight-of-clubs.png",
    },
    {
        id: 8,
        name: "seven-of-clubs",
        img: "static/seven-of-clubs.png",
    },
    {
        id: 9,
        name: "six-of-clubs",
        img: "static/six-of-clubs.png",
    },
    {
        id: 10,
        name: "ace-of-diamonds",
        img: "static/ace-of-diamonds.png",
    },
    {
        id: 11,
        name: "king-of-diamonds",
        img: "static/king-of-diamonds.png",
    },
    {
        id: 12,
        name: "lady-of-diamonds",
        img: "static/lady-of-diamonds.png",
    },
    {
        id: 13,
        name: "jack-of-diamonds",
        img: "static/jack-of-diamonds.png",
    },
    {
        id: 14,
        name: "ten-of-diamonds",
        img: "static/ten-of-diamonds.png",
    },
    {
        id: 15,
        name: "nine-of-diamonds",
        img: "static/nine-of-diamonds.png",
    },
    {
        id: 16,
        name: "eight-of-diamonds",
        img: "static/eight-of-diamonds.png",
    },
    {
        id: 17,
        name: "seven-of-diamonds",
        img: "static/seven-of-diamonds.png",
    },
    {
        id: 18,
        name: "six-of-diamonds",
        img: "static/six-of-diamonds.png",
    },
    {
        id: 19,
        name: "ace-of-hearts",
        img: "static/ace-of-hearts.png",
    },
    {
        id: 20,
        name: "king-of-hearts",
        img: "static/king-of-hearts.png",
    },
    {
        id: 21,
        name: "lady-of-hearts",
        img: "static/lady-of-hearts.png",
    },
    {
        id: 22,
        name: "jack-of-hearts",
        img: "static/jack-of-hearts.png",
    },
    {
        id: 23,
        name: "ten-of-hearts",
        img: "static/ten-of-hearts.png",
    },
    {
        id: 24,
        name: "nine-of-hearts",
        img: "static/nine-of-hearts.png",
    },
    {
        id: 25,
        name: "eight-of-hearts",
        img: "static/eight-of-hearts.png",
    },
    {
        id: 26,
        name: "seven-of-hearts",
        img: "static/seven-of-hearts.png",
    },
    {
        id: 27,
        name: "six-of-hearts",
        img: "static/six-of-hearts.png",
    },
    {
        id: 28,
        name: "ace-of-spades",
        img: "static/ace-of-spades.png",
    },
    {
        id: 29,
        name: "king-of-spades",
        img: "static/king-of-spades.png",
    },
    {
        id: 30,
        name: "lady-of-spades",
        img: "static/lady-of-spades.png",
    },
    {
        id: 31,
        name: "jack-of-spades",
        img: "static/jack-of-spades.png",
    },
    {
        id: 32,
        name: "ten-of-spades",
        img: "static/ten-of-spades.png",
    },
    {
        id: 33,
        name: "nine-of-spades",
        img: "static/nine-of-spades.png",
    },
    {
        id: 34,
        name: "eight-of-spades",
        img: "static/eight-of-spades.png",
    },
    {
        id: 35,
        name: "seven-of-spades",
        img: "static/seven-of-spades.png",
    },
    {
        id: 36,
        name: "six-of-spades",
        img: "static/six-of-spades.png",
    },
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shuffledCardList);
// const shuffledCardList = [
//     {
//         id: 1,
//         name: "ace-of-clubs",
//         img: "images/ace-of-clubs.png",
//     },
//     {
//         id: 2,
//         name: "king-of-clubs",
//         img: "images/king-of-clubs.png",
//     },
//     {
//         id: 3,
//         name: "lady-of-clubs",
//         img: "images/lady-of-clubs.png",
//     },
//     {
//         id: 4,
//         name: "jack-of-clubs",
//         img: "images/jack-of-clubs.png",
//     },
//     {
//         id: 5,
//         name: "ten-of-clubs",
//         img: "images/ten-of-clubs.png",
//     },
//     {
//         id: 6,
//         name: "nine-of-clubs",
//         img: "images/nine-of-clubs.png",
//     },
//     {
//         id: 7,
//         name: "eight-of-clubs",
//         img: "images/eight-of-clubs.png",
//     },
//     {
//         id: 8,
//         name: "seven-of-clubs",
//         img: "images/seven-of-clubs.png",
//     },
//     {
//         id: 9,
//         name: "six-of-clubs",
//         img: "images/six-of-clubs.png",
//     },
//     {
//         id: 10,
//         name: "ace-of-diamonds",
//         img: "images/ace-of-diamonds.png",
//     },
//     {
//         id: 11,
//         name: "king-of-diamonds",
//         img: "images/king-of-diamonds.png",
//     },
//     {
//         id: 12,
//         name: "lady-of-diamonds",
//         img: "images/lady-of-diamonds.png",
//     },
//     {
//         id: 13,
//         name: "jack-of-diamonds",
//         img: "images/jack-of-diamonds.png",
//     },
//     {
//         id: 14,
//         name: "ten-of-diamonds",
//         img: "images/ten-of-diamonds.png",
//     },
//     {
//         id: 15,
//         name: "nine-of-diamonds",
//         img: "images/nine-of-diamonds.png",
//     },
//     {
//         id: 16,
//         name: "eight-of-diamonds",
//         img: "images/eight-of-diamonds.png",
//     },
//     {
//         id: 17,
//         name: "seven-of-diamonds",
//         img: "images/seven-of-diamonds.png",
//     },
//     {
//         id: 18,
//         name: "six-of-diamonds",
//         img: "images/six-of-diamonds.png",
//     },
//     {
//         id: 19,
//         name: "ace-of-hearts",
//         img: "images/ace-of-hearts.png",
//     },
//     {
//         id: 20,
//         name: "king-of-hearts",
//         img: "images/king-of-hearts.png",
//     },
//     {
//         id: 21,
//         name: "lady-of-hearts",
//         img: "images/lady-of-hearts.png",
//     },
//     {
//         id: 22,
//         name: "jack-of-hearts",
//         img: "images/jack-of-hearts.png",
//     },
//     {
//         id: 23,
//         name: "ten-of-hearts",
//         img: "images/ten-of-hearts.png",
//     },
//     {
//         id: 24,
//         name: "nine-of-hearts",
//         img: "images/nine-of-hearts.png",
//     },
//     {
//         id: 25,
//         name: "eight-of-hearts",
//         img: "images/eight-of-hearts.png",
//     },
//     {
//         id: 26,
//         name: "seven-of-hearts",
//         img: "images/seven-of-hearts.png",
//     },
//     {
//         id: 27,
//         name: "six-of-hearts",
//         img: "images/six-of-hearts.png",
//     },
//     {
//         id: 28,
//         name: "ace-of-spades",
//         img: "images/ace-of-spades.png",
//     },
//     {
//         id: 29,
//         name: "king-of-spades",
//         img: "images/king-of-spades.png",
//     },
//     {
//         id: 30,
//         name: "lady-of-spades",
//         img: "images/lady-of-spades.png",
//     },
//     {
//         id: 31,
//         name: "jack-of-spades",
//         img: "images/jack-of-spades.png",
//     },
//     {
//         id: 32,
//         name: "ten-of-spades",
//         img: "images/ten-of-spades.png",
//     },
//     {
//         id: 33,
//         name: "nine-of-spades",
//         img: "images/nine-of-spades.png",
//     },
//     {
//         id: 34,
//         name: "eight-of-spades",
//         img: "images/eight-of-spades.png",
//     },
//     {
//         id: 35,
//         name: "seven-of-spades",
//         img: "images/seven-of-spades.png",
//     },
//     {
//         id: 36,
//         name: "six-of-spades",
//         img: "images/six-of-spades.png",
//     },
// ];
// let cardData = [];
// function generateRandomCards() {
//     let cardListRandom = shuffledCardList.sort(() => Math.random() - 0.5);
//     for (let i = 0; i < 3; i++) {
//         cardData.push(cardListRandom[i]);
//     }
//     cardData = cardData.concat(cardData);
// }
// function createCard() {
//     const card = document.createElement("div");
//     card.classList.add("CARD");
//     const cardFront = document.createElement("div");
//     cardFront.classList.add("card-face", "card-face-front");
//     const cardBack = document.createElement("div");
//     cardBack.classList.add("card-face", "card-face-back");
//     card.addEventListener("click", function () {
//         card.classList.toggle("is-flipped");
//     });
// }
// function renderCards() {
//     cardData.forEach((cardEl) => {
//         createCard();
//     });
// }
// if ((window.application.challenge = "easy")) {
// }
// const shuffle = (cards) => {
//     let m = cards.length,
//         t,
//         i;
//     // Пока есть элементы для перемешивания
//     while (m) {
//         // Взять оставшийся элемент
//         i = Math.floor(Math.random() * m--);
//         // И поменять его местами с текущим элементом
//         t = cards[m];
//         cards[m] = cards[i];
//         cards[i] = t;
//     }
//     return cards;
// };
// // data.map(user => user.name).join(', ')


/***/ }),

/***/ "./cardGame/easyChallenge.ts":
/*!***********************************!*\
  !*** ./cardGame/easyChallenge.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardListData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardListData */ "./cardGame/cardListData.ts");
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import "./style.css";

function generatingEasyCards() {
    const container = document.querySelector(".app");
    const battleField = document.createElement("div");
    battleField.classList.add("battle-field");
    const scene = document.createElement("div");
    scene.classList.add("scene");
    let cardData = [];
    function generateRandomCards() {
        const cardListRandom = _cardListData__WEBPACK_IMPORTED_MODULE_0__["default"].sort(() => Math.random() - 0.5);
        for (let i = 0; i < 3; i++) {
            cardData.push(cardListRandom[i]);
        }
        cardData = cardData.concat(cardData);
    }
    function createCard(cardData) {
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
                if (window.application.pickedCards[0] ===
                    window.application.pickedCards[1]) {
                    window.application.renderScreen("winScreen");
                    clearInterval(window.application.timerPlaying);
                }
                if (window.application.pickedCards.length === 2) {
                    if (window.application.pickedCards[0] !==
                        window.application.pickedCards[1]) {
                        window.application.renderScreen("loseScreen");
                        clearInterval(window.application.timerPlaying);
                    }
                }
                if (window.application.pickedCards.length > 6) {
                    window.application.pickedCards = [];
                    alert("Начни игру заново, ты проиграл!");
                }
            }
            else {
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
    /* const CARD = document.createElement("div");
    CARD.classList.add("CARD");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-face", "card-face-front");

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-face", "card-face-back");

    CARD.addEventListener("click", function () {
        CARD.classList.toggle("is-flipped");
    });

    const CARDTWO = document.createElement("div");
    CARDTWO.classList.add("CARD");

    const CARDTWOFRONT = document.createElement("div");
    CARDTWOFRONT.classList.add("card-face", "card-face-front");

    const CARDTWOBACK = document.createElement("div");
    CARDTWOBACK.classList.add("card-face", "card-face-back");

    CARDTWO.addEventListener("click", function () {
        CARDTWO.classList.toggle("is-flipped");
    });

    const CARDTHREE = document.createElement("div");
    CARDTHREE.classList.add("CARD");

    const CARDTHREEFRONT = document.createElement("div");
    CARDTHREEFRONT.classList.add("card-face", "card-face-front");

    const CARDTHREEBACK = document.createElement("div");
    CARDTHREEBACK.classList.add("card-face", "card-face-back");

    CARDTHREE.addEventListener("click", function () {
        CARDTHREE.classList.toggle("is-flipped");
    });

    const CARDFOUR = document.createElement("div");
    CARDFOUR.classList.add("CARD");

    const CARDFOURFRONT = document.createElement("div");
    CARDFOURFRONT.classList.add("card-face", "card-face-front");

    const CARDFOURBACK = document.createElement("div");
    CARDFOURBACK.classList.add("card-face", "card-face-back");

    CARDFOUR.addEventListener("click", function () {
        CARDFOUR.classList.toggle("is-flipped");
    });

    const CARDFIVE = document.createElement("div");
    CARDFIVE.classList.add("CARD");

    const CARDFIVEFRONT = document.createElement("div");
    CARDFIVEFRONT.classList.add("card-face", "card-face-front");

    const CARDFIVEBACK = document.createElement("div");
    CARDFIVEBACK.classList.add("card-face", "card-face-back");

    CARDFIVE.addEventListener("click", function () {
        CARDFIVE.classList.toggle("is-flipped");
    });

    const CARDSIX = document.createElement("div");
    CARDSIX.classList.add("CARD");

    const CARDSIXFRONT = document.createElement("div");
    CARDSIXFRONT.classList.add("card-face", "card-face-front");

    const CARDSIXBACK = document.createElement("div");
    CARDSIXBACK.classList.add("card-face", "card-face-back");

    CARDSIX.addEventListener("click", function () {
        CARDSIX.classList.toggle("is-flipped");
    }); */
    container.appendChild(battleField);
    battleField.appendChild(scene);
    /* scene.appendChild(CARD); */
    /* scene.appendChild(CARDTWO);
    scene.appendChild(CARDTHREE);
    scene.appendChild(CARDFOUR);
    scene.appendChild(CARDFIVE);
    scene.appendChild(CARDSIX);
    CARD.appendChild(cardFront);
    CARD.appendChild(cardBack);
    CARDTWO.appendChild(CARDTWOFRONT);
    CARDTWO.appendChild(CARDTWOBACK);
    CARDTHREE.appendChild(CARDTHREEFRONT);
    CARDTHREE.appendChild(CARDTHREEBACK);
    CARDFOUR.appendChild(CARDFOURFRONT);
    CARDFOUR.appendChild(CARDFOURBACK);
    CARDFIVE.appendChild(CARDFIVEFRONT);
    CARDFIVE.appendChild(CARDFIVEBACK);
    CARDSIX.appendChild(CARDSIXFRONT);
    CARDSIX.appendChild(CARDSIXBACK); */
    // let randomCards = generateRandomCards();
    //     randomCards
    //     randomCards.forEach(element => {
    //         element.map((user) => user.name).join(", ");
    //         console.log(element);
    //     });
}
window.application.blocks["generateEasyCards"] = generatingEasyCards;
function renderScreenEasyChallenge() {
    const container = document.querySelector(".app");
    container.textContent = " ";
    const header = document.createElement("div");
    header.classList.add("header");
    const buttonTime = document.createElement("button");
    buttonTime.classList.add("btn", "timer-button");
    buttonTime.textContent = "старт/сбросить";
    let secs, now, timer, mins = 0;
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
    window.application.renderBlock("generateEasyCards", container);
}
window.application.screens["easy"] = renderScreenEasyChallenge;


/***/ }),

/***/ "./cardGame/hardChallenge.ts":
/*!***********************************!*\
  !*** ./cardGame/hardChallenge.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardListData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardListData */ "./cardGame/cardListData.ts");
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function generatingHardCards() {
    const container = document.querySelector(".app");
    const battleField = document.createElement("div");
    battleField.classList.add("battle-field");
    const scene = document.createElement("div");
    scene.classList.add("scene");
    let cardData = [];
    function generateRandomCards() {
        const cardListRandom = _cardListData__WEBPACK_IMPORTED_MODULE_0__["default"].sort(() => Math.random() - 0.5);
        for (let i = 0; i < 9; i++) {
            cardData.push(cardListRandom[i]);
        }
        cardData = cardData.concat(cardData);
    }
    function createCard(cardData) {
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
                if (window.application.pickedCards[0] ===
                    window.application.pickedCards[1]) {
                    window.application.renderScreen("winScreen");
                    clearInterval(window.application.timerPlaying);
                }
                if (window.application.pickedCards.length === 2) {
                    if (window.application.pickedCards[0] !==
                        window.application.pickedCards[1]) {
                        window.application.renderScreen("loseScreen");
                        clearInterval(window.application.timerPlaying);
                    }
                }
                if (window.application.pickedCards.length > 18) {
                    window.application.pickedCards = [];
                    alert("Начни игру заново, ты проиграл!");
                }
            }
            else {
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
    const container = document.querySelector(".app");
    container.textContent = " ";
    const header = document.createElement("div");
    header.classList.add("header");
    const buttonTime = document.createElement("button");
    buttonTime.classList.add("btn", "timer-button");
    buttonTime.textContent = "старт/сбросить";
    let secs, now, timer, mins = 0;
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


/***/ }),

/***/ "./cardGame/loseScreen.ts":
/*!********************************!*\
  !*** ./cardGame/loseScreen.ts ***!
  \********************************/
/***/ (() => {


/* eslint-disable no-undef */
function loseBlock(container) {
    const buttonToStart = document.createElement("button");
    buttonToStart.classList.add("btn");
    buttonToStart.textContent = "Играть снова";
    buttonToStart.addEventListener("click", () => {
        window.application.challenge = "";
        window.application.pickedCards = [];
        window.application.timerPlaying = "";
        window.application.status = "";
        window.application.renderScreen("start");
    });
    container.appendChild(buttonToStart);
}
window.application.blocks["loseBlock"] = loseBlock;
function loseScreen() {
    const container = document.querySelector(".app");
    container.textContent = " ";
    const block = document.createElement("div");
    block.classList.add("lastBlock");
    const emotion = document.createElement("img");
    emotion.classList.add("emotion");
    emotion.setAttribute("src", "static/lose.png");
    const h1 = document.createElement("h1");
    h1.classList.add("title", "msg");
    h1.textContent = "Вы проиграли!";
    const h2 = document.createElement("h2");
    h2.textContent = "Затраченное время:";
    h2.classList.add("time-block");
    const ciferblate = document.createElement("span");
    ciferblate.classList.add("ciferblate");
    ciferblate.textContent = `${window.application.status.textContent}`;
    container.appendChild(block);
    block.appendChild(emotion);
    block.appendChild(h1);
    block.appendChild(h2);
    block.appendChild(ciferblate);
    window.application.renderBlock("loseBlock", block);
}
window.application.screens["loseScreen"] = loseScreen;


/***/ }),

/***/ "./cardGame/mediumChallenge.ts":
/*!*************************************!*\
  !*** ./cardGame/mediumChallenge.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardListData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardListData */ "./cardGame/cardListData.ts");
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function generatingMediumCards() {
    const container = document.querySelector(".app");
    const battleField = document.createElement("div");
    battleField.classList.add("battle-field");
    const scene = document.createElement("div");
    scene.classList.add("scene");
    let cardData = [];
    function generateRandomCards() {
        const cardListRandom = _cardListData__WEBPACK_IMPORTED_MODULE_0__["default"].sort(() => Math.random() - 0.5);
        for (let i = 0; i < 6; i++) {
            cardData.push(cardListRandom[i]);
        }
        cardData = cardData.concat(cardData);
    }
    function createCard(cardData) {
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
                if (window.application.pickedCards[0] ===
                    window.application.pickedCards[1]) {
                    window.application.renderScreen("winScreen");
                    clearInterval(window.application.timerPlaying);
                }
                if (window.application.pickedCards.length === 2) {
                    if (window.application.pickedCards[0] !==
                        window.application.pickedCards[1]) {
                        window.application.renderScreen("loseScreen");
                        clearInterval(window.application.timerPlaying);
                    }
                }
                if (window.application.pickedCards.length > 12) {
                    window.application.pickedCards = [];
                    alert("Начни игру заново, ты проиграл!");
                }
            }
            else {
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
window.application.blocks["generateMediumCards"] = generatingMediumCards;
function renderScreenMediumChallenge() {
    const container = document.querySelector(".app");
    container.textContent = " ";
    const header = document.createElement("div");
    header.classList.add("header");
    const buttonTime = document.createElement("button");
    buttonTime.classList.add("btn", "timer-button");
    buttonTime.textContent = "старт/сбросить";
    let secs, now, timer, mins = 0;
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
    window.application.renderBlock("generateMediumCards", container);
}
window.application.screens["medium"] = renderScreenMediumChallenge;


/***/ }),

/***/ "./cardGame/startPage.ts":
/*!*******************************!*\
  !*** ./cardGame/startPage.ts ***!
  \*******************************/
/***/ (() => {


/* eslint-disable no-undef */
function renderStartButton(container) {
    const startButton = document.createElement("button");
    startButton.textContent = "Старт";
    startButton.classList.add("start-button", "btn");
    startButton.addEventListener("click", () => {
        if (window.application.challenge === "") {
            alert("Выберите уровень сложности!");
        }
        else {
            if (window.application.challenge === "easy") {
                window.application.renderScreen("easy");
            }
            else if (window.application.challenge === "medium") {
                window.application.renderScreen("medium");
            }
            else if (window.application.challenge === "hard") {
                window.application.renderScreen("hard");
            }
            else {
                console.log(`Ошибка, обновите страницу!`);
            }
        }
    });
    container.appendChild(startButton);
}
window.application.blocks["StartButton"] = renderStartButton;
function renderStartScreen() {
    const container = document.querySelector(".app");
    container.textContent = "";
    const menu = document.createElement("div");
    menu.classList.add("menu");
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Выбери сложность";
    const pickerChalenge = document.createElement("div");
    pickerChalenge.classList.add("picker-challenge");
    const buttonFirst = document.createElement("button");
    buttonFirst.classList.add("button", "FirstChallenge");
    buttonFirst.textContent = "1";
    buttonFirst.addEventListener("click", () => {
        window.application.challenge = "easy";
        buttonFirst.classList.remove("button");
        buttonFirst.classList.add("selected");
        if (buttonSecond.classList.contains("selected") ||
            buttonThird.classList.contains("selected")) {
            buttonSecond.classList.remove("selected");
            buttonThird.classList.remove("selected");
            buttonSecond.classList.add("button");
            buttonThird.classList.add("button");
        }
    });
    const buttonSecond = document.createElement("button");
    buttonSecond.classList.add("button", "SecondChallenge");
    buttonSecond.textContent = "2";
    buttonSecond.addEventListener("click", () => {
        window.application.challenge = "medium";
        buttonSecond.classList.remove("button");
        buttonSecond.classList.add("selected");
        if (buttonFirst.classList.contains("selected") ||
            buttonThird.classList.contains("selected")) {
            buttonFirst.classList.remove("selected");
            buttonThird.classList.remove("selected");
            buttonFirst.classList.add("button");
            buttonThird.classList.add("button");
        }
    });
    const buttonThird = document.createElement("button");
    buttonThird.classList.add("button", "ThirdChallenge");
    buttonThird.textContent = "3";
    buttonThird.addEventListener("click", () => {
        window.application.challenge = "hard";
        buttonThird.classList.remove("button");
        buttonThird.classList.add("selected");
        if (buttonFirst.classList.contains("selected") ||
            buttonThird.classList.contains("selected")) {
            buttonFirst.classList.remove("selected");
            buttonSecond.classList.remove("selected");
            buttonFirst.classList.add("button");
            buttonSecond.classList.add("button");
        }
    });
    container.appendChild(menu);
    menu.appendChild(title);
    menu.appendChild(pickerChalenge);
    pickerChalenge.appendChild(buttonFirst);
    pickerChalenge.appendChild(buttonSecond);
    pickerChalenge.appendChild(buttonThird);
    window.application.renderBlock("StartButton", menu);
}
window.application.screens["start"] = renderStartScreen;
window.application.renderScreen("start");


/***/ }),

/***/ "./cardGame/winScreen.ts":
/*!*******************************!*\
  !*** ./cardGame/winScreen.ts ***!
  \*******************************/
/***/ (() => {


// import Img from "./image/win.png";
/* eslint-disable no-undef */
function winBlock(container) {
    const buttonToStart = document.createElement("button");
    buttonToStart.classList.add("btn");
    buttonToStart.textContent = "Играть снова";
    buttonToStart.addEventListener("click", () => {
        window.application.challenge = "";
        window.application.pickedCards = [];
        window.application.timerPlaying = "";
        window.application.status = "";
        window.application.renderScreen("start");
    });
    container.appendChild(buttonToStart);
}
window.application.blocks["winBlockButton"] = winBlock;
function winScreen() {
    const container = document.querySelector(".app");
    container.textContent = " ";
    const block = document.createElement("div");
    block.classList.add("lastBlock");
    const emotion = document.createElement("img");
    emotion.classList.add("emotion");
    emotion.setAttribute("src", `static/win.png`);
    const h1 = document.createElement("h1");
    h1.classList.add("title", "msg");
    h1.textContent = "Вы выиграли!";
    const h2 = document.createElement("h2");
    h2.textContent = "Затраченное время:";
    h2.classList.add("time-block");
    const ciferblate = document.createElement("span");
    ciferblate.classList.add("ciferblate");
    ciferblate.textContent = `${window.application.status.textContent}`;
    container.appendChild(block);
    block.appendChild(emotion);
    block.appendChild(h1);
    block.appendChild(h2);
    block.appendChild(ciferblate);
    window.application.renderBlock("winBlockButton", block);
}
window.application.screens["winScreen"] = winScreen;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./cardGame/index.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application */ "./cardGame/application.ts");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./cardGame/style.css");
/* harmony import */ var _startPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startPage */ "./cardGame/startPage.ts");
/* harmony import */ var _startPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_startPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _easyChallenge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./easyChallenge */ "./cardGame/easyChallenge.ts");
/* harmony import */ var _mediumChallenge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mediumChallenge */ "./cardGame/mediumChallenge.ts");
/* harmony import */ var _hardChallenge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hardChallenge */ "./cardGame/hardChallenge.ts");
/* harmony import */ var _winScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./winScreen */ "./cardGame/winScreen.ts");
/* harmony import */ var _winScreen__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_winScreen__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _loseScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loseScreen */ "./cardGame/loseScreen.ts");
/* harmony import */ var _loseScreen__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_loseScreen__WEBPACK_IMPORTED_MODULE_7__);









})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map