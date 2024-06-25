import React, { useState } from 'react';
import { InlineWidget as Calendly } from 'react-calendly';
import { Image, Container, Row, Col } from 'react-bootstrap';

function Agendar() {
  const [selectedCalendlyUrl, setSelectedCalendlyUrl] = useState(null);

  const profissionais = [
    {
      nome: 'Ivan',
      foto: '/images/lucena.jpg',
      calendlyUrl: 'https://calendly.com/lucenabarbearia013/lucena-barbearia?back=1&month=2024-06',
    },
    {
      nome: 'Temoteo',
      foto: '/images/temoteo.jpg',
      calendlyUrl: 'https://calendly.com/temoteolucena/30min?back=1&month=2024-06',
    },
  ];

  return (
    <main className="bg-escuro text-light text-center" id="agendar">
      <Image src="/images/agendamento.svg" alt="Agendamento Título" className="titulo" />
      <h4>Faça seu agendamento em menos de um minuto; simples e rápido!</h4><br />
      <h5>Clique no profissional desejado para ver a agenda</h5><br />
      <Container>
        <Row>
          {profissionais.map((profissional, index) => (
            <Col key={index} xs={12} md={6} className="mb-4">
              <div onClick={() => setSelectedCalendlyUrl(profissional.calendlyUrl)} style={{ cursor: 'pointer' }}>
                <Image
                  src={profissional.foto}
                  alt={profissional.nome}
                  roundedCircle
                  className="mb-2"
                  style={{ width: '150px', height: '150px' }}
                />
                <h5>{profissional.nome}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {selectedCalendlyUrl && <Calendly url={selectedCalendlyUrl} />}
    </main>
  );
}

export default Agendar;