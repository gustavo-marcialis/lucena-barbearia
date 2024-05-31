import React from 'react';

function Local() {
  return (
    <section className="text-center" id='local'>
      <img src="/images/local.svg" alt="Local Título" className='titulo' />
      <br />
      <img src="/images/mapa.png" alt="Mapa" style={{ width: '50vw', height: 'auto' }} />
      <h4>Rua Santo Antonio, 622, Vila Caiçara - Praia grande/SP</h4>
      <a target='_blank' rel='noreferrer' href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjbroOQ24OGAxWVppUCHVmQDXEQ9Rd6BAhJEAM&url=%2Fmaps%2Fdir%2F%2FBarbearia%2BLucena%2Fdata%3D!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94ce21aa1e89ab39%3A0x37b1c0ae3a88122e%3Fsa%3DX%26ved%3D1t%3A3061%26ictx%3D111&usg=AOvVaw0hlg9Qy_mdrIGt8y7ovePC&opi=89978449'>
        <button type='button' className='vermapa'>VER NO MAPA</button>
      </a>
    </section>
  );
}

export default Local;
