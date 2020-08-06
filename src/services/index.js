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
    return res.results;
  }

  async getPerson(id) {
    const person = await this.getResource(`people/${id}`);
    return person;
  }

  async getAllPlanets() {
    const res = await this.getResource(`planets/`);
    return res.results;
  }

  async getPlanet(id) {
    const person = await this.getResource(`planets/${id}`);
    return person;
  }

  async getAllStarships() {
    const res = await this.getResource(`starships/`);
    return res.results;
  }

  async getStarships(id) {
    const person = await this.getResource(`starships/${id}`);
    return person;
  }  


}

const swapi =  new SwapiService();

swapi.getAllStarships().then((people) => { people.forEach(element => {
    console.log(element.name);
  })
});

swapi.getPerson(3).then((person) => {
    console.log(person.name);
});

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