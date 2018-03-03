import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders correctly', () => {
  const app = shallow(<App />);
  expect(app).toMatchSnapshot();
});
