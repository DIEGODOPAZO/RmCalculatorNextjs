"use client"

import React, { useState } from "react";
import Button from "./Button";

export default function Form() {
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [bodWeight, setBodWeight] = useState(0);
  const [selectedExercise, setSelectedExercise] = useState("Squat")


  // Función para manejar el envío del formulario
  function handleSubmit(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  }

  function handleSelectChange(){
    setSelectedExercise(event.target.value)
  }

  return (
    <main className="full">
      <form onSubmit={handleSubmit} className="text-accent flex flex-col items-center w-full">

      <div className="flex flex-col w-11/12">
          <select
            id="dropdown"
            value={selectedExercise}
            className="text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={handleSelectChange} // Maneja el cambio en el menú desplegable
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
        <div className="flex flex-col w-11/12">
          <label htmlFor="weight">Weight:</label>
          <input
            id="weight"
            className="text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            inputMode="numeric"
            min="0"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />
        </div>
        <br />
        <div className="flex flex-col w-11/12">
          <label htmlFor="reps">Reps:</label>
          <input
            id="reps"
            className="text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
            min="0"
            value={reps}
            onChange={(e) => setReps(parseInt(e.target.value))}
          />
        </div>
        <br />
        <div className="flex flex-col w-11/12">
          <label htmlFor="bodWeight">Body Weight:</label>
          <input
            id="bodWeight"
            className="text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
