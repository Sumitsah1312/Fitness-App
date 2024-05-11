
import React, { useState } from "react";

function Freebook() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);

  const calculateBMI = () => {
    if (height === 0) {
      alert("Please enter your height.");
      return;
    }
    if (weight === 0) {
      alert("Please enter your weight.");
      return;
    }
    const heightInMeters = height / 100; 
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2)); 
  };

  return (
    <>
      <div className=" dark:text-white mb-6 mt-6 max-w-screen-2xl container mx-auto md:px-20 px-4 mt-6 mb-6">
        <div>
          <h1 className="font-semibold text-xl pb-2">BMI Calculator</h1>
          <div className="mb-4">
            <label className="block dark:text-white text-sm font-bold mb-2">
              Height (in cm):
            </label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height in cm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Weight (in kg):
            </label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight in kg"
            />
          </div>
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>
          {bmi !== 0 && (
            <div className="mt-4">
              <p>Your BMI is: {bmi}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Freebook;
