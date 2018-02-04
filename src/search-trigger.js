import spotifyWrapper from './spotfy-wrapper';
import renderAlbums from '../src/album-list';

const albumList = document.getElementById('album-list');
const serachForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

export default function searchTrigger() {
  serachForm.addEventListener('submit', (event) => {
    event.preventDefault();
    spotifyWrapper.search.albums(searchInput.value)
      .then(data => renderAlbums(albumList, data.albums.items));
  });
}
