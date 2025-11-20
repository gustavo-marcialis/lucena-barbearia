import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styles from '../styles/Banner.module.css';

function Banner() {
  return (
    <section
      className={`d-flex align-items-center justify-content-center text-center ${styles.heroSection}`}
      id='home'
    >
      <Container className="animate-fade-in">
        <div className={`d-inline-block mb-3 px-3 py-1 rounded-pill ${styles.scheduleBadge}`}>
          <span
            className={`text-uppercase fw-bold ${styles.scheduleText}`}
            aria-label="Horário de atendimento: terça a sábado, das 9 às 19 horas"
          >
            ter - sab | 09h - 19h
          </span>
        </div>

        <h1 className={`display-2 mb-3 animate-slide-in-up delay-100 ${styles.title}`}>
          Lucena Barbearia
        </h1>

        <p className={`lead mb-5 animate-slide-in-up delay-200 ${styles.subtitle}`}>
          Barbearia Familiar, Com Ambiente Climatizado
        </p>

        <div className="animate-slide-in-up delay-300">
          <Button
            href="#agendar"
            size="lg"
            className={`px-5 py-3 rounded-pill text-uppercase fw-bold ${styles.ctaButton}`}
          >
            Agendar Horário
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Banner;
