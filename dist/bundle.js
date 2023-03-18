/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*******************************!*\
  !*** ./cardGame/startPage.js ***!
  \*******************************/
/* eslint-disable no-undef */

function renderStartButton(container) {
    const startButton = document.createElement("button");

    startButton.textContent = "Старт";
    startButton.classList.add("start-button", "btn");

    startButton.addEventListener("click", () => {
        if (window.application.challenge === "") {
            alert("Выберите уровень сложности!");
        } else {
            if (window.application.challenge === "easy") {
                window.application.renderScreen("easy");
            } else if (window.application.challenge === "medium") {
                window.application.renderScreen("medium");
            } else if (window.application.challenge === "hard") {
                window.application.renderScreen("hard");
            } else {
                console.log(`Ошибка, обновите страницу!`);
            }
        }
    });

    container.appendChild(startButton);
}

window.application.blocks["StartButton"] = renderStartButton;

function renderStartScreen() {
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

        if (
            buttonSecond.classList.contains("selected") ||
            buttonThird.classList.contains("selected")
        ) {
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

        if (
            buttonFirst.classList.contains("selected") ||
            buttonThird.classList.contains("selected")
        ) {
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

        if (
            buttonFirst.classList.contains("selected") ||
            buttonThird.classList.contains("selected")
        ) {
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

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***********************************!*\
  !*** ./cardGame/easyChallenge.js ***!
  \***********************************/
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function generatingEasyCards(container) {
    const battleField = document.createElement("div");
    battleField.classList.add("battle-field");

    const scene = document.createElement("div");
    scene.classList.add("scene");

    let cardData = [];

    function generateRandomCards() {
        let cardListRandom = shuffledCardList.sort(() => Math.random() - 0.5);
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
            card.classList.toggle("is-flipped");
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
    container.textContent = " ";

    const header = document.createElement("div");
    header.classList.add("header");

    const buttonTime = document.createElement("button");
    buttonTime.classList.add("btn", "timer-button");
    buttonTime.textContent = "старт/сбросить";

    let secs,
        now,
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
    }

    buttonTime.onclick = function () {
        now = Date.now();
        mins = 0;
        timer = setInterval(time);
    };

    const tryAgainButton = document.createElement("button");
    tryAgainButton.classList.add("btn", "try-again-button");
    tryAgainButton.textContent = "Начать заново";

    tryAgainButton.addEventListener("click", () => {
        window.application.challenge = "";
        window.application.renderScreen("start");
    });

    container.appendChild(header);
    header.appendChild(buttonTime);
    header.appendChild(timerField);
    header.appendChild(tryAgainButton);

    window.application.renderBlock("generateEasyCards", container);
}

window.application.screens["easy"] = renderScreenEasyChallenge;

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*************************************!*\
  !*** ./cardGame/mediumChallenge.js ***!
  \*************************************/
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function generatingMediumCards(container) {
    const battleField = document.createElement("div");
    battleField.classList.add("battle-field");

    const scene = document.createElement("div");
    scene.classList.add("scene");

    let cardData = [];

    function generateRandomCards() {
        let cardListRandom = shuffledCardList.sort(() => Math.random() - 0.5);
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
            card.classList.toggle("is-flipped");
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
    container.textContent = " ";

    const header = document.createElement("div");
    header.classList.add("header");

    const buttonTime = document.createElement("button");
    buttonTime.classList.add("btn", "timer-button");
    buttonTime.textContent = "старт/сбросить";

    let secs,
        now,
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
    }

    buttonTime.onclick = function () {
        now = Date.now();
        mins = 0;
        timer = setInterval(time);
    };

    const tryAgainButton = document.createElement("button");
    tryAgainButton.classList.add("btn", "try-again-button");
    tryAgainButton.textContent = "Начать заново";

    tryAgainButton.addEventListener("click", () => {
        window.application.challenge = "";
        window.application.renderScreen("start");
    });

    container.appendChild(header);
    header.appendChild(buttonTime);
    header.appendChild(timerField);
    header.appendChild(tryAgainButton);

    window.application.renderBlock("generateMediumCards", container);
}

window.application.screens["medium"] = renderScreenMediumChallenge;

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***********************************!*\
  !*** ./cardGame/hardChallenge.js ***!
  \***********************************/
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function generatingHardCards(container) {
    const battleField = document.createElement("div");
    battleField.classList.add("battle-field");

    const scene = document.createElement("div");
    scene.classList.add("scene");

    let cardData = [];

    function generateRandomCards() {
        let cardListRandom = shuffledCardList.sort(() => Math.random() - 0.5);
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
            card.classList.toggle("is-flipped");
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
    container.textContent = " ";

    const header = document.createElement("div");
    header.classList.add("header");

    const buttonTime = document.createElement("button");
    buttonTime.classList.add("btn", "timer-button");
    buttonTime.textContent = "старт/сбросить";

    let secs,
        now,
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
    }

    buttonTime.onclick = function () {
        now = Date.now();
        mins = 0;
        timer = setInterval(time);
    };

    const tryAgainButton = document.createElement("button");
    tryAgainButton.classList.add("btn", "try-again-button");
    tryAgainButton.textContent = "Начать заново";

    tryAgainButton.addEventListener("click", () => {
        window.application.challenge = "";
        window.application.renderScreen("start");
    });

    container.appendChild(header);
    header.appendChild(buttonTime);
    header.appendChild(timerField);
    header.appendChild(tryAgainButton);

    window.application.renderBlock("generateHardCards", container);
}

window.application.screens["hard"] = renderScreenHardChallenge;

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*********************************!*\
  !*** ./cardGame/lib/request.js ***!
  \*********************************/
/* eslint-disable no-unused-vars */
const noop = () => {};
const NO_PARAMS = {};
const NO_HEADERS = {};
const OK_200 = [200];

function request({
    method = "GET", // тип запроса
    url, // url на который шлем запрос
    params = NO_PARAMS, // список query параметров
    headers = NO_HEADERS, // список заголовков запроса
    body, // тело запроса, данные которые мы отправляем
    responseType = "json", // тип ответа
    requestType = "json", // тип запроса при отправке данных
    okResponse = OK_200, // коды статусов обрабатываемых ответов
    checkStatusInResponse = false, // флаг для проверки статуса ответа
    onSuccess = noop, // функция обработки успешного ответа
    onError = noop, // функция обработки сетевой ошибки
}) {
    // создали объект XMLHttpRequest
    const req = new XMLHttpRequest();

    // формируем строку query параметров вида param1=value1&param2=value2...
    const urlParams = new URLSearchParams(params);
    const queryString = urlParams.toString();

    // конфигурация запроса перед отправкой, устанавливаем метод,
    // url и добавляем query параметры, если они были переданы в поле params
    req.open(method, url + (queryString ? `?${queryString}` : ""));

    // устанавливаем заголовки, если был передан список заголовков в поле headers
    Object.keys(headers).forEach((key) => {
        req.setRequestHeader(key, headers[key]);
    });

    // устанавливаем тип ответа, по умолчанию ожидаем получить json
    req.responseType = responseType;

    // Функция обработки успешного запроса
    req.onload = function (event) {
        const target = event.target;
        // проверяем коды статусов ответа, на соответствие полю okResponse
        // если пришел, какой-то другой код, то обрабатываем ответ как ошибочный
        if (!okResponse.includes(target.status)) {
            onError(target.statusText);
            return;
        }

        // проверяем статус в ответе
        if (checkStatusInResponse && target.response.status !== "ok") {
            onError(target.statusText);
            return;
        }

        // передаем данные ответа в функцию onSuccess
        onSuccess(target.response);
    };

    // функция обработки сетевой ошибки
    req.onerror = function () {
        onError();
    };

    // формируем тело запроса(данные) для отправки на сервер
    let dataBody = body;

    // устанавливаем заголовки и формат отправки данных
    // в зависимости от типа запроса
    if (requestType === "urlencoded") {
        req.setRequestHeader(
            "content-type",
            "application/x-www-form-urlencoded"
        );
        const bodyParams = new URLSearchParams(body);
        dataBody = bodyParams.toString();
    }

    if (requestType === "json") {
        req.setRequestHeader("Content-type", "application/json");
        dataBody = JSON.stringify(body);
    }

    // отправляем запрос вместе с данными
    req.send(dataBody);
}

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./cardGame/style.css ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map