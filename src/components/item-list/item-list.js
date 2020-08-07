import React, { Component } from 'react';
import SwapiService from '../../services/index';
import Spinner from '../spinner'

import './item-list.css';

export default class ItemList extends Component {

  _swapiService = new SwapiService();

  state = {
    peopleList: null
  };

  componentDidMount(){
    this._swapiService.getAllPeople()
    .then( (res) => {
      //console.log(res);
      this.setState( () => {
        return { peopleList: res}
      })
    })
    .catch( (err) => {
      console.log(err)
    });
  }

  onItemSelected(id) {
    console.log(id);
  }

  renderItems(arr) {
    //console.log('rendering items')
    return ( arr.map( ({id,name}) => {      
      return (<li className="list-group-item" 
                  key={id} 
                  onClick={() => this.props.onItemSelected(id, this.state.peopleList)}>
                {name}
              </li> )
      })
    )
  }

  
  render() {
    const { peopleList} = this.state;
    

    if (!peopleList) {
      return <Spinner />
    } else {
      const items = this.renderItems(peopleList);
      return (<ul className="item-list list-group">
        {items}
      </ul>)
    }

    
  }
}