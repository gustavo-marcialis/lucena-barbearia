// src/components/Footer.jsx
import React from 'react';

const Rodape = () => {
  return (
    <footer className="text-light text-center bg-escuro section-standard">
          <p><strong>Desenvolvido Por</strong></p>
          <a href="https://calciphertech.vercel.app" target='blank'>
            <img src="/images/logo-criador.svg" style={{ width: '30vw', maxWidth: '200px', height: 'auto' }}  alt="Calcipher Tech" />
          </a>
    </footer>
  );
};

export default Rodape;
