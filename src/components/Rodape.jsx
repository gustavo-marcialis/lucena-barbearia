// src/components/Footer.jsx
import React from 'react';

const Rodape = () => {
  return (
    <footer className="text-light text-center bg-escuro">
          <h3>Desenvolvido por:</h3>
          <a href="https://calciphertech.vercel.app" target='blank'>
            <img src="/images/logo-criador.svg" style={{ width: '20vw', height: 'auto' }}  alt="Calcipher Tech" />
          </a>
    </footer>
  );
};

export default Rodape;
