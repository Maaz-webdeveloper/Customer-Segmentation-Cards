import React from "react";
import RightCardcontent from "./RightCardcontent";

const RightCard = (props) => {
  return (
    <div className="h-full w-80 rounded-4xl overflow-hidden shrink-0 relative">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt=""
      />
      <RightCardcontent user={props.user} tag={props.tag} id={props.id} color={props.color} />
    </div>
  );
};

export default RightCard;
