'use strict';

// const assert = require('assert');
const assert = require('chai').assert;
const Goal = require('../../lib/objects/goal');

describe('Goal', function() {
  context('goal constructor', function() {
    it('should create a new object', function() {
      var goal = new Goal;
      assert.isObject(goal);
    });
  });
  context('goal methods', function() {
    it('should have a function called add action that adds a new action to the actions array', function() {
      var goal = new Goal;
      goal.addAction();
      assert.equal(goal.actions.length, 1);
      goal.addAction();
      assert.equal(goal.actions.length, 2);
    });

    // it('should have a function called remove action that removes an action from the ', )
  });
});
