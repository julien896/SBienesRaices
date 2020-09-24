import React from 'react';
import './App.css';
import {BrowserRouter , Route, Switch } from 'react-router-dom';
import Contacto from './components/Contacto';
import Propiedades from './components/Propiedades';
import Principal from './components/Principal';

function App() {
  return (
  <BrowserRouter> 
      <Switch> 
                <Route exact path="/" component={Principal}/>
                <Route exact path="/contacto" component={Contacto}/> 
                <Route exact path="/propiedades" component={Propiedades}/>
      </Switch>

  </BrowserRouter>
  );
}

export default App;


//
