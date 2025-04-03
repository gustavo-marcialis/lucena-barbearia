import React, { useState, useEffect } from 'react';
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

  // Aguardar o Calendly ser renderizado antes de rolar
  useEffect(() => {
    if (selectedCalendlyUrl) {
      // Rola até o Calendly após o componente ser exibido
      const agendaElement = document.getElementById("agenda");
      if (agendaElement) {
        agendaElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedCalendlyUrl]); // Executa sempre que o URL do Calendly for alterado

  const handleProfissionalClick = (calendlyUrl) => {
    setSelectedCalendlyUrl(calendlyUrl);
  };

  return (
    <main className="bg-escuro text-light text-center" id="agendar">
      <Image src="/images/agendamento.svg" alt="Agendamento Título" className="titulo" />
      <p><strong>Faça seu agendamento em menos de um minuto; simples e rápido!</strong></p><br />
      <p>Clique no profissional desejado para ver a agenda</p><br />
      <Container>
        <Row>
          {profissionais.map((profissional, index) => (
            <Col key={index} xs={12} md={6} className="mb-4">
              <div onClick={() => handleProfissionalClick(profissional.calendlyUrl)} style={{ cursor: 'pointer' }}>
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

      {selectedCalendlyUrl && (
        <div id="agenda">
          <Calendly url={selectedCalendlyUrl} />
        </div>
      )}
    </main>
  );
}

export default Agendar;
