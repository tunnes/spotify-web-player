/* eslint-disable */

import { expect } from 'chai';
import spotifyWrapper from '../src/spotify';

describe("Spotify Wrapper", () => {
  describe("Smoke", () => {
    it("Should `spotifyWrapper` is an object", () => {
      expect(spotifyWrapper).to.be.a("object");
    });
    it("Should `spotifyWrapper.search` to exist", () => {
      expect(spotifyWrapper.search).to.exist;
    });
    it("Should `spotifyWrapper.album` to exist", () => {
      expect(spotifyWrapper.album).to.exist;
    });
  });
});
