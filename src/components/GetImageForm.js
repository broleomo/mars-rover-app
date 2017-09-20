import React, {Component} from 'react';
import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';

const API_KEY = 'X3aNQZj7BdSiNk8EUjNBImIKplVeWrVEfeVislMQ';


export default class GetImageForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      rovers: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol:"1000",
    }
  }

handleRover = (e) =>{
  e.preventDefault();
  this.setState({rovers:e.target.value});
}
handleCamera = (e) =>{
  e.preventDefault();
  this.setState({camera:e.target.value});
}
handleSol = (e) => {
  e.preventDefault();
  this.setState({sol:e.target.value});
}
fetchRoverImage = (e) => {
  const{rovers,camera,sol} = this.state;
  let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rovers}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`;
  fetch(imageUrl)
  .then (results => results.json())
  .then(responseData => {
    console.log(responseData);
    this.setState({images: responseData.photos})
  })
}


  render(){
    const{rovers,camera,sol} = this.state;
    console.log(this.state.rovers);
    console.log(this.state.images);


    return(
      <div>
      <label htmlFor="rover">Rover</label>
        <select onChange={this.handleRover} id="rover" value={rovers}>
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirt</option>
        </select>
        <label htmlFor="camera">Camera Type</label>
        <select onChange={this.handleCamera} id="rover" value={camera}>
          <option value="fhaz">FHAZ (Front Hazard)</option>
          <option value="rhaz">RHAZ (Rear Hazard)</option>
          <option value="navcam">NAVCAM (Navigation Cam)</option>
        </select>
        <label htmlFor="sol">Martian Sol: 1000-2000</label>
        <input type="number" onChange={this.handleSol} max="2000" min="1000" value={sol}/>
        <GetImageButton onClick={this.fetchRoverImage}/>
        <ImageDisplay images={this.state.images}/>
        </div>
    )
  }
  }
