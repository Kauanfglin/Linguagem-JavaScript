import React, { Fragment } from "react";

const Description = (props) => {
  if (props.link) {
    return (
      <Fragment>
        <p>{props.description}</p>
        <a href={props.url}>{props.link}</a>
      </Fragment>
    );
  }

  return null;
};

export default Description;
