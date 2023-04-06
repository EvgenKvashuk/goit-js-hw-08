import Player from '@vimeo/player';
import { functions } from 'lodash';
import throttle from 'lodash.throttle';
// ======================================================================================================================================================
const iframeRef = document.querySelector('iframe');
const player = new Vimeo.Player(iframeRef);
// ======================================================================================================================================================
player.setMuted(true);
// ======================================================================================================================================================

// додаємо слухач подій. data - js о'єкт
const refreshPage = function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

// слухач події оновлення часу (timeupdate) який спрацьовує з переодичністю 1 секунда
player.on('timeupdate', throttle(refreshPage, 1000));

// зміна яка дорівнює округленим секундам які зберегли в локальне сховище
const getSeconds = Math.round(localStorage.getItem('videoplayer-current-time'));

// перевіріяємо локальне сховище використовуючи логічний оператор, та відновлюємо прогрес перегляду відео, задавши значення з локального сховища
player.setCurrentTime(getSeconds || 0);

console.log(getSeconds);