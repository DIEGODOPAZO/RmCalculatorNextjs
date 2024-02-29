"use client";

import React, { useState } from "react";

export default function Button({ weight, reps, bodWeight }) {
  const [result, setResult] = useState(null);

  //funciones para calcular las rm
  function rmSBD(weigth, reps) {
    return (
      (weigth * (1 + 0.0333 * reps + 36 / (37 - reps) + Math.pow(reps, 0.1))) /
      3
    );
  }

  function rmMuscleUp(bw, weigth, reps) {
    return (
      0.5 *
      (-(
        Math.pow(weigth, 2) -
        294 * weigth -
        24 * bw * (Math.pow(reps, 1.5) - 1).pow(0.5) +
        21600
      ).pow(0.5) +
        weigth +
        147)
    );
  }

  function rmFondosDominadas(bw, weigth, reps) {
    return (
      ((weigth + bw) *
        (1 + 0.0333 * reps + 36 / (37 - reps) + Math.pow(reps, 0.1))) /
        3 -
      bw
    );
  }

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
          <p className="my-10">
            El resultado de {weight} * {reps} es: {result}
          </p>
        )
      }
    </div>
  );
}
