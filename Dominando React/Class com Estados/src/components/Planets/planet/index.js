import React, { Fragment } from "react";
import "./style.css";
import Grayimg from "../../Grayimg";
import Description from "../../Description";

const Planet = (props) => {
  const name = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

  const satelite = name.map((item, index) => {
    return (
      <li key={index}>{item}</li>
    )
  })

  return (
    <Fragment>
      <h4>{props.name}</h4>
      <p>
        <Description description={props.description} link={props.link} />
      </p>
      <img
        className="gray-img"
        src={props.img_url}
        alt={props.name}
      />

    </Fragment>
  );
};

export default Planet;
