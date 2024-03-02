"use client";

import React, { useState } from "react";

export default function Button({ weight, reps, bodWeight, exercise }) {
  const [result, setResult] = useState(null);
  const [exerciseLocal, setExercise] = useState("");

  //funciones para calcular las rm
  function rmSBD(weigth, reps) {
    let result =
      (weigth * (1 + 0.0333 * reps + 36 / (37 - reps) + Math.pow(reps, 0.1))) /
      3;
    result = Math.round(result * 100) / 100;
    return result;
  }

  function rmMuscleUp(bw, weight, reps) {
    // Calcula el resultado según la fórmula proporcionada
    let result =   0.5 * ( - Math.pow(( Math.pow(weight, 2) - 294 * weight - 24 * bw * Math.pow((Math.pow(reps, 1.5) - 1), 0.5) + 21600 ), 0.5) + weight + 147 )

    // Redondea el resultado a dos decimales
    result = Math.round(result * 100) / 100;

    // Devuelve el resultado
    return result;
  }

  function rmFondosDominadas(bw, weigth, reps) {
    let result =
      ((weigth + bw) *
        (1 + 0.0333 * reps + 36 / (37 - reps) + Math.pow(reps, 0.1))) /
        3 -
      bw;
    result = Math.round(result * 100) / 100;
    return result;
  }

  //funcion para handlear el submit de un form

  function exerciseToFormula() {
    var res = "";
    switch (exercise) {
      case "Squat":
        res = "SBD";
        break;
      case "Bench":
        res = "SBD";
        break;
      case "Dead Lift":
        res = "SBD";
        break;
      case "Pull Ups":
        res = "FD";
        break;
      case "Dips":
        res = "FD";
        break;
      case "Muscle Up":
        res = "MU";
        break;
      default:
        res = -1;
    }
    return res;
  }
  function handleSubmit() {
    var res = 0;
    setExercise(exercise)
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
    <div className="flex flex-col">
      <button
        className="bg-card-foreground-dark hover:bg-popover-foreground-dark text-black font-bold py-2 px-4 text-3xl rounded"
        onClick={() => handleSubmit()}
      >
        Calcular
      </button>

      {
        //sirver para ver si hay resultado, si lo hay se muestran el resultado y la tabla
        result !== null && (
          <p className="my-10 text-3xl flex flex-col">
            Your RM in {exerciseLocal} is: <p className="text-6xl"> {result} </p>
          </p>
        )
      }
    </div>
  );
}
