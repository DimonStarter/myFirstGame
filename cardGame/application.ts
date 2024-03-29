window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName: string) {
        window.application.screens[screenName]();
    },
    renderBlock: function (
        blockName: string,
        container: Element,
        result?: string
    ) {
        window.application.blocks[blockName](container, result);
    },
};

window.application.challenge = "";
window.application.status = "";
window.application.timerPlaying = "";
window.application.generatedCards = "";
window.application.pickedCards = [];
