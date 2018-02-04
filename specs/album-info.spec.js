/* eslint-disable */
  import 'jsdom-global/register'

  import { expect } from 'chai';

  import renderAlbumInfo from '../src/album-info';

  describe("Album Info", () => {
    const responseData = {
      "album_type" : "album",
      "artists" : [ {
        "name" : "Incubus",
      } ],
      "id" : "6peEdPVO73WtgGah5sEhX4",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16",
        "width" : 64
      } ],
      "name" : "The Essential Incubus",
      "type" : "album",
      "tracks": {
        "total": 18
      }
    };

    const markup = `
      <img class="album-image" src="${responseData.images[0].url}" alt="${responseData.name}">
      <p class="album-title">${responseData.name}</p>
      <p class="album-artist">${responseData.artists[0].name}</p>
      <p class="album-counter">${responseData.tracks.total} Músicas</p>
    `;

    it("Should `renderAlbumInfo` is an function", () => {
      expect(renderAlbumInfo).to.be.a('function');
    });

    it("Should create and append the markup when given the correct data", () => {
      const element = document.createElement('div');
      renderAlbumInfo(element, responseData);
      expect(element.innerHTML).to.be.eql(markup);
    });

    it("Should `renderAlbumInfo` return data", () => {
      let element = document.createElement('div');
      let functionReturns = renderAlbumInfo(element, responseData);
      expect(functionReturns).to.be.eql(responseData);
    });
});
