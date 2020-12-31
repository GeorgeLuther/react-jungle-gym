import React from 'react'

import ReactDOM from 'react-dom'

import renderer from 'react-test-renderer'

import App from './App'

//1) smoke tests confirm that a component will render without crashing.
//we'll put a dom element <div> into the component and insure that it works.

it('renders without crashing',()=>{
  const div = document.createElement('div')
  ReactDOM.render(<App/>,div)
  ReactDOM.unmountComponentAtNode(div)
})

//2) snapshot test confirm our component renders as expected. 
//compare a component rendered as JSON to a JSON snapshot

it('renders as expected',()=>{
  const tree = renderer
  //we can put props into the app to elicit specific results
  renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})