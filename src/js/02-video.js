import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');

const player = new Player('vimeo-player');

valueTimeVideo();

const onPlay = throttle(data => {
  const valueTime = Math.round(data.seconds);
  localStorage.setItem('videoplayer-current-time', JSON.stringify(valueTime));
  console.log(valueTime);
}, 1000);

player.on('timeupdate', onPlay);

function valueTimeVideo() {
  const alert = 'Нужно ввести значение ';
  const valueVideo = localStorage.getItem('videoplayer-current-time');
  if (valueVideo) {
    player.setCurrentTime(valueVideo);
  }
  localStorage.removeItem('videoplayer-current-time');
}
