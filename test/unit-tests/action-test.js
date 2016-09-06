'use strict';
// const assert = require('assert');
const assert = require('chai').assert;
const Action = require('../../lib/objects/action');
const Goal = require('../../lib/objects/goal');

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

    it('should return .id if start is called', function() {
      let action = new Action;
      let time = Date.now();
      action.start(time);
      assert.equal(action.startTime, action.start());
    });

    it('should add an action object onto the goal array', function() {
      let goal = new Goal();
      let action = new Action();
      action.add();
      assert.equal(goal.length, 1);
    });
  });
});
