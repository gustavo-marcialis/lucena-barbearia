import React, { useState, useEffect } from 'react';
import { InlineWidget as Calendly } from 'react-calendly';
import { Image, Container, Row, Col, Alert } from 'react-bootstrap';

function Agendar() {
  const [selectedCalendlyUrl, setSelectedCalendlyUrl] = useState(null);

  const profissionais = [
    {
      nome: 'Ivan Lucena',
      foto: '/images/lucena.png',
      calendlyUrl: 'https://calendly.com/lucenabarbearia013/lucena-barbearia',
    },
    {
      nome: 'Vinicios Superbi',
      foto: '/images/vinicius.png',
      calendlyUrl: 'https://calendly.com/temoteolucena/30min',
    },
    {
      nome: 'Temoteo',
      foto: '/images/temoteo-novo.jpg',
      whatsapp: '5511945748945',
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
    <section className="bg-escuro text-light section-standard" id="agendar">
      <div className="text-center">
        <Image src="/images/agendamento.svg" alt="Agendamento Título" className="titulo" />
      </div>
      
      
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="text-start">
             <p><strong>Faça seu agendamento em menos de um minuto; simples e rápido!</strong></p><br />
             <p>Clique no profissional desejado para ver a agenda</p><br />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {profissionais.map((profissional, index) => (
            <Col key={index} xs={12} md={4} className="mb-4 text-center">
              <div onClick={() => {
                if (profissional.whatsapp) {
                  window.open(`https://wa.me/${profissional.whatsapp}`, '_blank');
                } else {
                  handleProfissionalClick(profissional.calendlyUrl);
                }
              }} style={{ cursor: 'pointer' }}>
                <Image
                  src={profissional.foto}
                  alt={profissional.nome}
                  className="mb-2" 
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <p><strong>{profissional.nome}</strong></p>
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
    </section>
  );
}

export default Agendar;