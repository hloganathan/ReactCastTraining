//jest.dontMock('../../../src/js/components/Example');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Example from '../../../src/js/components/Example';

describe('Example', () => {
	beforeEach(function(){
		let component = TestUtils.renderIntoDocument(<Example name="tarun" />);
		let node = ReactDOM.findDOMNode(component);
	})
	it('is rendered', () => {
		expect(TestUtils.isCompositeComponent(component)).toBe(true);
		expect(TestUtils.isDOMComponent(node)).toBe(true);
	});
	it('is rendered', () => {
		const containercomp = TestUtils.scryRenderedDOMComponentsWithClass(component , 'container'));
                          expect(containercomp).tobeDefined();
              });
	it('is rendered', () => {
		const containercomp = TestUtils.scryRenderedDOMComponentsWithTag(component , 'ul'));
                          expect(containercomp).tobeDefined();
                            expect(containercomp.length).toEqual(2);
              });
	it('is rendered', () => {
		const containercomp = TestUtils.findRenderedDOMComponentsWithClass(component , 'container'));
                          expect(containercomp).tobeDefined();
              });
	it('is rendered', () => {
		const containercomp = TestUtils.findRenderedDOMComponentsWithTag(component , 'ul'));
                          expect(containercomp).tobeDefined();
                            expect(containercomp.length).toEqual(1);
              });

});
