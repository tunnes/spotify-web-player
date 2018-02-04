/* eslint-disable */
import 'jsdom-global/register'

import { expect } from 'chai';
import renderAlbumTracks from '../src/album-tracks';

describe("Album tracks", () => {
  const responseData = [
    {
      "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number": 1,
      "name": "Around The World",
      "duration_ms": 238733
    },
    {
      "preview_url": "https://p.scdn.co/mp3-preview/ab3d501c5ffbf560e94094f76cd36d874a26e941?cid=8897482848704f2a8f8d7c79726a70d4",
      "track_number": 1,
      "name": "Around The World",
      "duration_ms": 238733
    }
  ];

  const marckup = `
    <div class="music" data-track-preview="${responseData[0].preview_url}">
      <p class="music-number">${responseData[0].track_number}</p>
      <p class="music-title">${responseData[0].name}</p>
      <p class="music-duration">${responseData[0].duration_ms}</p>
    </div>
  `; 
  
  it("Should 'renderAlbumTracks' exist", () => {
    expect(renderAlbumTracks).to.exist;
  });

  it("Should 'renderAlbumTracks' is an function", () => {
    expect(renderAlbumTracks).to.be.a('function');
  }); 

  it("Should 'renderAlbumTracks' returns a correct markup", () => {
    let element = document.createElement('div');
    renderAlbumTracks(element, [responseData[0]]);
    expect(element.innerHTML).to.be.eql(marckup);
  });
  it("Should 'renderAlbumTracks' returns a correct markup (with multiples tracks)", () => {
    let element = document.createElement('div');
    renderAlbumTracks(element, responseData);
    expect(element.innerHTML).to.be.eql(marckup + marckup);
  });
});

