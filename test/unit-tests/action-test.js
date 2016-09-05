'use strict';
// const assert = require('assert');
const assert = require('chai').assert;
const Action = require('../../lib/objects/action');

describe('our test bundle', function() {
  it('should work', function() {
    assert(true);
  });

  it('should be a function', function() {
    assert.isFunction(Action);
  });
});

describe('Action', function() {

    beforeEach(function() {
      this.rightNow = Date.now();
      this.dateNow = Date.now;
      Date.now = () => this.rightNow;
    });

    afterEach(function() {
      Date.now = this.dateNow;
    });

  context('action constructor', function(){
    let action = new Action();

    it('should return .startTime if .start is called', function() {
      // this is not functioning properly
      let time = Date.now();
      action.start;
      assert.equal(action.startTime, action.start);
    });

    it('should return .scheduled if the scheduled method is called', function() {
      let duration = 20;
      action.scheduled;
      assert.equal(action.scheduledTime, action.scheduled);
    });
  });
});
