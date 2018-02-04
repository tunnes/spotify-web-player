/* eslint-disable */

import { expect } from 'chai';
import convertToHumanTime from '../src/convert-to-human-time';

describe("Convert to human time", () => {
  it("Should receive 0ms and convert to 0:00", () => {
    let humanizedTime = convertToHumanTime(0);
    expect(humanizedTime).to.be.eql('0:00');
  });
  
  it("Should receive 1000ms and convert to 0:00", () => {
    let humanizedTime = convertToHumanTime(1000);
    expect(humanizedTime).to.be.eql('0:01');    
  });

  it("Should receive 60000ms and convert to 0:00", () => {
    let humanizedTime = convertToHumanTime(60000);
    expect(humanizedTime).to.be.eql('1:00');    
  });
});
