import React from "react";
import { useRef } from "react";

import ImageOne from "../Hooks2/Images/1.jpg";
import ImageTwo from "../Hooks2/Images/2.jpg";
let ConstImg = () => {
  let imgRef = useRef();

  let changeImage = () => {
    console.log("print HTML Tag", imgRef.current.alt);
    imgRef.current.src = ImageTwo;
  };
  return (
    <>
      <img src={ImageOne} alt="Test" height="50%" width="50%" ref={imgRef} />
      <button className="btn btn-success" onClick={changeImage}>
        {" "}
        Change
      </button>
    </>
  );
};

export default ConstImg;