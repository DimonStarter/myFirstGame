// import Img from "./image/win.png";

/* eslint-disable no-undef */

function winBlock(container: Element) {
    function toResetSettings() {
        window.application.challenge = "";
        window.application.status = "";
        window.application.timerPlaying = "";
        window.application.generatedCards = "";
        window.application.pickedCards = [];
    }
    const buttonToStart = document.createElement("button");
    buttonToStart.classList.add("btn");
    buttonToStart.textContent = "Играть снова";

    buttonToStart.addEventListener("click", () => {
        toResetSettings();
        window.application.renderScreen("start");
    });

    container.appendChild(buttonToStart);
}

window.application.blocks["winBlockButton"] = winBlock;

function winScreen() {
    const container: HTMLElement = document.querySelector(".app")!;
    container.textContent = " ";

    const block: Element = document.createElement("div");
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
