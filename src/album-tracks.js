const markupTemplate = track => `
    <div class="music" data-track-preview="${track.preview_url}">
      <p class="music-number">${track.track_number}</p>
      <p class="music-title">${track.name}</p>
      <p class="music-duration">${track.duration_ms}</p>
    </div>
  `;

function renderAlbumTracks(element, data) {
  element.innerHTML = data.map(track => markupTemplate(track)).join('');
}
export default renderAlbumTracks;
