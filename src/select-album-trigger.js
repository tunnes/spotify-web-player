import spotifyWrapper from './spotfy-wrapper';
import renderAlbumInfo from './album-info';
import renderAlbumTracks from './album-tracks';

const albumItem = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');

const tracksList = document.getElementById('album-tracks');


function makeRequest(ID) {
  spotifyWrapper.album.getAlbum(ID)
    .then(data => renderAlbumInfo(albumInfo, data))
    .then(data => renderAlbumTracks(tracksList, data.tracks.items));
}

export default function selectAlbumTrigger() {
  albumItem.addEventListener('click', (e) => {
    makeRequest(e.target.getAttribute('data-album-id'));
  });
}
