import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Rodape = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-escuro py-4">
      <Container>
        <Row className="align-items-center justify-content-center">
          {/* Copyright Section */}
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {currentYear} <strong>Lucena Barbearia</strong>. <br className="d-md-none" />
              Todos os direitos reservados.
            </p>
          </Col>

          {/* Developer Credits Section */}
          <Col md={6} className="text-center text-md-end">
             <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-end gap-2">
               <span className="small text-uppercase" style={{ letterSpacing: '1px', opacity: 0.8, fontSize: '0.8rem' }}>
                 Desenvolvido Por
               </span>
               <a
                 href="https://calciphertech.vercel.app"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="d-inline-block hover-scale"
                 title="Visitar Calcipher Tech"
               >
                 <img
                   src="/images/logo-criador.svg"
                   alt="Calcipher Tech"
                   style={{ height: '40px', width: 'auto' }}
                 />
               </a>
             </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Rodape;
