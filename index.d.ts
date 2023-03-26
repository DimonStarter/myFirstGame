// index.d.ts

export {};

// declare global {
//     interface Window {
//         application: {
//             blocks: {
//                 [key: string]: (container: HTMLElement) => void;
//             };

//             screens: {
//                 [key: string]: () => void;
//             };

//             renderScreen: (screenName: string) => void;
//             renderBlock: (blockName: string, container: HTMLElement) => void;

//             challenge: string;
//             status: string;
//             timerPlaying: any;
//             generatedCards: any;
//             pickedCards: any;
//         };
//     }
//     interface application {
//         timerPlaying: any;
//     }
//     interface module {
//         Img: "*.png";
//     }
// }

// declare module "*.png";

declare global {
    interface Window {
        application: any;
    }

    interface module {
        Img: "*.png";
    }
}
