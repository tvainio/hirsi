import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import poorfellow from "./PoorFellow.png";

const clipPolygons = [
  "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // 0
  "polygon(0% 0%, 100% 0%, 100% 100%, 78.5% 100%, 69.3% 97.7%, 0% 74.9%)", // 1
  "polygon(0% 0%, 100% 0%, 100% 90.8%, 78.5% 98%, 69.3% 97.7%, 0% 74.2%)", //2 both legs
  "polygon(0% 0%, 100% 0%, 100% 90.8%, 78.5% 98%, 74% 72.2%,0% 72.2%)", //3 one leg
  "polygon(0% 0%, 100% 0%, 100% 72%, 0% 72%)", //4 both hands
  "polygon(0% 0%, 100% 0%, 100% 72%, 64.9% 72%, 55.8% 66%, 0% 20%)", //5 one hand
  "polygon(0% 0%, 100% 0%, 100% 72%, 100% 60.8%, 83.5% 72%, 64.9% 72%, 55.8% 66%, 0% 20%)", //6 both arms

  "polygon(0% 0%, 100% 0%, 100% 72%, 100% 60.8%, 83.5% 72%, 64.9% 72%, 64.9% 46.5%, 0% 46.5%)", //7 arm
  "polygon(0% 0%, 100% 0%, 100% 46.5%, 83.5% 46.5%, 83.5% 72%, 64.9% 72%, 64.9% 46.5%, 0% 46.5%)", //8 corpus
  "polygon(0% 0%, 100% 0%, 100% 46.5%, 0% 46.5%)", //9 Neck
  "polygon(0% 0%, 100% 0%, 100% 44%, 0% 44%)", //10; Head
  "polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)" //11 Bar only
];

const PoorFellow = props => {
  const imageStyle = {
    clipPath: clipPolygons[props.health]
  };

  return (
    <div>
      <Image src={poorfellow} responsive style={imageStyle} />
    </div>
  );
};

PoorFellow.propTypes = {
  health: PropTypes.number.isRequired
};

export default PoorFellow;
