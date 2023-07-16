import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');

const player = new Player('vimeo-player');
const VIDEO_KEY = 'videoplayer-current-time';

valueTimeVideo();

const onPlay = throttle(setTimeout, 1000);

function setTimeout(data) {
  const currentTime = data.seconds;
  localStorage.setItem(VIDEO_KEY, JSON.stringify(currentTime));
}

player.on('timeupdate', onPlay);

function valueTimeVideo() {
  const valueVideo = localStorage.getItem(VIDEO_KEY);
  player.setCurrentTime(valueVideo || 0);
}
