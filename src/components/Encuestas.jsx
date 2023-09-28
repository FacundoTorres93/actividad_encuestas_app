import React from "react";

function Encuestas({ encuestas }) {
    return (
        <div>
            <h2>Encuestas Disponibles</h2>
            <ul>
                {encuestas.map((encuesta, i) => (
                    <li key={i}>
                        <h3>{encuesta.pregunta}</h3>
                        <ul>
                            {encuesta.opciones.map((opcion, j) => (
                                <li key={j}>{opcion}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Encuestas;
