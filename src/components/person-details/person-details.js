import React, { Component } from 'react';

import './person-details.css';
import SwapiService from '../../services';

export default class PersonDetails extends Component {


  state = {
    person: null
  }
  
  swapiService = new SwapiService();

  updatePerson() {
    const {selectedItem} = this.props;
    if (!selectedItem){ return };
    this.swapiService.getPerson(selectedItem)
      .then((person) => {
        //console.log(person)
        this.setState(() => {
          return { person }
        })
      })
      .catch((err) => {
        console.log(err)
      });
  }

  componentDidMount(){
    console.log('componentDidMount', this.props);
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState){
    //console.log('componentDidUpdate', prevProps, prevState);
    if (prevProps.selectedItem != this.props.selectedItem) {       
      this.updatePerson();
     }
     
   }

  // testFunction = () => {
  //   console.log('testFunction');
  // }

  // findSelectedItem = (selectedItem,items) => {
  //   if (items) {
  //     //console.log(items);
  //     const item = items.find((el) => {
  //       return el.id === selectedItem
  //     });
  //     return item;
  //   }

  // };



  render() {
    //const { selectedItem, items  } = this.props;
    //const { person: { gender, name, eyeColor, birthYear} = {}} = this.state;

    //console.log(selectedItem, items);

    // console.log(this);
    //const item = this.findSelectedItem(selectedItem, items);

    //const { item = {} } = this.findSelectedItem(selectedItem,items);
    //const item = {};

    if (!this.state.person) {
       return <span>Select a person from a list</span>
    }else {

      const { person: { id, name, gender, eyeColor, birthYear } = {} } = this.state;

      return (
        <div className="person-details card">
          <img className="person-image" alt="person"
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Gender</span>
                <span>{gender}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Birth Year</span>
                <span>{birthYear}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Eye Color</span>
                <span>{eyeColor}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }
}