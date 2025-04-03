import React from 'react';
import { Image, Div, Button } from 'react-bootstrap';

function Local() {
  return (
    <section className="text-center" id='local'>
      <Image src="/images/local.svg" alt="Local Título" className='titulo' />
      <br />
      {/* Adicionando o iframe para o Google Maps */}
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', aspectRatio: '4 / 3' }}>
        <iframe
         title="Mapa de Localização"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.6083656212177!2d-46.5242573!3d-24.0448719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce21aa1e89ab39%3A0x37b1c0ae3a88122e!2sBarbearia%20Lucena!5e0!3m2!1spt-BR!2sbr!4v1743010781249!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p><strong>Rua Santo Antonio, 622, Vila Caiçara - Praia grande/SP</strong></p>

    
    </section>
  );
}

export default Local;
