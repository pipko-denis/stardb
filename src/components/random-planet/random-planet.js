import React, { Component } from 'react';
import swapiService from '../../services/index'
import './random-planet.css';
import SwapiService from '../../services/index';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},    
  };

  onPlanetLoaded = (planet) => {
    console.log(planet);
    this.setState({planet});
  }
  
  updatePlanet(){
    const id = Math.floor(Math.random()*25+2); 
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded);
    // .then((planet) => {      
    //   const { name, rotationPeriod, diameter, population } = planet;
    //     this.setState( ( {}) => {
    //       return { id, name, rotationPeriod, diameter, population}
    //     })

    // });
  } 

  constructor(){
    super();
    this.updatePlanet();
  }

  render() {

    const { planet: {id, name, population, rotationPeriod, diameter} = {} } = this.state;

    //this.updatePlanet();

    const imgSrc = (id) ? `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` : "";

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image" alt="planet image not found"
          src={imgSrc} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}