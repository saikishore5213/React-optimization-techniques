import React from "react";
const Para = (props) => {
  console.log(`Para component rendering`);
  return <p>{props.show ? `Hi,Gude` : ""}</p>;
};

export default React.memo(Para);
