import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import LocaleContext from './LocaleContext'

import Header from './Header'
import PageNotFound from './PageNotFound'

import ContextChild from './ContextChild'

import PropChild from './PropChild'

import CompositionChild from './CompositionChild'
import CompositionGrandInput from './CompositionGrandInput'
import CompositionGrandDisplay from './CompositionGrandDisplay'

class App extends React.Component {
  state = {
    town: '',
    state: '',
    country: '',
    planet: '',
    galaxy: '',
    setLocale: this.setLocale
  }
  handleInputChange=(e)=>{
    console.log('boom')
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({[name]: value})
  }
  render(){
    return (
      <main className='App'>
        
        <Route path='/' component={Header} />
        
        <nav>
          <Link to='/context'>CONTEXT</Link>
          <br></br>
          <Link to='/props'>PROPS</Link>
          <br></br>
          <Link to='/composition'>COMPOSITION</Link>
        </nav>
        
        <Switch>
          <Route 
            exact path='/context' 
            render={()=> {
              return(
                <LocaleContext.Provider value={{
                  localeObj: this.state,
                  setLocale: this.handleInputChange,
                }}
                >
                  <ContextChild/>
                </LocaleContext.Provider>
              )
            }}
          />
          <Route 
            exact path={['/props','/props/top']} 
            render={()=> {
              return(
                <PropChild setValFromGrandchild={this.handleInputChange} stateVal={this.state}/> 
              )
            }} 
          />
          <Route
            exact path='/composition'
            render={()=>{
              return(
                <CompositionChild>
                  <CompositionGrandInput handleInputChange={this.handleInputChange}/>
                  <CompositionGrandDisplay localeObj={this.state} />
                </CompositionChild>
              )
            }} 
          ></Route>
          <Route 
            path='/' 
            component={PageNotFound} 
          />
        </Switch>
      </main>
    );
  }
}

export default App;