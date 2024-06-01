import React from 'react';
import { Image, Div, Button } from 'react-bootstrap';

function Galeria() {
  return (
    <section className="bg-escuro text-light text-center" id='galeria'>
      <Image src="/images/galeria.svg" alt="Agendamento Título" className='titulo' />

      <div className="d-flex justify-content-center galeria">
        <Image src="/images/fachada.jpg" className="d-block" alt="Fachada" />
        <Image src="/images/profissional.jpg" className="d-block" alt="Profissional" />
        <Image src="/images/corte.jpg" className="d-block" alt="Corte" />
      </div>
      <br />

      <div className="d-flex justify-content-center galeria2">
        <Image src="/images/cliente.jpg" className="d-block" alt="Cliente Infantil" />
        <Image src="/images/servico.jpg" className="d-block" alt="Serviço" />
      </div>
      <br />
      
      <a href="https://www.instagram.com/barbearia_lucena/" target='_blank' rel='noreferrer'><Button type='button' className='insta'>Visitar Instagram</Button></a>
    </section>
  );
}

export default Galeria;
