"use client";

import React, { useState } from "react";

export default function Button({ weight, reps }) {
  const [result, setResult] = useState(null);

  //funcion para handlear el submit de un form
  function handleSubmit(weight, reps) {
    setResult(weight * reps);
  }

  return (
    <div>
      <button
        className="bg-card-dark hover:bg-popover text-white  hover:text-black font-bold py-2 px-4 text-3xl rounded"
        onClick={() => handleSubmit(weight, reps)}
      >
        Calcular
      </button>

      {
        //sirver para ver si hay resultado, si lo hay se muestran el resultado y la tabla
        result !== null && (
          <p>
            El resultado de {weight} * {reps} es: {result}
          </p>
        )
      }
    </div>
  );
}
