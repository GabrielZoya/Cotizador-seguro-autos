import React from "react";
import Formulario from "./Formulario";

const AppSeguro = () => {
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl">
          Cotizador de Seguros de Autos
        </h1>
      </header>
      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounder-lg p-10">
        <p>contenido principal</p>
        <Formulario />
      </main>
    </>
  );
};

export default AppSeguro;
