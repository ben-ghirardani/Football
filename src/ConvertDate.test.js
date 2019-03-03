import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import convertDate from './ConvertDate';

describe('convertDate', () => {
    it('should convert utcDate into more easily read format', () => {
        expect(convertDate('2018-08-11T16:30:00Z')).toBe('11th Aug 2018');
    })
  });