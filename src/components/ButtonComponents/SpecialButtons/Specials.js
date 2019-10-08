import React, {useState} from "react";
import SpecialButton from './SpecialButton';
import {specials} from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialButtons, useSpecialButtons] = useState(specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    {specialButtons.map((button, index) => (
      <SpecialButton key={index} button={button} />
    ))}
    </div>
  );
};

export default Specials;