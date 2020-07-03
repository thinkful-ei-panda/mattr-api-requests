import React, { Component } from 'react';
// import './DemonymApp.css'

import Demonym from './Demonym';
import CountrySelector from './CountrySelector';


class DemonymApp extends Component {
  render() {
    return (
      <div className="demonym_app">
        <CountrySelector countries={[{name:"Barbados"}, {name:"Bahrain"}]}/>
        <Demonym name="Barbadian" country="Barbados"/>
      </div>
    );
  }
}

export default DemonymApp;