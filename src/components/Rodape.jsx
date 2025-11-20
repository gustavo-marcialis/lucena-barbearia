// src/components/Footer.jsx
import React from 'react';
import Image from 'next/image';

const Rodape = () => {
  return (
    <footer className="text-light text-center bg-escuro">
          <p><strong>Desenvolvido Por</strong></p>
          <a href="https://calciphertech.vercel.app" target='blank'>
            <Image
              src="/images/logo-criador.svg"
              alt="Calcipher Tech"
              width={300}
              height={100}
              style={{ width: '30vw', height: 'auto' }}
            />
          </a>
    </footer>
  );
};

export default Rodape;
