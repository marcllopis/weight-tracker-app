import React from 'react';
import { func, string } from 'prop-types';


const TestButton = ({ doSomething, text }) => (
  <button onClick={doSomething}>
    {text}
  </button>
);

TestButton.propTypes = {
  text: string.isRequired,
  doSomething: func,
};
TestButton.defaultProps = {
  doSomething: () => {},
};

export default TestButton;
