import SpotifyWrapper from 'spotfy-wrapper';
import renderList from '../src/album-list';
import renderAlbumInfo from '../src/album-info';
import renderAlbumTracks from '../src/album-tracks';

const spotifyWrapper = new SpotifyWrapper({
  token: 'BQBn6DDqNhUsDzHTaiFQDxVzS98UIV2oPPOA_wG3Evq4ABbwcUIALDZ1DJAeJbBRldgWSi1pomjGXiFOkARQvDBlJmMm3ls-9mTZQWu_yfS85BK2_ztM9j5S7N2zxBUqcw3Pjd1vHHWJ1ms',
});

const albums = spotifyWrapper.search.albums('Strokes');
const albumList = document.getElementById('album-list');
albums.then(data => renderList(albumList, data.albums.items));

const album = spotifyWrapper.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
const albumInfo = document.getElementById('album-info');
const tracksList = document.getElementById('album-tracks');
album
  .then(data => renderAlbumInfo(albumInfo, data))
  .then(data => renderAlbumTracks(tracksList, data.tracks.items));

