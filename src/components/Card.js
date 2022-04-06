import React, { Fragment } from "react";
//Empty Tags are React Fragments - The shorthand syntax uses <></> instead of <React.Fragment></React.Fragment>
const Card = ({ id, name, email }) => {
  /* css = background - Display: inline-block - Border - Padding = Margin - grow animation - ??? - shadows*/
  return (
    <>
      <div className="bg-light-purple dib bor3 pa3 ma2 grow bw2 shadow-5">
        {/* Robohash api = Typing anyword e.g. test grabs an image then ?HeightxWidth = size of image*/}
        <img alt="profilepic" src={`https://robohash.org/${id}?200x200`} />
        <div>
          <h2>{name}</h2>
          <p> {email}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
