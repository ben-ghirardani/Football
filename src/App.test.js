import React, { Component } from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import "isomorphic-fetch"

import App from './App'

describe('App render', () => {

    it('should render', () => {
        const component = shallow(<App/>);
        expect(component).toMatchSnapshot();
      });

  });

  describe('App function tests', () => {

    // beforeEach mount App?
    // afterEach unmount App?

    it('switchViewComponent should update state', () => {
        let wrapper = mount(<App/>);
        wrapper.setState({display: null});
        wrapper.instance().switchViewComponent('testView');
        const displayState = wrapper.state('display')
        expect(displayState).toBe('testView');
      });
    
    it('getTeamNameFromTableRow updates State - display', () => {
        let wrapper = mount(<App/>);
        wrapper.setState({display: null});
        wrapper.instance().getTeamNameFromTableRow('Arsenal');
        const teamNameState = wrapper.state('display')
        expect(teamNameState).toBe('teamSelected');
      });

      it('getTeamNameFromTableRow updates State - lastUsedTeamName', () => {
        let wrapper = mount(<App/>);
        wrapper.setState({lastUsedTeamName: null});
        wrapper.instance().getTeamNameFromTableRow('Arsenal');
        const teamNameState = wrapper.state('lastUsedTeamName');
        expect(teamNameState).toBe('Arsenal');
      });

      it('getMatchID updates State - singleMatchID', () => {
        let wrapper = mount(<App/>);
        wrapper.setState({singleMatchID: null});
        wrapper.instance().getMatchID(123);
        const singleMatchIDState = wrapper.state('singleMatchID');
        expect(singleMatchIDState).toBe(123);
      });

      

  });