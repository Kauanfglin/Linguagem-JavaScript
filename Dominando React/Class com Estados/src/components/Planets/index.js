import React, { Fragment } from "react";
import Planet from "./planet"; 
import "./planet/style.css"; 

class Planets extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      planets: [
        {
          name: "Mercury",
          description: "The smallest planet in our solar system, Mercury is the closest planet to the Sun.",
          img_url: "https://scitechdaily.com/images/NASA-Image-of-the-Day-A-Colorful-View-of-Mercury.jpg",
          link: "https://mail.google.com/mail/u/0/#search/alura/FMfcgzQbgcSnQXHLwccXnZFRjLGlwRxL"
        },
        {
          name: "Venus",
          description: "Venus is the second planet from the Sun and has a thick, toxic atmosphere.",
          img_url: "https://space-facts.com/wp-content/uploads/venus.png"
        },
        {
          name: "Earth",
          description: "Earth is our home planet and the only one known to support life.",
          img_url: "https://space-facts.com/wp-content/uploads/earth.png"
        },
        {
          name: "Mars",
          description: "Mars is known as the Red Planet and is the second smallest planet in our solar system.",
          img_url: "https://space-facts.com/wp-content/uploads/mars.png"
        }
      ]
    };
  }

  removePlanet = () => {
    let newPlanets = [...this.state.planets];
    newPlanets.pop();
    this.setState({ planets: newPlanets }); 
  }

  Showmsg = () => {
    alert("Hello from Planets!");
  }

  render() {
    return (
      <Fragment>
        <h3>Planets list</h3>
        <button onClick={this.Showmsg}>Click Me</button>
        <button onClick={this.removePlanet}>Remove Last Planet</button>

        {this.state.planets.map((planet, index) => (
          <Planet 
            key={index}
            name={planet.name} 
            description={planet.description}
            img_url={planet.img_url}
            link={planet.link}
          />
        ))}
      </Fragment>
    );
  }
}

export default Planets;
