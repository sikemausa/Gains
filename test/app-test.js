var expect = require('chai').expect;
const React  = require('react');
const Application =  require('../lib/components/application');
const GoalRoom = require('../lib/components/GoalRoom');
const SignIn = require('../lib/components/SignIn');
import { shallow, mount, render } from 'enzyme';
require('locus');

describe('Application',function(){

  it('renders button text', function(){
    const wrapper = render(<Application/>);
    expect(wrapper.text()).to.contain('Get Swoll');
  });

  it('renders the Application', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find('.Application')).to.have.length(1);
  });

  it('renders sign-in button if signed out', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find('.not-logged-in')).to.have.length(1);
  });

  it('doesnt render any user info when signed out', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find('.logged-in')).to.have.length(0);
  });

  it('doesnt render the Goal Room when signed out', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find('.GoalRoom')).to.have.length(0);
  });

  it('defaults to logged out', function(){
    const wrapper = shallow(<Application />);
    expect(wrapper.state().user).to.equal(null);
  });
});
