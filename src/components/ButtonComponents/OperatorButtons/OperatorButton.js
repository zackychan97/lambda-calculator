import React from "react";

const OperatorButton = daProps => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{daProps.button.char}</button>
    </>
  );
};

export default OperatorButton