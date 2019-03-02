import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import BackButton from './BackButton';

// onClick in <BackButton> uses functions from App passed as props so test them there
describe('BackButton', () => {
    it('should render', () => {
        const component = shallow(<BackButton/>);
        
        expect(component).toMatchSnapshot();
      });
  });