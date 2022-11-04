import React from "react";
import "./Contact.modules.css";
import { useState } from "react";
// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  return (
    <div>
      Crear Formulario
      <form>
        <label>Nombre:</label>
        <input
          name="name"
          placeholder="Escribe tu nombre..."
          type="text"
          value={inputs.name}
          onChange={handleChange}
        />
        <label>Correo Electrónico:</label>
        <input
          name="email"
          placeholder="Escribe tu email..."
          type="text"
          value={inputs.email}
          onChange={handleChange}
        />
        <label>Teléfono:</label>
        <input
          name="phone"
          placeholder="Escribe un teléfono..."
          type="number"
          value={inputs.phone}
          onChange={handleChange}
        />

        <label>Asunto:</label>
        <input
          name="subject"
          placeholder="Escribe el asunto..."
          type="text"
          value={inputs.subject}
          onChange={handleChange}
        />
        <label>Mensaje:</label>
        <textarea
          name="message"
          placeholder="Escribe tu mensaje..."
          type="text"
          value={inputs.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
