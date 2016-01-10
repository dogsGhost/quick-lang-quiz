import React from 'react';
import TestUtils from 'react-addons-test-utils';

const getOutput = (component) => {
  // Return the rendered output of a React component.
  let renderer = TestUtils.createRenderer();
  // Make sure we're passing a React Element and not just a class.
  renderer.render(TestUtils.isElement(component) ? component : React.createElement(component));
  return renderer.getRenderOutput();
};

export default getOutput;
