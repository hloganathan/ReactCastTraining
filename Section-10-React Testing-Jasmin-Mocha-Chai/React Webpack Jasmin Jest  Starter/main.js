var React=require('react');
var ReactDOM = require('react-dom');
var TestUtils=require('react-addons-test-utils');
// jest librray to test react comp
var Component=require('./com.react');
var DemoApp=require('./demoapp');


describe("test AppComponent  props",function(){
  beforeEach(function() {
      let AppComponent=TestUtils.renderIntoDocument(<DemoApp name='Tarun'></DemoApp>)
  });
  it("check props of AppComponent  having data ",function(){
    let AppComponent=TestUtils.renderIntoDocument(<DemoApp name='Tarun'></DemoApp>)
    let text=ReactDOM.findDOMNode(AppComponent).textContent;
    expect(text).toContain('hello');
});
  it("check for scryRenderedDOMComponentsWithClass  example ",function(){
   let AppComponent=TestUtils.renderIntoDocument(<DemoApp name='Tarun'></DemoApp>)
   const containercomp = TestUtils.scryRenderedDOMComponentsWithClass(AppComponent , 'container');
   expect(containercomp.length).toEqual(1);
});
});



























describe("test helloworld props",function(){
  beforeEach(function() {
      let helloworld=TestUtils.renderIntoDocument(<Component text='Tarun'></Component>)
  });
  it("check props of component having data ",function(){
   let helloworld=TestUtils.renderIntoDocument(<Component text='Tarun'></Component>)
   let text=ReactDOM.findDOMNode(helloworld).textContent;
   expect(text).toContain('hello');
});
  it("check for composit component ",function(){
   let helloworld=TestUtils.renderIntoDocument(<Component text='Tarun'></Component>)
   expect(TestUtils.isCompositeComponent(helloworld)).toBe(true);
   expect(TestUtils.isDOMComponent(helloworld)).toBe(false);
});
  it("check for composit component ",function(){
   let helloworld=TestUtils.renderIntoDocument(<Component text='Tarun'></Component>)
   expect(TestUtils.isCompositeComponent(helloworld)).toBe(true);
   expect(TestUtils.isDOMComponent(helloworld)).toBe(false);
});

  it("check for scryRenderedDOMComponentsWithTag  example ",function(){
   let helloworld=TestUtils.renderIntoDocument(<Component text='Tarun'></Component>)
   const containercomp = TestUtils.scryRenderedDOMComponentsWithTag(helloworld , 'ul');
   expect(containercomp.length).toEqual(1);
});

  it("check for scryRenderedDOMComponentsWithClass  example ",function(){
   let helloworld=TestUtils.renderIntoDocument(<Component text='Tarun'></Component>)
   const containercomp = TestUtils.scryRenderedDOMComponentsWithClass(helloworld , 'container');
   expect(containercomp.length).toEqual(1);
});

  it("check for scryRenderedDOMComponentsWithTag  example ",function(){
   let helloworld=TestUtils.renderIntoDocument(<Component text='Tarun'></Component>)
   const containercomp = TestUtils.findRenderedDOMComponentWithTag(helloworld , 'ul');
   expect(containercomp).toBeDefined();
});

  it("check for scryRenderedDOMComponentsWithClass  example ",function(){
   let helloworld=TestUtils.renderIntoDocument(<Component text='Tarun'></Component>)
   const containercomp = TestUtils.findRenderedDOMComponentWithClass(helloworld , 'container');
   expect(containercomp).toBeDefined();
});
})

