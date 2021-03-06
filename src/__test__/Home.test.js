import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../components/homepage/Home';

describe('Render components', () => {
  it('render HomePage', () => {
    const tree = renderer
      .create(<Provider store={store}><Home /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
