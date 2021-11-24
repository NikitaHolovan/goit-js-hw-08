import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = "videoplayer-current-time";

const onPlay = function(data) {};
player.on('play', onPlay);

player.on('timeupdate', throttle(timeUpdateNow, 1000));
function timeUpdateNow(e) {
    localStorage.setItem(currentTime, e.seconds);
}

const saveCurrentTime = localStorage.getItem(currentTime);
if (saveCurrentTime) {
    player.setCurrentTime(saveCurrentTime)
    console.log(saveCurrentTime);
    localStorage.removeItem(currentTime);
}