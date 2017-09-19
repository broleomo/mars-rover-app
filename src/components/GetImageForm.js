import React, {Component} from 'react';
const API_KEY = "DEMO_KEY";


export default class GetImageForm extends App {

  constructor(props){
    super(props);

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol:" ",

    }
  }

componentDidMount(){
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY')
    .then (results => results.json())
    .then(responseData => {
      this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
        let cam: this.state.camera,
        let rove: this.state.rover,
        let num: this.state.sol,
        let imageUrl: 'https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}'
      })
    })
};

handleRover=(e) =>{
  this.setState({rove:e.target.value});
}
handleCamera = (e) =>{
  this.setState({cam:e.target.value})
}
  render(){
    return(
      <label htmlFor="rover">Rover</label>
        <select onChange={this.handleRover} id="rover" value={this.state.value}>
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirt</option>
        </select>
      <label htmlFor="camera">Camera Type</label>
        <select onChange={this.handleCamera} id="rover" value={this.state.value}>
          <option value="fhaz">FHAZ (Front Hazard)</option>
          <option value="rhaz">RHAZ (Rear Hazard)</option>
          <option value="navcam">NAVCAM (Navigation Cam)</option>
        </select>
<label htmlFor="sol">Martian Sol: 1000-2000</label>
<input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
    )
  }
  }
}
