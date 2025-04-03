import React from 'react';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Servicos() {
  return (
    <section className="text-center" id="servicos">
      <Image src="/images/servico.svg" alt="Serviços" className="titulo" />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="image_container">
                <Image src="/images/icons/icon-corte.svg" alt="corte" style={{ width: '100px', height: 'auto' }} />
              </div>
              <h3>Corte de Cabelo</h3>
              <p>Descrição sobre corte de cabelo.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="image_container">
                <Image src="/images/icons/icon-barba.svg" alt="barba" style={{ width: '100px', height: 'auto' }} />
              </div>
              <h3>Barba</h3>
              <p>Descrição sobre barba.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="image_container">
                <Image src="/images/icons/icon-combo.svg" alt="combo" style={{ width: '100px', height: 'auto' }} />
              </div>
              <h3>Combo</h3>
              <p>Descrição sobre combo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicos;
