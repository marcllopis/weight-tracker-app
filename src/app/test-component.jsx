import React from 'react';
import TestButton from './test-button.jsx';

const checkConsole = () => console.log('WORKS!');

const TestComponent = () => (
  <div>
    <h1>
      Hello React
    </h1>
    <TestButton
      text="Click and check the console"
      doSomething={checkConsole}
    />
  </div>
);

export default TestComponent;
