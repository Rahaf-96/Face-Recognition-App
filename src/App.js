import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Signin from './components/Signin';
import Register from './components/Register';

import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition';
import Particles from 'react-particles-js';

const app = new Clarifai.App({
  apiKey: '4140252cdf164eddb463f95949a479f4'
 });

 const particlesOptions = {
  particles: {
  number: {
    value:80,
    density: {
      enable: true,
      value_area: 800
    }
  }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl:'',
      box: {},
      route: "signin",
      isSignedIn: false
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height); 
    return { 
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)};
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onButtonSubmit = () => {
    console.log('click');
    this.setState({imageUrl: this.state.input});

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if ( route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
  this.setState({
    route: route
  })
  }

  render(){
   const { isSignedIn, imageUrl, route, box} = this.state;
    return (
   
    <div className="App">
      <Particles className="particles"
        params={particlesOptions}
      />
      <div className="nav-bar">
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
      <Logo />
      </div>
      { route === 'home' 
      ? <div>
      <Rank />
      <ImageLinkForm 
      onInputChange={this.onInputChange}
      onButtonSubmit={this.onButtonSubmit}
      />
      <FaceRecognition imageUrl={imageUrl} box={box}/>
    </div>  
  
      : (route === 'signin'
        ?  <Signin onRouteChange={this.onRouteChange} />
        :  <Register  onRouteChange={this.onRouteChange}  />
      
      )
     
    }
    </div>
  );
}
}

export default App;
