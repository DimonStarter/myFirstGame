    const section = document.querySelector('.content');
    const title = section.querySelector('.title');
    const gameLabel = section.querySelector('.game__login');
    const loginScreenGameInput = section.querySelector('.loginScreen__input');
    const loginScreenGameButton = section.querySelector('.loginScreen__button');
    const lobbyScreenPlayButton = section.querySelector('.lobbyScreen__button');

    const backURL = 'https://skypro-rock-scissors-paper.herokuapp.com/';

    const pathname = location.pathname.split('/').pop();
    let jsonFilePath = '';
    if (pathname === '') {
        jsonFilePath = 'start.json';
    } else {
        jsonFilePath = `${pathname.slice(0, -5)}.json`;
    }
    console.log(jsonFilePath);

    document.addEventListener('DOMContentLoaded', () => {
        request ({
            url: 'start.json',
            onSuccess: (data) => {
                console.log(data);
                title.textContent = data.title;
                gameLabel.textContent = data.game__login;
                },
            });
    });

    
    loginScreenGameButton.addEventListener('click', () => {
        if (loginScreenGameInput.value) {
            console.log(loginScreenGameInput.value);
            const login = loginScreenGameInput.value;
            window.application.login = login;
            request({
                url: `${backURL}login`,
                params: {
                    login,
                },
                onSuccess: (data) => {
                    if (data.status === 'ok') {
                        console.log(data.token);
                        const token = data.token;
                        window.application.token = token;
                        request({
                            url: `${backURL}player-status`,
                            params: {
                                token,
                            },
                            onSuccess: (data) => {
                                console.log(data);

                                if (data.status === 'ok') {
                                    if (data['player-status'].status === 'lobby') {
                                        window.application.renderScreen('lobby');  
                                    } else {
                                        window.application.idMatch = data['player-status'].game.id;
                                        window.application.renderScreen('YourMove');
                                    }
                                } else {
                                    console.warn('Не удалось получить статус игрока');
                                }

                                
                            }
                        });
                    } else {
                        console.warn('Не удалось авторизоваться!');
                    }
                    
                },
            });
            } else {
                request({
                url: `${backURL}login`,
                onSuccess: (data) => {
                    alert(`${data.status}`)
                    },
                });
            }
        });

   