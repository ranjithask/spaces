import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
 
import Index from './index.js';


describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
       shallow(<Index />);
     });
 });