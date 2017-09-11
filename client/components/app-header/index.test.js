// @ts-nocheck
import React from 'react';
import AppHeader from './index';
import renderer from 'react-test-renderer';

test('AppHeader renders as expected', () => {
  const component = renderer.create(
    <AppHeader doToggle={() => null}></AppHeader>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});