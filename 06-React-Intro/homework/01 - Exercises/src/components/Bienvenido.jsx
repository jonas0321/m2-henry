import React from "react";
import Botones from "./Botones";

const studentName = "Jonas David";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return (
    <div>
      <h1> hola mundo</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
      <Botones alerts={alerts}></Botones>
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
