import throttle from 'lodash.throttle';

// пошук елемента (плеер)
const iframeRef = document.querySelector('iframe');

// створюємо копію обьєкта бнручи за основу знайдений елемент
const player = new Vimeo.Player(iframeRef);

// включення прослуховування події в плеєрі
// де
// timeupdate - назва події
// throttle - функція яка оновлює сховище кожні 1000ms
player.on('timeupdate', throttle(onPlay, 1000));


function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));