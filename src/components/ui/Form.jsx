"use client"

import React, { useState } from "react";
import Button from "./Button";

export default function Form() {
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [bodWeight, setBodWeight] = useState(0);
  const [selectedExercise, setSelectedExercise] = useState("squat")

  const [result, setResult] = useState(null);

  // Función para manejar el envío del formulario
  function handleSubmit(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    console.log(selectedExercise)
  }

  function handleSelectChange(){
    setSelectedExercise(event.target.value)
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="text-accent flex flex-col items-center">

      <div className="flex flex-col">
          <select
            id="dropdown"
            value={selectedExercise}
            className="text-black w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={handleSelectChange} // Maneja el cambio en el menú desplegable
            //hay varios con el mismo valor porque a la hora de hacer las cuentas es al misma formual
          >
            <option value="Squat">Squat</option>  
            <option value="Bench">Bench</option>
            <option value="Dead Lift">Dead Lift</option>
            <option value="Pull Ups">Pull ups</option>
            <option value="Muscle Up">Muscle Up</option>
            <option value="Dips">Dips</option>
          </select>
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="weight">Weight:</label>
          <input
            id="weight"
            className="text-black w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            inputMode="numeric"
            min="0"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="reps">Reps:</label>
          <input
            id="reps"
            className="text-black w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            min="0"
            value={reps}
            onChange={(e) => setReps(parseInt(e.target.value))}
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="bodWeight">Body Weight:</label>
          <input
            id="bodWeight"
            className="text-black w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            min="0"
            value={bodWeight}
            onChange={(e) => setBodWeight(parseFloat(e.target.value))}
          />
        </div>
        <br/>
        <br/>
        <Button type="submit" weight={weight} reps={reps} bodWeight={bodWeight} exercise={selectedExercise}/>
      </form>
    </main>
  );
}
