/* eslint-disable */
import 'jsdom-global/register'

import { expect } from 'chai';

import renderList from '../src/album-list';

describe('Album List', () => {
  const reponseData = [
    {
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
    },
    {
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
    }    
  ];
  const markup = `
    <div class="list-item">
      <img src="${reponseData[0].images[2].url}" alt="${reponseData[0].name}" class="list-image">
      <div class="list-description">
        <p class="list-title">${reponseData[0].name}</p>
        <p class="list-subtitle">${reponseData[0].artists[0].name}</p>
      </div>
    </div>`;
      
  it("Should `renderList` is an function", () => {
    expect(renderList).to.be.a('function');
  });
  it("Should `renderList` returns a correct markup to append in target element", () => {
    let element = document.createElement("div");
    renderList(element, [reponseData[0]]);
    expect(element.innerHTML).to.be.equal(markup);
  });
  it("Should `renderList` returns a correct markup to append in target element (with multiple data)", () => {
    let element = document.createElement("div");
    renderList(element, reponseData);
    let markupList = markup + markup
    expect(element.innerHTML).to.be.eql(markupList);
  });
});
