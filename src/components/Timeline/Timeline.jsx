import React from "react";
import './Timeline.scss'
const Timeline = (props) => {
    
  return (
    <div className={props.left ? "timeline" : "timelineRight"}>
      <img src={props.logo} alt="" />
      <h1>{props.title}</h1>
      <small>{props.year}</small>
      <p>{props.description}</p>
    </div>
  );
};
export default Timeline;
