"use client";

import React, { useState } from "react";

export default function Button({ weight, reps, bodWeight, exercise }) {
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

  function exerciseToFormula(){
    var res = ""
    switch (exercise) {
      case "Squat":
      case "Bench":
      case "Dead Lift":
        res = "SBD"
        break;
      case "Pull Ups":
      case "Dips":
        res = "FD"
        break;
      case "Muscle Up":
        res = "MU"
        break;
      default:
        res = -1;
    }
    return res
  }
  function handleSubmit() {
    var res = 0;
    switch (exerciseToFormula()) {
      case "SBD":
        res = rmSBD(weight, reps);
      case "FD":
        res = rmFondosDominadas(bodWeight, weight, reps);
        break;
      case "MU":
        res = rmMuscleUp(bodWeight, weight, reps);
        break;
      default:
        res = -1;
    }

    setResult(res);
  }

  return (
    <div>
      <button
        className="bg-card-foreground-dark hover:bg-popover-foreground-dark text-black font-bold py-2 px-4 text-3xl rounded"
        onClick={() => handleSubmit()}
      >
        Calcular
      </button>

      {
        //sirver para ver si hay resultado, si lo hay se muestran el resultado y la tabla
        result !== null && (
          <p className="my-10">
            Your RM in {exercise} is: {result}
          </p>
        )
      }
    </div>
  );
}
