import React, { Component } from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import "isomorphic-fetch"

import TableHeader from './TableHeader';

describe('TableHeader', () => {

    it('should render', () => {
        const table = shallow(<TableHeader/>);
        expect(table).toMatchSnapshot();
      });

  });