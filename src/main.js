import SpotifyWrapper from 'spotfy-wrapper';
import renderList from '../src/album-list';
import renderAlbumInfo from '../src/album-info';

const spotifyWrapper = new SpotifyWrapper({
  token: 'BQA3E863goBQ08Npcehm4zNLo6yFsJZl43hZ1nz7YDectoQ9-w2wcq0N5VLLvrnA-do1Sa1gBKZPy_iFC_STW3oYhF6An1y_bjtEdWsKtu3H78xI3ow5p9QW4R_glbixyWGFPWRglivYnG0',
});

const albums = spotifyWrapper.search.albums('Strokes');
const albumList = document.getElementById('album-list');
albums.then(data => renderList(albumList, data.albums.items));

const album = spotifyWrapper.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
const albumInfo = document.getElementById('album-info');
album.then(data => renderAlbumInfo(albumInfo, data));
