import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import "isomorphic-fetch"

import App from './App'

describe('App file', () => {
    it('should render', () => {
        const component = shallow(<App/>);
        
        expect(component).toMatchSnapshot();
      });
  });