import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';



import './app.css';

class App extends Component {

  state = {
    selectedItem: 5,
    items: null,
    showRandomPlanet: true,
  }

  onItemSelected = (selectedItem, items) => {
    //console.log('onItemSelected app', selectedItem, items);
    this.setState( () => {
      return { selectedItem , items};
    })
  }

  toggleRandomPlanet = () => {
    this.setState(( {showRandomPlanet} ) => {
      return { showRandomPlanet: ! showRandomPlanet }
    })
  }

  render() {
    return (
      <div>
        <Header />
        { (this.state.showRandomPlanet) ? <RandomPlanet /> : null }
        <button className="btn btn-warning" onClick={this.toggleRandomPlanet} >Toggle Random Planet</button>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList 
              onItemSelected={this.onItemSelected}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails 
              selectedItem={this.state.selectedItem} 
            />
          </div>
        </div>
      </div>
    );
  };
};

export default App;