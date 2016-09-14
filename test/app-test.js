var expect = require('chai').expect;
const React  = require('react');
const Application =  require('../lib/components/application');
const GoalRoom = require('../lib/components/GoalRoom');
const SignIn = require('../lib/components/SignIn');
import { shallow, mount, render } from 'enzyme';
require('locus');

describe('application.js',function(){

  it('should render the Goal Room',function(){
    const wrapper = shallow(<Application />);
    expect(wrapper.contains(<GoalRoom />)).to.equal(true);
  });



});
