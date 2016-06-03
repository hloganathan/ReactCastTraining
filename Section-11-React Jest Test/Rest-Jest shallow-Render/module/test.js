import {createRenderer} from 'react-addons-test-utils';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import React from 'react';
import Hello from '../hello';


// extend tape with jsxEqual assertion:
const test = addAssertions(tape, {jsxEquals});


test('Hello Component', (t) => {
	const renderer = createRenderer();

  // initial rendering
  renderer.render(<Hello name="Jim Bob" />);
  let actualElement = renderer.getRenderOutput();
  let expectedElement = <h1 onClick={function noRefCheck() {}}>Hello Captain Jim Bob</h1>;

  // simulate click
  renderer.getRenderOutput().props.onClick();
  let clickedElement = renderer.getRenderOutput();
  let clickedExpectedElement = <h1 onClick={function noRefCheck() {}}>Hello Overlord Jim Bob</h1>

  // fail cakes
  let unexpectedElement = <h1>Hello Private Jim Bob</h1>;

  // compare output with the expected result:
  t.jsxEquals(actualElement, expectedElement, "this should work");
  t.jsxEquals(clickedElement, clickedExpectedElement, "this should work");
  t.jsxEquals(actualElement, unexpectedElement, "this should die");
  t.end();
});