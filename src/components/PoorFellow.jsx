import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import poorfellow from "./PoorFellow.png";

const clipPolygons = [
  "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // 0
  "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", //1
  "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", //2
  "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", //3
  "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", //4
  "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", //5
  "polygon(0% 0%, 100% 0%, 100% 46.5%, 100% 72%,100% 60.8%,83.5% 72%, 64.9% 72%, 0% 68%, 0% 46.5%)", //6 both arms

  "polygon(0% 0%, 100% 0%, 100% 46.5%, 100% 72%,100% 60.8%, 83.5% 72%, 64.9% 72%, 64.9% 46.5%, 0% 46.5%)", //7 arm
  "polygon(0% 0%, 100% 0%, 100% 46.5%, 83.5% 46.5%, 83.5% 72%, 64.9% 72%, 64.9% 46.5%, 0% 46.5%)", //8 corpus
  "polygon(0% 0%, 100% 0%, 100% 46.5%, 0% 46.5%)", //9 Neck
  "polygon(0% 0%, 100% 0%, 100% 44%, 0% 44%)", //10; Head
  "polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)" //11 Bar only
];

const PoorFellow = props => {
  const imageStyle = {
    clipPath: clipPolygons[6]
  };

  return (
    <div>
      <Image src={poorfellow} responsive style={imageStyle} />
      Poor Fellow! Always in trouble...
      <div id="health">health {props.health}</div>
    </div>
  );
};

PoorFellow.propTypes = {
  health: PropTypes.number.isRequired
};

export default PoorFellow;
