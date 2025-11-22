import React, { useState, useEffect } from 'react';
import { InlineWidget as Calendly } from 'react-calendly';
import { Image, Container, Row, Col, Alert } from 'react-bootstrap';

// === INÍCIO: NOVAS VARIÁVEIS DE CONTROLE ===

// Documentação: 
// Use esta chave para controlar se Temoteo está de férias (true) ou não (false).
const IS_TEMOTEO_ON_VACATION = true; // <-- MUDAR PARA false QUANDO O TEMOTEO VOLTAR

// Documentação: 
// Objeto que armazena os dados do Vinícius. Ele usará a mesma URL de agendamento do Temoteo.
const substituto = {
  nome: 'Vinícius (Substituto Temporário)',
  // ALTERAÇÃO 1: Novo caminho da foto para o Vinícius (vinicius.png)
  foto: '/images/vinicius.png',        
  calendlyUrl: 'https://calendly.com/temoteolucena/30min?back=1&month=2024-06', // Mesma URL do Temoteo
};

// Dados originais do Temoteo (para fácil reversão)
const temoteoOriginal = {
  nome: 'Temoteo',
  foto: '/images/temoteo.jpg',
  calendlyUrl: 'https://calendly.com/temoteolucena/30min?back=1&month=2024-06',
};

// === FIM: NOVAS VARIÁVEIS DE CONTROLE ===


function Agendar() {
  const [selectedCalendlyUrl, setSelectedCalendlyUrl] = useState(null);

  // Documentação: Lógica que decide quem aparece na lista.
  // Se IS_TEMOTEO_ON_VACATION for true, o objeto 'substituto' entra no lugar de 'Temoteo'.
  const profissionais = [
    {
      nome: 'Ivan',
      // ALTERAÇÃO 2: Novo caminho da foto para o Ivan (lucena.png)
      foto: '/images/lucena.png',
      calendlyUrl: 'https://calendly.com/lucenabarbearia013/lucena-barbearia?back=1&month=2024-06',
    },
    // Condição para exibir Temoteo ou o Substituto Vinícius
    IS_TEMOTEO_ON_VACATION
      ? substituto
      : temoteoOriginal,
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
      
      {/* Documentação: 
      Alerta condicional que só é exibido se Temoteo estiver de férias.
      */}
      {IS_TEMOTEO_ON_VACATION && (
        <Container className='mb-4'>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <Alert variant="warning" className="text-start text-dark">
                <Alert.Heading>Aviso Importante: Temoteo em Férias!</Alert.Heading>
                <p>
                  O profissional Temoteo está de férias e retorna em Maio. Nesse período, será substituído pelo Vinícius.
                  <br />
                  Você pode agendar normalmente através do Vinícius, que usará a mesma agenda. O Temoteo retorna após o período de férias.
                </p>
              </Alert>
            </Col>
          </Row>
        </Container>
      )}
      
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
            <Col key={index} xs={12} md={6} className="mb-4 text-center">
              <div onClick={() => handleProfissionalClick(profissional.calendlyUrl)} style={{ cursor: 'pointer' }}>
                <Image
                  src={profissional.foto}
                  alt={profissional.nome}
                  // ALTERAÇÃO 3: Removida a propriedade roundedCircle para tirar o arredondamento
                  className="mb-2" 
                  style={{ width: '150px', height: '150px' }}
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