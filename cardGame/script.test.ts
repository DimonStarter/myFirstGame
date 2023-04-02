/* eslint-disable @typescript-eslint/no-var-requires */
// import { describe, expect, test } from "@jest/globals";

import { generateRandomEasyCards } from "./easyChallenge";
import { generateRandomMediumCards } from "./mediumChallenge";
import { generateRandomHardCards } from "./hardChallenge";

describe("проверка легкого уровня сложности игры", () => {
    test("should be true length of Cards ", () => {
        // подготовка
        const expercted = 6;

        // действие
        const testsCards = generateRandomEasyCards();

        // сравнение
        expect(testsCards.length).toBe(expercted);
    });
});

describe("проверка среднего уровня сложности игры", () => {
    test("should be true length of Cards ", () => {
        // подготовка
        const expercted = 12;

        // действие
        const testsCards = generateRandomMediumCards();

        // сравнение
        expect(testsCards.length).toBe(expercted);
    });
});

describe("проверка тяжелого уровня сложности игры", () => {
    test("should be true length of Cards ", () => {
        // подготовка
        const expercted = 18;

        // действие
        const testsCards = generateRandomHardCards();

        // сравнение
        expect(testsCards.length).toBe(expercted);
    });
});
