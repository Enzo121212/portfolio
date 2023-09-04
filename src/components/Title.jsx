import React from "react";
import '../assets/style.css';


export default function Title({name,widthTitle}) {
    const width = widthTitle.toUpperCase();
  return (
    <h1
      className="border border-danger border-5 p-2 text-center  my-5 mx-auto title-component"
      style={{ width: `${width}px` }}
    >
      {name}
    </h1>
  );
}
