//https://swapi.dev

export default class SwapiService {

  _apiBase = 'https://swapi.dev/api/';

  async getResource(url){
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status code: ${res.status}`)
    }
    const body = await res.json();
    return body;
  }

  async getAllPeople(){
    const res = await this.getResource(`people/`);
    return res.results.map( (element) => {
      return this._transformPerson(element);
    });
  }

  async getPerson(id) {
    const person = await this.getResource(`people/${id}`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResource(`planets/`);
    return res.results.map((planet) => {
      return this._transformPlanet(planet);
    });
  }

  async getPlanet(id) {
    const planet = await this.getResource(`planets/${id}`);    
    //console.log(planet);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource(`starships/`);
    return res.results.map((element) => {
      return this._transformStarships(element);
    });;
  }

  async getStarships(id) {
    const starship = await this.getResource(`starships/${id}`);
    return this._transformStarships(starship);
  }  

  _extractId(url){
    const regExp = /\/([0-9]*)\/$/;    
    return url.match(regExp)[1];
  }

  _transformPlanet(planet){    
    const id = this._extractId(planet.url);
    const { name, orbital_period: rotationPeriod, diameter, population } = planet;
    return { id, name, rotationPeriod, diameter, population };
  }

  _transformPerson(person) {
    const id = this._extractId(person.url);
    const { name, gender, eye_color: eyeColor, birth_year: birthYear} = person;
    return { id, name, gender, eyeColor, birthYear};
  }

  _transformStarships(starship) {
    const id = this._extractId(starship.url);
    const { name, model, manufacturer, cost_in_credits: costInCredits, length, crew, passengers, cargo_capacity: cargoCapacity } = starship;
    return { id, name, model, manufacturer, costInCredits, length, crew, passengers, cargoCapacity };
  }

}

// const swapi =  new SwapiService();


// swapi.getStarships(3).then((person) => {
//   console.log(person);
// });

// swapi.getPerson(3).then((person) => {
//   console.log(person);
// });

// swapi.getAllPlanets().then((people) => {
//   people.forEach(element => {
//     console.log(element.name);
//   })
// });

/*
swapi.getAllPlanets().then((people) => { people.forEach(element => {
    console.log(element.name);
  })
});

swapi.getPerson(3).then((person) => {
    console.log(person.name);
});
*/
// swapi.getAllPeople()
// .then( (body) => {
//   console.log(body)
// });

/*
const getResource = async (url) => {
  const res = await fetch(url);
  if (! res.ok) {
    throw new Error(`Could not fetch ${url}, status code: ${res.status}`)
  }
  const body = await res.json();
  return body;
};

getResource("https://swapi.dev/api/people/1999999/")
  .then( (body) => {
    console.log(body);
  })
  .catch( (err) => {
    console.log('Could not fetch, network error',err)
  });
  */
/*
fetch("https://swapi.dev/api/people/1/")
  .then( (res) => {
    console.log('Got responce',res.status);
    return res.json();
  })
  .then( (body) => {
    console.log('Got body', body);
  })
  ;
*/