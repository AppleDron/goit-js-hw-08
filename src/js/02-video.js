import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');

const player = new Player('vimeo-player');

player.ready().then(() => {
  const timeUpdate = _.throttle(() => {
    const currentTime = player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000);

  player.on('timeupdate', timeUpdate);

  const savedTime = localStorage.getItem('videoplayer-current-time');

  if (savedTime) {
    const currentTime = parseFloat(savedTime);
    player.getDuration().then(duration => {
      if (currentTime >= 0 && currentTime < duration) {
        player.setCurrentTime(currentTime);
      } else {
        localStorage.removeItem('videoplayer-current-time');
      }
    });
  }
});
