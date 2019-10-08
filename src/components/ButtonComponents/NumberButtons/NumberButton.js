import React from "react";

const NumberButton = daProps => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button>{daProps.button}</button>
    </>
  );
};

export default NumberButton;