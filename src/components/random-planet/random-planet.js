import React, { Component } from 'react';
import swapiService from '../../services/index'
import './random-planet.css';
import SwapiService from '../../services/index';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

let interval = 0;

export default class RandomPlanet extends Component {

  

  swapiService = new SwapiService();

  state = {
    planet: {},    
    loading: true,
    error: false,
  };

  onPlanetLoaded = (planet) => {
    //console.log(planet);
    this.setState({planet});
    this.setState({ loading: false });        
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  }
  
  updatePlanet = () => {
    console.log('update planet')
    const id = Math.floor(Math.random()*22+1); 
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
    // .then((planet) => {      
    //   const { name, rotationPeriod, diameter, population } = planet;
    //     this.setState( ( {}) => {
    //       return { id, name, rotationPeriod, diameter, population}
    //     })

    // });
  } 

  constructor(){
    console.log("constructor");
    super();
  }

  componentDidMount() {    
    this.interval = setInterval(this.updatePlanet, 20000);
    console.log("componentDidMount", this.interval);
  }

  componentWillUnmount(){
    console.log("componentWillUnmount", this.interval);
    clearInterval(this.interval)
  }


  componentDidCatch(){
    console.log("componentDidCatch");
  }

  render() {
    //console.log('render');
    const { loading, error, planet = {} } = this.state;

    //this.updatePlanet();

    
    return (
      <div className="random-planet jumbotron rounded">
        {(loading) ? <Spinner /> : null}
        {(error) ? <ErrorIndicator /> : null}
        {(!loading && !error) ? <PlanetView planet={planet} /> : null}        
      </div>

    );
  }
}

const PlanetView = ({ planet: { id, name, population, rotationPeriod, diameter } }) => {

  //const imgSrc = (id) ? `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` : "";

  return (
    <React.Fragment>
      <img className="planet-image" alt="place for planet image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
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
    </React.Fragment>
  );
}