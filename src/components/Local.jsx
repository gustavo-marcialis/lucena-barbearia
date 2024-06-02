import React from 'react';
import { Image, Div, Button } from 'react-bootstrap';

function Local() {
  return (
    <section className="text-center" id='local'>
      <Image src="/images/local.svg" alt="Local Título" className='titulo' />
      <br />
      <Image src="/images/mapa.png" alt="Mapa" style={{ width: '50vw', height: 'auto' }} />
      <h4>Rua Santo Antonio, 622, Vila Caiçara - Praia grande/SP</h4>
      
        <a target='_blank' rel='noreferrer' href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjbroOQ24OGAxWVppUCHVmQDXEQ9Rd6BAhJEAM&url=%2Fmaps%2Fdir%2F%2FBarbearia%2BLucena%2Fdata%3D!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94ce21aa1e89ab39%3A0x37b1c0ae3a88122e%3Fsa%3DX%26ved%3D1t%3A3061%26ictx%3D111&usg=AOvVaw0hlg9Qy_mdrIGt8y7ovePC&opi=89978449'>
          <Button type='button' className='botao botao-dark'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>
          &nbsp;

          Ver Mapa</Button>
      </a>
    </section>
  );
}

export default Local;
