import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

//aqui
function MiComponente(){
  return <p> Hola mundo </p>;
}


class MiComponenteDeClase extends Component{
  render(){
    return <p> Hola soy de la clase </p>;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
         < MiComponente />
      </div>
    );
  }
}
//podemoos retornar con render la funcion o la clase 
render(<App />, document.getElementById('root'));
